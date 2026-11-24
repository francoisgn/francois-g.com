# Changelog

Notable changes, newest first. Entries accumulate under "Unreleased" until the first tag (`vX.Y.Z`,
[semver](https://semver.org)).

## Unreleased

### Added

- Site v1 (#3): one page with the profile, the App Store apps and the open-source projects, in a Liquid Glass
  design (light and dark, from 360 px); content typed in `src/data/`; GitHub stars at build time with a static
  fallback; Open Graph and Twitter meta, SVG favicon, touch icon.
- Bootstrap: Astro 7 static site, GitHub Pages deployment from `main` (custom domain), dev container (OrbStack /
  Docker compose), Belayline harness subset, pre-commit (gitleaks, actionlint, zizmor, markdownlint, hadolint), CI,
  Dependabot, security policy, MIT licence.
