// Projects, by category of the page: the agentic harness (featured), the iOS app led (SwiftHFR), the ArtCraft
// Crafting Apps contributed to, the enterprise-grade projects, the homelab-grade projects. Facts and their sources are noted next to each entry.

export type Repo = `${string}/${string}`;

/** An image under `public/`, with its intrinsic size (avoids layout shift). */
export interface Visual {
  src: string;
  alt: string;
  width: number;
  height: number;
}

/** Fields shared by every project shown with a GitHub repository. */
export interface Project {
  name: string;
  /** `owner/name` of the repository the card links to. */
  repo: Repo;
  description: string;
  tech: string[];
  visual?: Visual;
  /** Fallback star count, used when the GitHub API cannot be reached; unset = stars not shown. */
  stars?: number;
  /** Maturity shown as a chip next to the name (e.g. "Alpha"); unset = released or not worth saying. */
  status?: string;
  /** One line at the bottom of the card: what comes next. */
  next?: string;
}

/** The harness every other project is built with (featured, first section). */
export interface Harness extends Project {
  highlights: string[];
}

/** A key figure of a project ("~150k" / "lines of Swift"). */
export interface Fact {
  value: string;
  label: string;
}

/** A project the maintainer leads in someone else's repository. */
export interface Lead extends Project {
  /** Subtitle under the name (what the project is). */
  subtitle: string;
  role: string;
  /** Page the card links to (e.g. a branch), instead of the repository root. */
  href: string;
  facts: Fact[];
  /** Short notes under the figures (licence, status). */
  notes: string[];
}

/** One app of the ArtCraft Crafting Apps suite; adding the next one is one entry in `craft.apps`. */
export interface CraftApp extends Project {
  /** What the maintainer does on it, e.g. "18 merged PRs, 100+ commits" or "Now working on it". */
  contribution: string;
  status: 'contributor' | 'in-progress';
}

export interface CraftSuite {
  name: string;
  site: string;
  /** Repository of ArtCraft itself; its stars are shown in the intro. */
  repo: Repo;
  stars: number;
  apps: CraftApp[];
}

// README and description of francoisgn/belayline-agentic-harness, read 2026-11-25. Social preview downloaded from
// the repository settings (repository-images.githubusercontent.com/1449173316/…), converted to WebP.
export const belayline: Harness = {
  name: 'Belayline',
  repo: 'francoisgn/belayline-agentic-harness',
  description:
    'A versioned, open harness for building software with coding agents: the same method, guardrails, lessons and ' +
    'checks in every repository, for any agent (Claude Code, Codex, Cursor, Gemini CLI, Copilot, Aider). ' +
    'The context lives in the repository, not in the agent.',
  highlights: [
    'Intent and TDD',
    'Issues → lots → PRs',
    'Adversarial reviews',
    'Pluggable compliance',
    'FinOps and CI budget',
    'Flow dashboard',
  ],
  tech: ['Python', 'Shell', 'GitHub Actions', 'Claude Code'],
  visual: {
    src: '/projects/belayline.webp',
    alt: 'Belayline, "Keep coding agents on track": a compass whose needle holds its heading while a dashed agent ' +
      'trajectory crosses its rings; intent, TDD, review, merge.',
    width: 1600,
    height: 500,
  },
  stars: 5,
};

// Figures measured on ezzz/HFRnow, branch dev-swift at dca2318b (2026-11-27): 151,934 lines in .swift files, 83,275
// of them in test paths; 4,877 `@Test` functions; 638 of 676 commits by francoisgn; `gh search prs --author
// francoisgn --repo ezzz/HFRnow --merged` → 577 (8 open). HFRKit products: HFRModels, HFRParsing, HFRNetwork,
// HFRStorage, HFRClient. LICENSE: PolyForm Noncommercial 1.0.0. README: "No public build yet. M1 (MVP), M2 (read &
// reply) and M3 (engine) are complete; M4 (legacy parity, App Store) is at 81 %".
// Visual: docs/assets/hero.jpg of dev-swift at 3f0d65cb (README hero, #1380, 2026-11-27), 1600 px wide WebP.
export const swiftHfr: Lead = {
  name: 'SwiftHFR',
  subtitle: 'HFRnow, the iPhone app of the hardware.fr forum, rewritten in Swift',
  role: 'Lead, Swift rewrite',
  repo: 'ezzz/HFRnow',
  href: 'https://github.com/ezzz/HFRnow/tree/dev-swift',
  description:
    'I drive the full rewrite of the community HFR forum app from Objective-C to native Swift and SwiftUI: a ' +
    'modular engine (HFRKit, five modules), differential parity tests against the legacy parsers, and a CI and ' +
    'security pipeline (CI, CodeQL, dependency review, secret scanning, CodeRabbit).',
  facts: [
    { value: '~150k', label: 'lines of Swift, over half of them tests' },
    { value: '4,800+', label: 'Swift Testing tests' },
    { value: '550+', label: 'merged pull requests' },
    { value: '94 %', label: 'of the commits on the branch' },
  ],
  notes: [
    'Free, non-commercial (PolyForm Noncommercial) and built by volunteers.',
    'Not on the App Store yet: milestones M1 (MVP), M2 (read and reply) and M3 (engine) are complete, M4 (legacy ' +
      'parity, App Store) is at 81 %; the first TestFlight build is next.',
  ],
  tech: ['Swift', 'SwiftUI', 'Swift Testing', 'iOS'],
  visual: {
    src: '/projects/swifthfr.webp',
    alt: 'SwiftHFR, "Same forum. Now native on iOS.": an iPhone lying on a printed page of the hardware.fr forum ' +
      'shows the same categories as a native iOS list.',
    width: 1600,
    height: 800,
  },
};

// storytold READMEs read 2026-11-25: "Crafting Apps: free, open-source creative tools from the ArtCraft team, each
// written from scratch in Rust"; LightCraft "Clean-room" rule. Contributions: `gh search prs --author francoisgn
// --repo storytold/lightcraft --merged` → 18; commits API (author=francoisgn) → 109; none yet on storytold/pdfcraft.
// Visuals: docs/images/hero-tetons.jpg (LightCraft) and docs/images/pdfcraft-viewer.png (PdfCraft), MIT OR
// Apache-2.0, converted to WebP. ArtCraft stars: 42,204 on 2026-11-25 (fallback).
export const craft: CraftSuite = {
  name: 'ArtCraft',
  site: 'https://getartcraft.com',
  repo: 'storytold/artcraft',
  stars: 42204,
  apps: [
    {
      name: 'LightCraft',
      repo: 'storytold/lightcraft',
      description:
        'Photo library and raw developer: a complete darkroom in one native app, every adjustment non-destructive. ' +
        'macOS, Windows, Linux and web.',
      contribution: '18 merged PRs, 100+ commits',
      status: 'contributor',
      tech: ['Rust'],
      visual: {
        src: '/projects/lightcraft.webp',
        alt: 'LightCraft\'s Edit view with Ansel Adams\' "The Tetons and the Snake River" in the loupe and the Light ' +
          'and Effects panels open.',
        width: 1200,
        height: 750,
      },
    },
    {
      name: 'PdfCraft',
      repo: 'storytold/pdfcraft',
      description:
        'PDF reader and editor: faithful rendering of world scripts and transparency, saves that never lose the ' +
        'original bytes, no account and no telemetry.',
      contribution: 'Now working on it',
      status: 'in-progress',
      tech: ['Rust'],
      visual: {
        src: '/projects/pdfcraft.webp',
        alt: 'PdfCraft with a specimen PDF open, the All tools panel on the left and threaded comments on the right.',
        width: 1200,
        height: 750,
      },
    },
  ],
};

// Enterprise grade: tools for a company's cloud platform. READMEs read 2026-11-28. Visuals: the GCA portal's
// docs/social-preview.png (WebP) and the Backstage plugin's docs/diagrams/architecture.svg, as is.
export const enterprise: Project[] = [
  {
    name: 'GCA License Portal',
    repo: 'francoisgn/gcp-gca-lic-mgmt',
    description:
      'Self-service Gemini Code Assist licenses for a Google Cloud organization: eligible employees get a seat in ' +
      'seconds, unused seats go back to the pool, administrators keep control, Google stays the source of truth.',
    tech: ['Go', 'Cloud Run', 'PostgreSQL', 'Terraform'],
    status: 'Alpha',
    next: 'Coming next: the same flow as a Backstage plugin, inside the internal developer portal.',
    visual: {
      src: '/projects/gca-license-portal.webp',
      alt: 'GCA License Portal: self-service Gemini Code Assist licenses, approved in seconds, reclaimed when unused; ' +
        'employee, IAP and Google SSO, the portal on Cloud Run, the license pool, the enterprise directory and ' +
        'Cloud SQL.',
      width: 1280,
      height: 640,
    },
    stars: 0,
  },
  {
    name: 'Apigee X Explorer for Backstage',
    repo: 'francoisgn/backstage-apigeeX-explorer',
    description:
      'Explore, audit and clean up an Apigee X platform at scale from Backstage: one matrix of every proxy across ' +
      'environments, drift against your infrastructure as code, and the endpoints nobody calls any more.',
    tech: ['TypeScript', 'Backstage', 'Apigee X'],
    status: 'Pre-alpha',
    visual: {
      src: '/projects/backstage-apigeex-explorer.svg',
      alt: 'Planned architecture: adopter CI exports spaces and desired state; the Backstage frontend and backend ' +
        'plugins read Apigee X management and analytics APIs (read-only) and store snapshots and drift reports.',
      width: 1265,
      height: 658,
    },
    stars: 0,
  },
];

// Homelab grade: tools for a small office / home office. Descriptions from each repository's GitHub description
// and README, read 2026-11-28. SoHo Monitor is an app card (src/data/apps.ts). seed-box visual: its
// docs/assets/social-preview.png (WebP).
export const homelab: Project[] = [
  {
    name: 'seed-box',
    repo: 'francoisgn/seed-box',
    description:
      'Seedbox control plane for qBittorrent, cross-seed and Prowlarr: check that your library is seeded on every ' +
      'tracker, then fix duplicates, failed matches and stopped torrents in one click. One container.',
    tech: ['Python', 'Docker', 'qBittorrent'],
    visual: {
      src: '/projects/seed-box.webp',
      alt: 'seed-box in a terminal window: "is my library actually seeded on every tracker?", a library heatmap, ' +
        'coverage per tracker and the five fixes it applies in one click.',
      width: 1280,
      height: 640,
    },
    stars: 0,
  },
  {
    name: 'SoHo-agent-relay',
    repo: 'francoisgn/SoHo-agent-relay',
    description:
      'An always-on Claude Code agent on an old home NAS, driven from your phone: a hardened container with ' +
      'guardrails (policy hooks, PR-only GitHub, read-mostly network APIs) that asks before anything risky.',
    tech: ['Claude Code', 'Docker', 'Bash'],
    stars: 0,
  },
  {
    name: 'activity-cheatmap',
    repo: 'francoisgn/activity-cheatmap',
    description:
      'Draw pixel art, gradients and text on your GitHub contribution graph with backdated commits, from an interactive CLI with a live preview.',
    tech: ['Python', 'CLI'],
    visual: {
      src: '/projects/activity-cheatmap.webp',
      alt: 'activity-cheatmap in a terminal: the main menu next to contribution graphs drawn with a diagonal ' +
        'gradient, a row of sprites and the word COVID.',
      width: 960,
      height: 480,
    },
    stars: 0,
  },
];
