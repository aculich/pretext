# Ecosystem catalog — performance notes

## Why [ShipItAndPray/awesome-pretext](https://github.com/ShipItAndPray/awesome-pretext) / [GitHub Pages](https://shipitandpray.github.io/awesome-pretext/) can feel slow

Findings from reviewing `index.html`, `app.js`, and `styles.css` in that repo (not a runtime Lighthouse run in CI):

1. **Full re-render on every keystroke** — `searchInput` listens to `input` and calls `renderPackages()` immediately, which assigns `packageGrid.innerHTML` for the entire visible card set each time.
2. **Large DOM** — dozens of cards, each with multiple nested elements, tags, and links, all present at once (no virtualization / pagination).
3. **Expensive compositing** — `styles.css` applies `backdrop-filter: blur(12px)` on `.hero-copy`, `.hero-panel`, `.section`, `.featured-card`, `.card`, and `.principles article`, plus large `box-shadow` on many surfaces. That cost scales with the number of cards on screen.
4. **Third-party analytics** — Google tag (`gtag`) loads on every page view (extra network + main-thread work).
5. **Web fonts** — Multiple families (e.g. Fraunces, Space Grotesk, IBM Plex Mono) increase first paint cost vs system stack.

## What we changed in **our** catalog (`/demos/ecosystem-catalog`)

- **Debounced search** (~140ms) so typing does not re-layout on every keypress.
- **Incremental listing** — first chunk (`PAGE = 60`) then **Load more** to grow the DOM gradually.
- **No `backdrop-filter`** on catalog cards; lighter shadows to reduce GPU overdraw.
- **DOM APIs** (`createElement` / `DocumentFragment`) instead of rebuilding a huge HTML string on each update (still one `replaceChildren` per debounced filter change).

## Lighthouse (hard numbers)

One-off runs (`bun run ecosystem:lighthouse`) and optional [GitHub Actions workflow dispatch](../../../.github/workflows/lighthouse-ecosystem.yml) compare:

| Surface | URL |
|--------|-----|
| Upstream awesome-pretext | `https://shipitandpray.github.io/awesome-pretext/` |
| Local ecosystem catalog | `site/ecosystem-catalog/` served at `http://127.0.0.1:<port>/ecosystem-catalog/` |

Details: [lighthouse/README.md](lighthouse/README.md).

### Reference snapshot (2026-04-22, one local run)

Numbers vary by machine, network, and throttling; treat as directional, not a guarantee.

| Surface | Perf score | FCP | LCP | TBT | CLS | Speed Index |
|--------|------------|-----|-----|-----|-----|-------------|
| Upstream awesome-pretext | 78 | 3.0 s | 4.3 s | 60 ms | 0 | 4.3 s |
| Local ecosystem catalog | 100 | 0.9 s | 1.1 s | 0 ms | 0 | 0.9 s |

## Follow-ups (optional)

- If the catalog grows past ~200 entries, add windowed virtualization (reuse patterns from the virtual-scroll demo).
