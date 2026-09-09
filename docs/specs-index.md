# Specs index — "Team Stores MVP Specs"

The **only permitted source of requirements**, per `CLAUDE.md`. Indexed 2026-09-09.

**Source folder:** [Team Stores MVP Specs](https://qstrike.atlassian.net/wiki/spaces/TS/folder/4152033285)
· space **TS — "Team Stores"** · site `qstrike.atlassian.net` · folder id `4152033285`

**Excluded by rule and not indexed:** the "Planning", "Research" and "Archive" folders, and every
other folder in the TS space. Out-of-scope, unvalidated and outdated respectively.

**57 items — 52 pages and 5 sub-folders.** Titles, URLs and last-modified dates are as returned by
Confluence; the summaries are Confluence's own.

> **Status: index only.** Nothing below has been read in depth yet. Scope column is a *provisional*
> reading from titles and summaries, pending the cross-check against
> `docs/architecture/workspace-screen-inventory.md`.

## Two standing cautions

1. **The specs may lag the deployed prototype.** That gap is the point of this exercise, not an
   obstacle. Where they disagree, the prototype wins on appearance and behaviour and the
   divergence is logged (`CLAUDE.md`).
2. **The specs will not tell you what is in scope.** The MVP feature list is not final. A spec
   existing does not mean the screen is in scope, and a spec describing the storefront, landing
   page, documentation page or third-party variant is **background only** — not to be built from.

---

## Sub-folders (5)

| Folder | Modified | Provisional scope |
|---|---|---|
| [Manage-Store Workspace](https://qstrike.atlassian.net/wiki/spaces/TS/folder/4153409537) | Jun 16, 2026 | **in scope** |
| [Team Store Creation Flow](https://qstrike.atlassian.net/wiki/spaces/TS/folder/4152164607) | Jun 16, 2026 | **in scope** |
| [Global Navigation](https://qstrike.atlassian.net/wiki/spaces/TS/folder/4151476250) | Jun 17, 2026 | **in scope** |
| [System Support](https://qstrike.atlassian.net/wiki/spaces/TS/folder/4153901065) | Jun 17, 2026 | **in scope** |
| [Consumer Storefront](https://qstrike.atlassian.net/wiki/spaces/TS/folder/4152426506) | Jun 16, 2026 | **background** — public storefront |

---

## Workspace — provisionally in scope (26 pages)

| Page | Modified | Maps to (inventory) |
|---|---|---|
| [Team Stores Platform Overview](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4153049096) | Sep 02, 2026 | — architecture context |
| [Team Stores Workspace](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4153245697) | Sep 01, 2026 | `TeamStoresHeader`, 3 tabs |
| [Store Home (Home Tab)](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4308860929) | **Sep 03, 2026** | dashboard `home` tab |
| [Tabbed Store Dashboard](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4153409540) | Sep 02, 2026 | `Dashboard`, 6 tabs |
| [Store General Settings (Settings Tab)](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4154130493) | Sep 02, 2026 | dashboard `general` tab |
| [Workspace Settings](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4301389828) | Sep 01, 2026 | `wsettings` |
| [Product Catalog Management (Products Tab)](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4153376773) | Sep 01, 2026 | dashboard `products` tab |
| [Order Management (Orders Tab)](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4153933836) | Jul 16, 2026 | dashboard `orders` tab |
| [All-Stores Orders Page](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4164812801) | Sep 01, 2026 | `orders` (cross-store) |
| [Roster Management (My Team(s) Tab)](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4153507841) | Aug 31, 2026 | dashboard `roster` tab |
| [Store Analytics (Reports Tab)](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4153049253) | Sep 01, 2026 | dashboard `payouts` tab |
| [Analytics Dashboard (Overview Tab)](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4152918026) | Jun 22, 2026 | `overview` |
| [KPI Summary Cards](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4153278468) | Jun 22, 2026 | `StatCard` row |
| [Overview Graph Cards (Dealer Profit and Revenue)](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4153180162) | Sep 01, 2026 | `RevenueProfitChart` |
| [Top Performing Stores Leaderboard](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4152852486) | Jun 22, 2026 | overview leaderboard |
| [Active Ordering Windows Monitor](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4152033291) | Jun 22, 2026 | `OrderingWindowRow` |
| [Team Store Directory (Stores Tab)](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4153344001) | Aug 31, 2026 | `list` / `StoreList` |
| [Store Status & Lifecycle](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4168908810) | Aug 31, 2026 | **OQ-P03** |
| [Launch & Status Controls](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4153802774) | Aug 03, 2026 | `LaunchStoreModal`, `LiveStoreControls` |
| [Step 1 - Basics](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4152164609) | Sep 02, 2026 | `Step1Basics` |
| [Step 2 - Add Products](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4152000524) | Sep 01, 2026 | `Step3Products` |
| [Step 2 - Divisions & Teams (League Stores)](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4299325441) | Sep 01, 2026 | `Step2Structure` |
| [Step 3 - Review & Deploy](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4153311250) | Aug 31, 2026 | `Step6Review` |
| [Adding Customize Product (Brand Gated)](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4186636289) | Jul 01, 2026 | `ChooseBrandModal` |
| [Customizer & Picker Page](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4153049277) | Jun 17, 2026 | `Customizer` |
| [Rep Account & Brand Customizer Access](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4189650945) | Sep 01, 2026 | `AccountProfile` |
| [Access / Compliance Gate](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4153016322) | Aug 31, 2026 | `FeatureGate` — **OQ-P15** |
| [System Modals & Toasts](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4153802806) | Sep 01, 2026 | 57 modals, `Toast` |
| [System Emails](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4169138177) | Sep 01, 2026 | `EmailsSection` |
| [Roster-Optional Architecture (Open Access Stores)](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4230545435) | Aug 31, 2026 | **epic, approved for build** |

## Storefront and landing — background only, not built from (18 pages)

Public storefront and marketing surfaces. `CLAUDE.md` puts these out of scope. Indexed so the
boundary is explicit and so cross-references from in-scope specs can be followed.

| Page | Modified |
|---|---|
| [Storefront Home](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4154491000) | Jun 17, 2026 |
| [Storefront Landing & Account Onboarding](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4155473922) | Jun 17, 2026 |
| [Branded Storefront Landing & Role Selection](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4153606269) | Sep 02, 2026 |
| [Role-Adaptive Welcome & Layout](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4155506693) | Sep 02, 2026 |
| [Team Stores Landing Page](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4153311233) | Aug 31, 2026 |
| [Product Catalog, Required-Gear & Search](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4153049301) | Jun 17, 2026 |
| [End-User Product Configuration](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4154228849) | Jun 22, 2026 |
| [Single Product Detail (PDP)](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4154195969) | Jun 22, 2026 |
| [Bundle / Uniform Kit Configurator](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4154130449) | Jun 22, 2026 |
| [Carts & Checkout Flow](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4154228866) | Jun 17, 2026 |
| [Cart & Order Summary](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4155670529) | Jun 17, 2026 |
| [Checkout](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4155113576) | Jun 23, 2026 |
| [Order Confirmation](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4154687575) | Jun 17, 2026 |
| [Order History & Production Timeline](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4154818627) | Jun 17, 2026 |
| [Account, Orders & Cancellation](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4155572225) | Jun 17, 2026 |
| [Cancellation Request Workflow](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4155539478) | Jun 22, 2026 |
| [Profile & Notification Preferences](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4155342851) | Jun 17, 2026 |
| [Roster-Matched Account Creation & Multi-Player Management](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4152623289) | Jun 17, 2026 |
| [Connection Success Confirmation](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4154130433) | Jun 17, 2026 |
| [Ordering-Window Banner](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4154163201) | Sep 02, 2026 |
| [Storefront Announcement Banner](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4305616902) | Sep 02, 2026 |

*Note: the two banner specs are storefront surfaces, but both name **Store General Settings
(Settings Tab)** as the authoring surface — which is in scope. Their rep-facing half will need
reading during the cross-check.*

## Explicitly removed from scope by the specs (1 page)

| Page | Modified | Note |
|---|---|---|
| [Template Store Creation — Entry Gate & Curated Catalog](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4196925446) | Aug 21, 2026 | **"Removed from scope — August 20, 2026. Store templates (both curated and user-generated) have been removed from the product entirely."** See OQ-P14. |

---

## Provenance rules for citing these

- Cite by **page title + URL + the last-modified date you read**. Specs are actively revised —
  eleven pages changed in the eight days before this index was taken.
- A citation records what the spec said **on that date**. If behaviour and citation later
  disagree, re-read before assuming the code is wrong.
- **Do not cite a page from any other folder**, including elsewhere in the TS space.
- If a needed requirement is absent: say *"this is missing from the MVP specs"*, record it in
  `docs/open-questions.md`, and stop. Do not infer.
