// Open-source projects. Descriptions shortened from each repository's GitHub description
// (`gh repo view <repo> --json description,primaryLanguage,repositoryTopics`, read 2026-11-24).

export type Repo = `${string}/${string}`;

export interface Project {
  name: string;
  /** `owner/name` of the repository the card links to; its stars are fetched at build time. */
  repo: Repo;
  description: string;
  tech: string[];
  /** `own` = the maintainer's project; `contribution` = someone else's project the maintainer contributes to. */
  kind: 'own' | 'contribution';
  /** Original repository of a contribution, when the card links to a fork. */
  upstream?: Repo;
  /** Fallback star count, used when the GitHub API cannot be reached (values read 2026-11-24). */
  stars?: number;
}

export const projects: Project[] = [
  {
    name: 'soho-monitor',
    repo: 'francoisgn/soho-monitor',
    description:
      'Native macOS menu bar monitor for a small office: disk usage by your own categories, live CPU, memory and network, Synology, UniFi and Claude usage.',
    tech: ['Swift', 'SwiftUI', 'Python', 'macOS 26'],
    kind: 'own',
    stars: 0,
  },
  {
    name: 'Belayline',
    repo: 'francoisgn/belayline-agentic-harness',
    description:
      'A versioned, open harness for building software with coding agents: intent and TDD, issues to PRs, adversarial reviews, compliance and FinOps.',
    tech: ['Python', 'Shell', 'GitHub Actions', 'Coding agents'],
    kind: 'own',
    stars: 5,
  },
  {
    name: 'seed-box',
    repo: 'francoisgn/seed-box',
    description:
      'Control plane for qBittorrent, cross-seed and Prowlarr: see whether your library is seeded on every tracker, then fix what is not in one click.',
    tech: ['Python', 'Docker', 'qBittorrent'],
    kind: 'own',
    stars: 0,
  },
  {
    name: 'activity-cheatmap',
    repo: 'francoisgn/activity-cheatmap',
    description:
      'Draw pixel art, gradients and text on your GitHub contribution graph with backdated commits, from an interactive CLI with a live preview.',
    tech: ['Python', 'CLI'],
    kind: 'own',
    stars: 0,
  },
  {
    name: 'LightCraft',
    repo: 'francoisgn/lightcraft',
    description: 'An open-source, non-destructive photo editor written from scratch in pure Rust.',
    tech: ['Rust'],
    kind: 'contribution',
    upstream: 'storytold/lightcraft',
    stars: 0,
  },
  {
    name: 'HFRnow',
    repo: 'ezzz/HFRnow',
    description: 'iOS app for the hardware.fr forum.',
    tech: ['Swift', 'Objective-C', 'iOS'],
    kind: 'contribution',
    stars: 2,
  },
];
