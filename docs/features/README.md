# Features

One file per feature: `docs/features/<name>.md`. Empty for now — filled as screens are built.

## What each file records

Per `CLAUDE.md`, business rules are pure functions colocated with their feature under
`src/features/`, **each carrying a comment citing the spec it comes from**. This directory is
where those rules are written up in prose, alongside the service seams the feature touches.

A feature file states:

- **The rule**, in plain language
- **The citation** — the page in the "Team Stores MVP Specs" Confluence folder, or the BRD section
  once the BA team issues it
- **Where it lives** — the pure function's path under `src/features/`
- **The service seams touched** — cross-referenced to `docs/service-layers/`
- **Anything the design shows but the specs do not cover** — flagged, not inferred

## Two hard rules

**Requirements come only from the "Team Stores MVP Specs" folder**, plus the BRD once issued. Not
from "Planning", "Research" or "Archive" — those are out-of-scope, unvalidated and outdated
respectively. If something needed is not in the MVP Specs: say *"this is missing from the MVP
specs"*, record it in [`../open-questions.md`](../open-questions.md), and stop.

**Do not carry business rules over from the previous prototype attempt on trust** — the store
lifecycle state list included. Verify against the current specs first.

## Expected files

From the screen inventory in [`../handoff/phase-log.md`](../handoff/phase-log.md), roughly:
overview, stores, store-creation, leagues, roster, products, orders, payouts, fundraising,
templates, stock-vault, workspace-settings, account. Not authoritative — the MVP feature list is
not final, and features are neither added nor removed here.
