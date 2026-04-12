# TheMarco/pretext-a11y vs chenglou/pretext

**Source:** [TheMarco/pretext-a11y](https://github.com/TheMarco/pretext-a11y) (clone locally per [research/forks/README.md](../forks/README.md)).

**Merge base** with `chenglou/pretext` `main` (at time of analysis): `53a065b8a345fc29831eee3aedd5bfb18e383670`.

## Summary

The fork is **demo- and documentation-focused accessibility work**, not a change to core `src/` layout APIs. Diff vs upstream `main` (stat):

- **~20 files**, **~1.5k insertions**, **~173 deletions**
- Touches: `README.md`, new `ARTICLE.md`, many `pages/demos/*.{html,ts}`, `vercel.json`
- **No** changes under `src/` in this snapshot — integration is **progressive enhancement** of demos (semantic HTML layer + `aria-hidden` visual layer, focus styles, reduced motion, noscript fallbacks).

## Triage recommendation

| Priority | Action |
|----------|--------|
| High (for product) | Track upstream [issue #59](https://github.com/chenglou/pretext/issues/59) (accessibility / WCAG measurement) alongside this fork. |
| Medium | Port selected demo patterns into this fork in **small PR-sized chunks** (one demo per branch), after visual review — not as a single mega-merge. |
| Low / defer | `vercel.json` and deployment-specific bits — keep out unless this fork deploys the same way. |

## Relation to wave-1 upstream PRs

Wave-1 picks from `chenglou/pretext` PRs target docs, perf, and tooling; **pretext-a11y** is orthogonal and should stay a **separate integration track** to avoid mixing a11y HTML refactors with engine changes.
