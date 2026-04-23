# Lighthouse — ecosystem catalog comparison

Runs performance-only Lighthouse against:

1. **Upstream catalog:** [awesome-pretext on GitHub Pages](https://shipitandpray.github.io/awesome-pretext/)
2. **This repo’s build:** `site/ecosystem-catalog/` served locally over HTTP (after `bun run site:build`)

## Command

```sh
bun run ecosystem:lighthouse
```

Skip rebuild if `site/` is already fresh:

```sh
bun run ecosystem:lighthouse --skip-build
```

Requires a local Chrome/Chromium (Lighthouse’s `chrome-launcher` discovery). JSON reports are written under `reports/` (gitignored); the script prints a short score + Core Web Vitals-style summary to stdout.

## CI

Optional manual run: [.github/workflows/lighthouse-ecosystem.yml](../../../.github/workflows/lighthouse-ecosystem.yml) (workflow dispatch).
