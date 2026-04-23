# Super-library integration backlog

Ordered roughly by **impact × feasibility** for merging patterns or code into this fork (`aculich/pretext`). All rows assume you have already run `bun run ecosystem:clone-upstream` so local copies exist under `upstream/` (gitignored).

| Priority | Repo | Why | Suggested integration mode |
|:---:|:---|:---|:---|
| P0 | [somnai-dreams/preimage](https://github.com/somnai-dreams/preimage) | Complements Pretext with measured images for floats / rich-inline; peer-dep story matches upstream. | Treat as **sibling package**: document + demo wiring (`@somnai-dreams/preimage` + `@chenglou/pretext`); optional vendored subtree only if license/process demands it. |
| P1 | [darkroomengineering/fitbox](https://github.com/darkroomengineering/fitbox) | React “text-to-box” fitting — common product surface. | **Reference implementation** first; port one minimal hook/pattern into a demo or docs example. |
| P1 | [acoyfellow/cloudterm](https://github.com/acoyfellow/cloudterm) | Terminal UI stress-test for measurement + scrollback. | **Demo inspiration** or thin wrapper demo under `pages/demos/` (avoid pulling full product tree). |
| P1 | [Top-g-hash/nuxt-pretext](https://github.com/Top-g-hash/nuxt-pretext) | Framework integration signal (Nuxt). | **Docs + snippets** in `USAGE.md` / README; link out, do not vendor Nuxt stack. |
| P2 | ShipItAndPray `pretext-react`, `pretext-chat`, `pretext-terminal`, `pretext-editor`, `pretext-pdf` | Flagship ecosystem packages from [awesome-pretext](https://github.com/ShipItAndPray/awesome-pretext). | **Cherry-pick ideas** into existing demos (markdown-chat, virtual-chat, etc.) or add cross-links; full merges are too large for one PR. |
| P2 | Community row (`react-pretext`, `pretext-rich`, `pinch-type`, …) | Broader API experiments. | **Issue-driven**: open a tracking issue per experiment; integrate only after a scoped design. |
| P3 | ShipItAndPray `pretext-php` / other non-TS | Different runtime. | **Reference only** — keep out of this TypeScript repo except for doc links. |

## How we missed **awesome-pretext** before

- `WORKFLOW.md` / `research/forks/README.md` only linked the list as a **README pointer** ([PR #80](https://github.com/chenglou/pretext/pull/80) lineage), without an **inventory expansion** step (parse → classify → clone → catalog).
- There was no committed **machine-readable catalog** or local **demo page**, so agents and humans had no default place to diff “what exists in the ecosystem” vs this fork.

That gap is now closed by `research/forks/ecosystem-inventory.json`, `bun run ecosystem:intake`, `bun run ecosystem:clone-upstream`, and `/demos/ecosystem-catalog`.
