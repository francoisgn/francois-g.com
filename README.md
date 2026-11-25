# francois-g.com

![Astro 7](https://img.shields.io/badge/Astro-7-BC52EE?logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)
![Node 24 LTS](https://img.shields.io/badge/Node-24_LTS-5FA04E?logo=nodedotjs&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-custom_domain-222222?logo=githubpages&logoColor=white)
![Docker compose](https://img.shields.io/badge/dev-Docker_compose-2496ED?logo=docker&logoColor=white)
[![CI](https://github.com/francoisgn/francois-g.com/actions/workflows/ci.yml/badge.svg)](https://github.com/francoisgn/francois-g.com/actions/workflows/ci.yml)
![pre-commit](https://img.shields.io/badge/pre--commit-gitleaks_·_actionlint_·_hadolint-FAB040?logo=precommit&logoColor=white)
![Belayline](https://img.shields.io/badge/harness-Belayline-111111)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue)](LICENSE)
[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-francoisgn-FFDD00?logo=buymeacoffee&logoColor=black)](https://buymeacoffee.com/francoisgn)

> The personal showcase site of François G.: profile (LinkedIn, GitHub), the Belayline harness every project is
> built with, the SwiftHFR rewrite he leads, his ArtCraft Crafting Apps contributions, his App Store app and other
> open-source projects, as cards with images, technology chips, descriptions and links. Static, fast, served by GitHub Pages on
> [francois-g.com](https://francois-g.com).

**TL;DR**: an Astro static site, designed in the Liquid Glass spirit (Apple system fonts, glass cards, subtle
gradients), built and deployed by CI from `main`. Nothing runs on a home server. Status: **v1** (one page: profile,
Belayline, SwiftHFR, ArtCraft Crafting Apps, App Store app, other projects); see the [issues](https://github.com/francoisgn/francois-g.com/issues).

![The site in light mode, desktop width](docs/screenshots/desktop-light.jpg)

## Architecture

```text
 src/ (Astro pages, components, project data)
   │  npm run build (CI, every push and PR)
   ▼
 dist/ ── main only ──▶ GitHub Pages ──▶ https://francois-g.com  (DNS at Gandi: apex + www → Pages)

 nas.francois-g.com / ui.francois-g.com: local names on the home network (UniFi local DNS, VPN),
 and HTTPS redirects from the Internet (QuickConnect, unifi.ui.com). No port is opened at home.
```

| Path | Role |
|---|---|
| `src/pages/cv/index.astro` | Unlisted CV page (`noindex`, out of the sitemap, not linked unless `cv.linkedFromHome`), with print styles for the PDF |
| `src/pages/index.astro` | The one page: header, Belayline (featured), SwiftHFR, ArtCraft Crafting Apps, App Store app, other projects, footer |
| `src/layouts/Layout.astro` | Page shell: meta (Open Graph, Twitter), favicon, skip link |
| `src/components/` | `GlassCard`, `Chip`, `Header`, `FeaturedCard` (harness), `LeadCard` (project led, stat tiles), `CraftCard` (one Crafting App), `AppCard` (with App Store renders), `ProjectCard`, `Shot` (sized, lazy image), `Stars`, `Footer`, `Icon` (inline SVG) |
| `src/styles/global.css` | Liquid Glass tokens (colours, glass, shadows), light and dark |
| `src/data/` | Typed content: `profile.ts`, `apps.ts`, `projects.ts` (`belayline`, `swiftHfr`, `craft`, `projects`); the sources of every figure are noted next to it |
| `scripts/cv-pdf.sh` | Renders `/cv/` to `public/cv/francois-guillon-cv.pdf` (A4, headless Chrome); `--check` (pre-commit, CI) fails when the PDF is older than its inputs |
| `src/lib/stars.ts` | GitHub stars fetched at build time; any API error keeps the static fallback |
| `public/` | Static files: `CNAME` (custom domain), favicon, touch icon, `og.png`, app icon and App Store renders (`apps/`), project images (`projects/`, WebP) |
| `docs/screenshots/` | Desktop and mobile, light and dark; the CV page (`cv-*.jpg`) |
| `Dockerfile`, `compose.yaml` | Dev and test container (`docker compose up dev`) |
| `.github/workflows/ci.yml` | pre-commit, `astro check`, build, gitleaks; deploy to Pages from `main` |

## Quick start

With Node 24+ (`.nvmrc`):

```sh
npm ci
npm run dev        # http://localhost:4321
npm run check && npm run build && npm run preview
```

Or in a container (OrbStack or Docker Desktop):

```sh
docker compose up dev              # hot reload on http://localhost:4321
docker compose run --rm check      # astro check + build, as CI
```

## Editing the content

Everything shown comes from `src/data/`; an unset link is not rendered. Adding the next ArtCraft app is one entry
in `craft.apps` (`src/data/projects.ts`); images go to `public/projects/` as WebP with their `width` and `height`. Star counts are fetched from the GitHub REST API at build
time, without a token; when the API fails or is rate-limited, the `stars` value of `projects.ts` is used and the
build goes on. Set `GITHUB_API_URL` to an unreachable URL to try that path.

The CV lives in `src/data/cv.ts` (never an address, phone number or email: LinkedIn and GitHub only). After any change
to it or to its page, run `scripts/cv-pdf.sh` (needs Chrome and python3) and commit the regenerated PDF and
`scripts/cv-pdf.sha256`; the `cv-pdf` pre-commit hook, replayed in CI, fails otherwise. To list the CV on the home
page, set `linkedFromHome: true`.

## Development

```sh
pre-commit install            # once per clone (hooks pinned)
scripts/local-check.sh        # pre-commit + astro check + build, as CI
```

Coding agents follow [`CLAUDE.md`](CLAUDE.md) / [`AGENTS.md`](AGENTS.md) and the
[Belayline](https://github.com/francoisgn/belayline-agentic-harness) harness; see also
[CONTRIBUTING.md](CONTRIBUTING.md), [SECURITY.md](SECURITY.md) and [CHANGELOG.md](CHANGELOG.md).

## License

Code: [MIT](LICENSE). Personal content (texts, photo, logos and images of the projects) is not covered by the licence;
the LightCraft and PdfCraft screenshots come from the storytold repositories (MIT OR Apache-2.0). The vendored
harness files in `.harness/` carry Belayline's own MIT licence.

## Support

[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-francoisgn-FFDD00?logo=buymeacoffee&logoColor=black)](https://buymeacoffee.com/francoisgn)
