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

> The personal showcase site of François G.: profile (LinkedIn, GitHub), App Store apps and open-source projects,
> as cards with technology chips, descriptions and links. Static, fast, served by GitHub Pages on
> [francois-g.com](https://francois-g.com).

**TL;DR**: an Astro static site, designed in the Liquid Glass spirit (Apple system fonts, glass cards, subtle
gradients), built and deployed by CI from `main`. Nothing runs on a home server. Status: **bootstrap**; see the
[issues](https://github.com/francoisgn/francois-g.com/issues).

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
| `src/pages/` | Pages (home: profile, apps, open source) |
| `src/components/` | Glass cards, chips, header |
| `src/data/` | Projects and profile data (typed) |
| `public/` | Static files, `CNAME` (custom domain) |
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

## Development

```sh
pre-commit install            # once per clone (hooks pinned)
scripts/local-check.sh        # pre-commit + astro check + build, as CI
```

Coding agents follow [`CLAUDE.md`](CLAUDE.md) / [`AGENTS.md`](AGENTS.md) and the
[Belayline](https://github.com/francoisgn/belayline-agentic-harness) harness; see also
[CONTRIBUTING.md](CONTRIBUTING.md), [SECURITY.md](SECURITY.md) and [CHANGELOG.md](CHANGELOG.md).

## License

Code: [MIT](LICENSE). Personal content (texts, photo, logos of the projects) is not covered by the licence. The vendored
harness files in `.harness/` carry Belayline's own MIT licence.

## Support

[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-francoisgn-FFDD00?logo=buymeacoffee&logoColor=black)](https://buymeacoffee.com/francoisgn)
