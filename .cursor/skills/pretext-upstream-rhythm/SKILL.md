---
name: pretext-upstream-rhythm
description: Runs the aculich/pretext periodic upstream workflow—git sync with chenglou/pretext, verification commands, GitHub export/triage/PRISSUES refresh, third-party fork freshness checks, and optional GitHub fork discovery. Use when syncing the fork with upstream, refreshing upstream issues and pull requests, triaging new PRs, reviewing comments on already-merged upstream PRs, checking known pretext forks for new commits, scanning for new interesting forks, or the user asks for the routinized upstream update rhythm.
---

# Pretext upstream rhythm (aculich fork)

Canonical narrative lives in [WORKFLOW.md](../../../WORKFLOW.md) (sections **Remotes**, **Local GitHub archive**, **Relevant forks registry**, **Periodic upstream sync & triage**). This skill is the **short execution checklist** for agents.

## Preconditions

- Repo root: this project (`pretext__aculich` / `aculich/pretext`).
- `gh auth login` completed for GitHub API scripts.
- Use **bun** for all `bun run …` commands ([DEVELOPMENT.md](../../../DEVELOPMENT.md)).

## 1. Git — catch up to upstream

```sh
git fetch upstream
git status
git merge --no-ff upstream/main
# resolve conflicts if any; prefer combining doc guidance rather than dropping fork-specific WORKFLOW/FEATURES pointers
```

Compare ahead/behind (expect **0 behind** `upstream/main` when done):

```sh
git log --oneline main..upstream/main
git log --oneline upstream/main..main
```

## 2. Verification (after any merge from upstream)

From [WORKFLOW.md](../../../WORKFLOW.md) **Verification**:

```sh
bun install
bun run check
bun test
bun run site:build
```

Optional: `HOST=127.0.0.1 bun start` → HTTP 200 on every path in the **Demo sweep checklist** (`WORKFLOW.md` demo sweep), or spot-check `/demos`.

Append a row block to **Verification log** in `WORKFLOW.md` when this rhythm completes.

## 3. GitHub — refresh local intelligence

Order matters (`github:priissues` wants a fresh export):

```sh
bun run github:export
bun run github:triage
bun run github:priissues
```

If `research/github/` is tracked, inspect churn:

```sh
git diff --stat research/github/
```

**What to surface for the human**

- **New PRs:** read [PRISSUES.md](../../../PRISSUES.md) (open, not `already_in_fork` / not low-signal) and **`research/github/pulls.jsonl`** filtered by `state === "open"` and recency of `created_at` / `updated_at`.
- **New issues:** same export; **`issues.jsonl`** where `pull_request` is null and issue is `open`, sorted by `created_at`.
- **Commentary on work we already shipped:** filter **`issues.comments.jsonl`** and **`pulls.review_comments.jsonl`** for issue/PR numbers listed under **Integrated upstream PRs (watch for ongoing discussion)** in `WORKFLOW.md` (and [FEATURES.md](../../../FEATURES.md) for the fuller source list).

## 4. Third-party forks — freshness

See [research/forks/README.md](../../../research/forks/README.md) (**Relevant forks registry**).

For each **clone-based** fork (e.g. `pretext-a11y` under `research/forks/`):

```sh
cd research/forks/pretext-a11y && git fetch origin && git log --oneline HEAD..origin/main | head -20
```

If there are new commits, summarize themes; offer to refresh [pretext-a11y-analysis.md](../../../research/github/pretext-a11y-analysis.md) after a diff review.

**awesome-pretext** is a **community list**, not a layout fork—periodically open the repo for new links, not `git pull` inside this repo.

## 5. Discover new forks (optional)

Run a **read-only** search (adjust query if rate-limited):

```sh
gh search repos "pretext fork:true" --sort updated --limit 15 --json fullName,description,updatedAt,url
```

Compare hits to [research/forks/README.md](../../../research/forks/README.md). If a fork looks substantial and is missing there, note it for the human and propose adding a row to the registry (and optionally a short analysis doc under `research/github/`).

## 6. Push

After verification passes:

```sh
git push origin main
```

## Handoff template

Summarize: upstream merge result (commits / conflicts), test counts, **new** open PRs/issues worth eyeballing, **comment activity** on integrated PR numbers, fork fetch results, and any **new search hits** from step 5.
