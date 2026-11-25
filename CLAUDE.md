# CLAUDE.md

Instructions for coding agents (Claude Code reads this file; other agents read `AGENTS.md`). Product details: [README.md](README.md).

<!-- harness:begin harness -->
## Shared harness: Belayline 0.5.0-dev

This block is managed by `scripts/harness-sync.sh`, which lives in the [Belayline](https://github.com/francoisgn/belayline-agentic-harness) harness repository, not in this repository: do not edit it here (propose changes in the harness). To update: skill `/harness-update`, or, from the root of this repository, clone the harness at the wanted tag next to it (`git clone --depth 1 --branch vX.Y.Z https://github.com/francoisgn/belayline-agentic-harness.git ../belayline`) then run `../belayline/scripts/harness-sync.sh --target .` (`.harness/docs/ADOPTION.md` §Updates).

**Precedence**: the project rules win over the harness. The project records each deviation from the harness, with its reason, in the "Harness overrides" section of its `AGENTS.md`; its settings go in `.harness/config.json`; everything outside this block belongs to the project. Order on a conflict: "Harness overrides" section, then the rest of the project rules (`AGENTS.md`, `CLAUDE.md`), then `.harness/config.json`, then `.harness/docs/`. Report an unresolved conflict in an issue of the project.

@.harness/docs/ESSENTIALS.md

Read as the task requires (not loaded by default): method `.harness/docs/METHODOLOGY.md`, conventions `.harness/docs/CONVENTIONS.md`, lessons `.harness/docs/LESSONS.md` (self-review before every PR), reviews `.harness/docs/REVIEW-ROUNDS.md`, orchestration and model choice `.harness/docs/ORCHESTRATION.md`, branches and releases `.harness/docs/BRANCHING-RELEASE.md`, CI budget and security `.harness/docs/CI-BUDGET.md`, project README `.harness/docs/README-STANDARD.md`, Mac handoff `.harness/docs/MAC-HANDOFF.md`.
Skills: `/intent`, `/lot-start`, `/lot-finish`, `/local-check`, `/review-round`, `/feedback-triage`, `/lessons-check`, `/readme-update`, `/status-report`, `/compliance-review`, `/lesson-propose`, `/harness-update`.
<!-- harness:end harness -->

## The project

The personal showcase site of the maintainer (profile, App Store apps, open-source projects), an Astro static site
deployed to GitHub Pages on `francois-g.com`. Also tracks the domain's DNS and the home-network names
(`nas.`, `ui.`) as issues; nothing is hosted at home. Details: [README.md](README.md).

## Build and tests

```sh
npm ci && npm run check && npm run build     # or: docker compose run --rm check
npm run dev                                  # or: docker compose up dev (http://localhost:4321)
scripts/local-check.sh                       # pre-commit + check + build, as CI
```

A visual change is checked by looking at it: desktop and mobile widths, light and dark, screenshots in the PR.

## Project conventions

- **Static only**: no server code, no cookies, no analytics or third-party scripts without an issue and the
  maintainer's yes. Fonts: Apple system stack (`-apple-system, BlinkMacSystemFont, "SF Pro Text", …`), no web font.
- **Design**: Liquid Glass spirit (translucent cards, specular edge, subtle gradients), Apple system colours, light and
  dark (`prefers-color-scheme`), responsive from 360 px, accessible (contrast, focus, `prefers-reduced-motion`).
- **Content as data**: projects and links in `src/data/` (typed), not hard-coded in markup.
- **Personal data**: only what the maintainer chose to publish (name, public profiles, public projects). No email
  address in clear, no phone, no home IP or hostname. The full name appears only on the unlisted `/cv/` page and its
  PDF (`src/data/cv.ts`, contact = LinkedIn and GitHub) and in the PDF's file name (`francois-guillon-cv.pdf`, as
  a recruiter expects); the home page says "François G.". Employer (Valeo) and education (HEC) may be named on
  public pages: the maintainer publishes them on LinkedIn (decision 2026-11-25).
- **DNS and network changes** (Gandi records, UniFi, NAS) are never applied by an agent without the maintainer's
  explicit yes in the session; Gandi API tokens live in the macOS Keychain only.
- **Language**: English for code, docs and commits; site content in English with a French version when added.

## Branches and CI

- Model B: one integration branch, `main`, protected (ruleset: PR + green CI). Work on `<type>/<short-name>`.
- Commits: `<zone>: <message>` in English (`site:`, `dns:`, `network:`, `build:`, `ci:`, `docs:`, `harness:`).
- CI: pre-commit, `astro check`, build, gitleaks; `main` deploys to GitHub Pages.

## Project-specific labels

One `area:` per issue (`.github/labels.local.json`): `site`, `dns`, `network`, `build`.
