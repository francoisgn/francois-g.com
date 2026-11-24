// Star counts fetched from the GitHub REST API at build time, with the static fallback of src/data/projects.ts.
// The build never fails because of this: any error (network, timeout, rate limit, unexpected body) keeps the fallback.
// Endpoint: GET /repos/{owner}/{repo}, field `stargazers_count`
// (https://docs.github.com/en/rest/repos/repos#get-a-repository, read 2026-11-24). No token: 60 requests/hour per IP.
import type { Repo } from '../data/projects';

/** Anything with a repository and an optional fallback star count. */
export interface Starred {
  repo: Repo;
  stars?: number;
}

const TIMEOUT_MS = 5000;

async function fetchStars(repo: Repo): Promise<number | undefined> {
  // GITHUB_API_URL is set by GitHub Actions; overriding it also lets the fallback path be tried locally.
  const api = process.env.GITHUB_API_URL ?? 'https://api.github.com';
  try {
    const res = await fetch(`${api}/repos/${repo}`, {
      headers: { Accept: 'application/vnd.github+json', 'User-Agent': 'francois-g.com-build' },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (!res.ok) {
      console.warn(`[stars] ${repo}: HTTP ${res.status}, using the fallback`);
      return undefined;
    }
    const body: unknown = await res.json();
    const count = (body as { stargazers_count?: unknown } | null)?.stargazers_count;
    if (typeof count === 'number' && Number.isInteger(count) && count >= 0) return count;
    console.warn(`[stars] ${repo}: no stargazers_count in the response, using the fallback`);
  } catch (err) {
    console.warn(`[stars] ${repo}: ${err instanceof Error ? err.message : String(err)}, using the fallback`);
  }
  return undefined;
}

// One request per repository per process (the dev server re-renders the page on every request).
const cache = new Map<Repo, Promise<number | undefined>>();

/** Stars of every project's repository: the fetched value, else the static fallback, else undefined. */
export async function starsFor(projects: Starred[]): Promise<Map<Repo, number | undefined>> {
  const entries = await Promise.all(
    projects.map(async (p) => {
      let pending = cache.get(p.repo);
      if (!pending) {
        pending = fetchStars(p.repo);
        cache.set(p.repo, pending);
      }
      return [p.repo, (await pending) ?? p.stars] as const;
    }),
  );
  return new Map(entries);
}
