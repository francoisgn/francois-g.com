#!/usr/bin/env bash
# Renders the unlisted CV page (/cv/) to its downloadable A4 PDF with headless Chrome, from the built site served by
# a static server on dist/: one source (src/data/cv.ts + the page's print styles), the PDF is committed in public/cv/.
# Usage:
#   scripts/cv-pdf.sh           build, render public/cv/francois-guillon-cv.pdf, record the inputs' hash
#   scripts/cv-pdf.sh --check   fail if the PDF is older than its inputs (hash mismatch); run by pre-commit and CI
# Needs: npm, python3 (static server), Google Chrome or Chromium (CHROME=/path/to/chrome to override), shasum (macOS) or sha256sum (Linux).
# The PDF's metadata come from Chrome: Title = the page <title> (full name + "CV"), no author, no address/phone/email.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
PDF=public/cv/francois-guillon-cv.pdf
STAMP=scripts/cv-pdf.sha256
PORT="${CV_PDF_PORT:-4331}"
# Files that change what the PDF shows. Keep in sync with the `files` regex of the cv-pdf hook (.pre-commit-config.yaml).
INPUTS=(src/data/cv.ts src/pages/cv/index.astro src/layouts/Layout.astro src/styles/global.css
  src/components/GlassCard.astro src/components/Icon.astro)

if [ -t 1 ] && [ -z "${NO_COLOR:-}" ]; then G=$'\e[32m'; Y=$'\e[33m'; R=$'\e[31m'; N=$'\e[0m'; else G=; Y=; R=; N=; fi
ok() { printf '%sok%s   %s\n' "$G" "$N" "$*"; }
warn() { printf '%swarn%s %s\n' "$Y" "$N" "$*" >&2; }
ko() { printf '%sko%s   %s\n' "$R" "$N" "$*" >&2; exit 1; }

inputs_hash() {
  local sum
  if command -v sha256sum >/dev/null 2>&1; then sum=(sha256sum); else sum=(shasum -a 256); fi
  cat "${INPUTS[@]}" | "${sum[@]}" | cut -d' ' -f1
}

if [ "${1:-}" = "--check" ]; then
  [ -f "$PDF" ] || ko "$PDF is missing: run scripts/cv-pdf.sh"
  [ -f "$STAMP" ] || ko "$STAMP is missing: run scripts/cv-pdf.sh"
  [ "$(cat "$STAMP")" = "$(inputs_hash)" ] || ko "$PDF is older than its inputs (${INPUTS[*]}): run scripts/cv-pdf.sh"
  ok "CV PDF up to date"
  exit 0
fi
[ $# -eq 0 ] || ko "usage: $0 [--check]"

CHROME="${CHROME:-}"
if [ -z "$CHROME" ]; then
  for c in "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" google-chrome chromium chromium-browser; do
    if command -v "$c" >/dev/null 2>&1 || [ -x "$c" ]; then CHROME="$c"; break; fi
  done
fi
[ -n "$CHROME" ] || ko "Chrome not found: set CHROME=/path/to/chrome"

spin() { # spin <message> <command…>: runs the command with a spinner on a TTY, its output kept for a failure
  local msg="$1" log; shift
  log="$(mktemp)"
  "$@" >"$log" 2>&1 &
  local pid=$! i=0 frames="|/-\\"
  while kill -0 "$pid" 2>/dev/null; do
    [ -t 1 ] && printf '\r%s %s' "${frames:i++%4:1}" "$msg"
    sleep 0.2
  done
  [ -t 1 ] && printf '\r\033[K'
  if wait "$pid"; then rm -f "$log"; ok "$msg"; else cat "$log" >&2; rm -f "$log"; ko "$msg failed"; fi
}

spin "Build the site" npm run build --silent

# python3's static server rather than `astro preview`, which runs as a single shared daemon in Astro 7.
python3 -m http.server "$PORT" --bind 127.0.0.1 --directory dist >/dev/null 2>&1 &
PREVIEW=$!
PROFILE="$(mktemp -d)"
trap 'kill "$PREVIEW" 2>/dev/null && wait "$PREVIEW" 2>/dev/null; rm -rf "$PROFILE"' EXIT
for _ in $(seq 1 50); do
  curl -fsS -o /dev/null "http://127.0.0.1:$PORT/cv/" 2>/dev/null && break
  sleep 0.2
done
curl -fsS -o /dev/null "http://127.0.0.1:$PORT/cv/" || ko "the static server did not answer on port $PORT"

mkdir -p "$(dirname "$PDF")"
spin "Render $PDF" "$CHROME" --headless=new --disable-gpu --no-pdf-header-footer --run-all-compositor-stages-before-draw \
  --virtual-time-budget=5000 --user-data-dir="$PROFILE" --print-to-pdf="$ROOT/$PDF" "http://127.0.0.1:$PORT/cv/"
[ -s "$PDF" ] || ko "$PDF was not written"
inputs_hash >"$STAMP"
ok "$PDF ($(wc -c <"$PDF" | tr -d ' ') bytes), inputs hash in $STAMP"
warn "rebuild (npm run build) before a preview: dist/ still has the previous PDF"
