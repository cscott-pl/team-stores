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

### Business rules — citations from the first spec pass (2026-09-09)

Nine spec pages read. These rules now have a source. Cite the page **and the last-modified date
you read**, because the folder turns over fast.

| Rule | Spec | Read |
|---|---|---|
| Store lifecycle states and transitions | [Store Status & Lifecycle](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4168908810) — Draft / Open / Closed / Archived, with a full transition table and per-surface behaviour matrix | Aug 31, 2026 |
| Launch gate | Same page, Epic A + [Launch & Status Controls](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4153802774) — **≥1 *published* product**. The prototype checks any product; see DIV-008 | Aug 31 / Aug 03 |
| Order-window auto-close | Store Status & Lifecycle, Epic C — pop-up stores auto-transition to Closed at the configured close moment | Aug 31, 2026 |
| Store Close Report | Same page, Epic H — per close event, per-user seen state, PDF + CSV only | Aug 31, 2026 |
| Archive semantics and owner-only visibility | Same page, Epic E | Aug 31, 2026 |
| League vs Individual store fork | [Step 2 – Divisions & Teams](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4299325441) + [Roster-Optional Architecture](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4230545435) Epic B — 4 steps vs 3; division → team → optional roster | Sep 01 / Aug 31 |
| `teamSetting` tiers (Fan / Team Required / Team Supplied) | Roster-Optional Architecture, Epic D — access keyed to financial risk, not roster match | Aug 31, 2026 |
| Roster duplicate-number policy | Roster-Optional Architecture — **per roster, authoritative**, league-level setting acts as a cascading bulk default | Aug 31, 2026 |
| Roster schema | Same page — **First and Last Name are the only required fields**; no contact channel required | Aug 31, 2026 |
| Roster Bank capture → pre-group → commit | Same page, Epic C | Aug 31, 2026 |
| Modal severity tiers and the registered inventory | [System Modals & Toasts](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4153802806) — Informational / Confirmation / Consequence / Blocking | Sep 01, 2026 |
| Paced card sequence (shared shell) | Same page — one shell, two consumers | Sep 01, 2026 |
| Access / compliance gate | [Access / Compliance Gate](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4153016322) — manual admin review, 24–48 h. The prototype uses instant Stripe verification; see DIV-010 | Aug 31, 2026 |
| Store templates | [Template Store Creation](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4196925446) — **removed from scope 2026-08-20, retained for history, "not in force"** | Aug 21, 2026 |

### Still uncited — pages not yet read

Present in the prototype and **not** to be carried over on trust. Each needs an MVP Specs citation
before it becomes a pure function:

Ten Workspace spec pages remain unread — Product Catalog Management, Order Management,
All-Stores Orders, Roster Management, Store General Settings, Workspace Settings, Store Home,
Step 1 – Basics, Step 2 – Add Products, Step 3 – Review & Deploy, Rep Account, Team Stores
Platform Overview. The rules still uncited are the ones those pages own:

product status transitions (draft → published, unpublish warnings) · profit and price settings,
bulk pricing, bundle pricing (OQ-P06) · tax mode and flat-rate handling (OQ-P05) ·
minimum-quantity thresholds on pending orders · fundraising enable/disable and the disable
interstitial (OQ-P06) · repeating close cadences · order fulfilment and freight mapping (OQ-P07).

**Expect most of these to resolve on the second pass** — dedicated pages exist for all of them.
