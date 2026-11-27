# Changelog

Notable changes, newest first. Entries accumulate under "Unreleased" until the first tag (`vX.Y.Z`,
[semver](https://semver.org)).

## Unreleased

### Changed

- SwiftHFR visual: the new README hero of HFRnow's `dev-swift` ("Same forum. Now native on iOS.", ezzz/HFRnow#1380).

### Added

- SoHo Monitor in the apps section (#13), side by side with Crédit Immo: its Liquid Glass icon, light and dark, and
  a mosaic of the app's own tiles (disk, Claude, CPU, memory); it leaves "Other projects". The section becomes "Apps"
  and app links are optional (new `source` link) for an app that is not on the App Store.
- Crédit Immo public pages (#11), in French: `/credit-immo/` (presentation, App Store renders), `/credit-immo/assistance/`
  (support, FAQ) and `/credit-immo/confidentialite/` (privacy policy), moved from the app's former GitHub Pages site;
  the app's Liquid Glass icon, light and dark, on the home page card too.

### Changed

- Site content and structure (#3): bio (platform manager by day, side projects by night), LinkedIn link; sections
  reordered: Belayline featured first (every project is built with it), SwiftHFR as the Swift rewrite he leads (key
  figures), the ArtCraft Crafting Apps (LightCraft, PdfCraft), Crédit Immo with its App Store link and renders, then
  the other projects. Project images in WebP with intrinsic sizes, lazy-loaded; new Open Graph image.

### Added

- Unlisted CV page `/cv/` (`noindex`, out of the sitemap, not linked from the home page) built from `src/data/cv.ts`,
  with a print stylesheet and a downloadable A4 PDF rendered from the page by `scripts/cv-pdf.sh` (freshness checked
  by a pre-commit hook, replayed in CI). Contact: LinkedIn and GitHub only.
- Memoji avatar in the header, the CV page and the Open Graph image.
- Site v1 (#3): one page with the profile, the App Store apps and the open-source projects, in a Liquid Glass
  design (light and dark, from 360 px); content typed in `src/data/`; GitHub stars at build time with a static
  fallback; Open Graph and Twitter meta, SVG favicon, touch icon.
- Bootstrap: Astro 7 static site, GitHub Pages deployment from `main` (custom domain), dev container (OrbStack /
  Docker compose), Belayline harness subset, pre-commit (gitleaks, actionlint, zizmor, markdownlint, hadolint), CI,
  Dependabot, security policy, MIT licence.
