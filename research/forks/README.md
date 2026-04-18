# Third-party forks and related repos

## Relevant forks registry

Use this table when **refreshing** after an upstream sync: fetch each **clone** fork, skim new commits, and update linked analysis docs if behavior drifted.

| Repo | Role | Integrated here? | How to refresh |
|------|------|------------------|----------------|
| [chenglou/pretext](https://github.com/chenglou/pretext) | Upstream source of truth | N/A (remote `upstream`) | `git fetch upstream` |
| [TheMarco/pretext-a11y](https://github.com/TheMarco/pretext-a11y) | Demo-layer accessibility patterns; no core `src/` fork in the analyzed snapshot | **No** — separate track ([analysis](../github/pretext-a11y-analysis.md)) | Clone below → `git fetch origin` → `git log HEAD..origin/main` |
| [ShipItAndPray/awesome-pretext](https://github.com/ShipItAndPray/awesome-pretext) | Curated community list (links, not a layout fork) | **Docs only** ([PR #80](https://github.com/chenglou/pretext/pull/80) lineage) | Open repo / releases; add notable new entries to README if appropriate |

### Clone (local only)

The `pretext-a11y` directory under this folder is gitignored until cloned:

```bash
mkdir -p research/forks && git clone https://github.com/TheMarco/pretext-a11y.git research/forks/pretext-a11y
```

See [pretext-a11y-analysis.md](../github/pretext-a11y-analysis.md) for a summarized diff vs `chenglou/pretext`.

### Adding a newly discovered fork

1. Run the discovery query in [WORKFLOW.md](../../WORKFLOW.md) (**Periodic upstream sync & triage** → *Discover new forks*).
2. If the repo is a real fork of `chenglou/pretext` (or clearly continuation work), add a row here and optionally `research/github/<fork>-analysis.md`.
3. Prefer **small** follow-up PRs from a fork rather than mega-merges (same rule as a11y in the analysis doc).
