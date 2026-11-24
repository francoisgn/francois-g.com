# Security policy

## Reporting a vulnerability

Please **do not open a public issue, PR or discussion** for a security problem. Report it privately from the
repository's **Security** tab: **Report a vulnerability** (GitHub private vulnerability reporting). Include what you
found, the commit or page, how to reproduce it and the impact you expect. You should get an answer within a week.

## Supported versions

The site as deployed from `main`.

## Scope

| In scope | Examples |
|---|---|
| Site | script injection, a third-party script or font loaded without need, a link that leaks data |
| Build and CI | a workflow injection, an over-broad token, an unpinned action or dependency, the Pages deployment |
| DNS and redirects | a subdomain takeover, an open redirect on the redirect pages |

Out of scope: the services the site links to (GitHub, LinkedIn, the App Store, the operator's NAS or network).
