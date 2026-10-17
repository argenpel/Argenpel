# Dependency review

Reviewed on 2026-10-17 with Node.js 24.

Next.js and eslint-config-next are aligned at 16.3.8. The lockfile resolves
Sharp 0.35.5 and source-map-js 1.2.2 within their existing dependency ranges.
`npm audit --omit=dev` reports no vulnerabilities for this dependency tree.

## Remaining development advisory

The full audit still reports five high-severity package entries for one
development dependency chain:

```text
eslint-config-next -> @next/eslint-plugin-next -> fast-glob -> micromatch -> braces
```

The underlying advisory is
[GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm): deeply
nested brace patterns can exhaust the stack. The affected braces version is
3.0.3, which remains the latest published version at the review date. These
packages are development dependencies used by ESLint; no public request path
accepting brace patterns was identified in this application.

The suggested automatic resolution downgrades eslint-config-next to 14.2.35,
which would break its alignment with Next.js 16. Keep this advisory visible and
recheck it when a compatible upstream fix becomes available. This is a scoped
development exception, not a clean full-audit result.

## Follow-up

Before delivery and after dependency changes, run:

```bash
npm audit --omit=dev
npm audit
npm ls next eslint-config-next sharp source-map-js braces --all
npm run check
```

If the advisory remains, verify that braces is still development-only and that
the application has not introduced a public path that processes these patterns.
Once a compatible fix is published, update the affected dependency chain,
repeat the checks, and remove the exception above.
