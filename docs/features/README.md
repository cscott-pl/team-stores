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

## Feature mapping — from the Phase 2 inventory

Screens and components mapped onto `src/features/`. Derived from
[`../architecture/workspace-screen-inventory.md`](../architecture/workspace-screen-inventory.md)
and [`../architecture/component-catalog.md`](../architecture/component-catalog.md).

**Not authoritative.** The MVP feature list is not final, and no feature is added or removed here.

| Folder | Screens it owns | Notes |
|---|---|---|
| `overview/` | `overview` | dashboard, KPIs, revenue chart, ordering windows, frequently-visited |
| `stores/` | `list`, `empty` | directory, cards, groups, archive/restore |
| `leagues/` | `leagues`, `league-settings` | league grid, settings, members, groups |
| `store-creation/` | `form`, `loading` | the 6-step wizard, launch flow |
| `store-dashboard/` | `dashboard` | the shell: workspace bar, side nav, tab strip, Home tab |
| `products/` | dashboard `products` tab | largest feature — catalog, configure, bundles, artwork |
| `roster/` | dashboard `roster` tab | players, groups, canvas, bank, upload, manager mapping |
| `orders/` | dashboard `orders` tab, `orders` | per-store and all-stores; shared `OrderDetailDrawer` |
| `reports/` | dashboard `payouts` tab | payouts, fundraising report, rep panel |
| `store-close-report/` | overlay | ~700 lines of `Cr*`; own folder, not inside `reports/` — see below |
| `settings/` | dashboard `general` tab, `wsettings` | six sections + catalog policy |
| `vault/` | `vault` | ProStock vault, deploy modals |
| `account/` | `account` | read-only profile mirrored from the Customizer |
| `store-templates/` | `template`, `template-repo` | **entirely unreachable** — OQ-P14 |

### Does not fit the folder list above — flagged, not forced

`CLAUDE.md` and `README.md` do not anticipate these. Each is recorded rather than pushed into a
folder where it does not belong.

- **`customizer-bridge/`** — `Customizer` picker, `MyCarts`, `SavedDesigns`. `CLAUDE.md` says
  designer/picker-like UI must be isolated behind a clean interface and must assume repeated
  mount/unmount in one session. That is a boundary, not a feature folder, and it must not live
  inside `products/`.
- **`store-close-report/`** — a full-screen animated report overlay with its own PDF settings
  modal. Too large for `reports/`, and `CLAUDE.md` keeps PDF generation on the Workspace side of
  the bundle line, so it wants its own lazily-loaded boundary.
- **`access/`** — `FeatureGate`, `AccessApplyForm`, `StripeVerifying`, `AccessPending`.
  Pre-authentication surfaces, and `CLAUDE.md` treats auth as injected. May not belong in this
  repo → OQ-P15.
- **`team-manager-portal/`** — a different persona's surface entirely → OQ-P15.

### Business rules seen but not yet cited

Present in the prototype and **not** to be carried over on trust. Each needs an MVP Specs citation
before it becomes a pure function:

store lifecycle states and transitions (OQ-P03) · order-window open/close scheduling and
repeating close cadences · `teamSetting` semantics (`team-required` / `team-supplied` /
`fan-gear`) · product status transitions (draft → published, unpublish warnings) · profit and
price settings, bulk pricing, bundle pricing (OQ-P06) · tax mode and flat-rate handling (OQ-P05)
· roster duplicate-name and jersey-number rules · minimum-quantity thresholds on pending orders ·
fundraising enable/disable and reporting (OQ-P06) · league vs individual store differences
(OQ-P08).
