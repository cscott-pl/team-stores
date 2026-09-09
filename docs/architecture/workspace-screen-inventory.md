# Workspace screen inventory

Build-order step 1. Every screen in the in-scope Workspace, in navigation order, with how it is
reached and what states it holds.

**Source:** `reference/workspace-app.jsx` (33,939 lines), export dated 2026-09-08. Verified
statically and by walking the served prototype from cleared storage on 2026-09-09.

**Nothing here is a decision.** Where the prototype is silent or a state is absent, it is
recorded as absent.

---

## How navigation actually works

A single `screen` state value in `App()` (`:26940`) with **22 distinct values**, plus two nested
tab levels. This is the pattern `CLAUDE.md` forbids reproducing — real routes replace it, one per
screen.

Three mutually exclusive chrome states, chosen at `:27389–27392`:

| Chrome | When | Contains |
|---|---|---|
| `UtilityBar` + `GlobalHeader` | `!inEditor && !showSubTabs` | prolook.com storefront shell — DISCOVER, BUILD MEN'S, BUILD WOMEN'S, TEAM STORES |
| `TeamStoresHeader` | `showSubTabs` | Team Stores shell — **OVERVIEW · STORES · STOCK VAULT** + account menu |
| *(none)* | `inEditor` — `dashboard`, `customizer` | store editor drops the shell entirely |

---

## Screens, in navigation order

### A. No-access flow — full-viewport, short-circuit render (`:27419`)

These return before the main tree; they sit between the brand site and the tools.

| # | `screen` | Component | Reached by | Exits to |
|---|---|---|---|---|
| A1 | `gate` | `FeatureGate` (embedded in `TeamStoresHeader`) | no store access + navigating to any Team Stores screen | Apply → `access-form`; Bypass → `overview` + toast; Back → Landing *(out of scope — link left as-is)* |
| A2 | `access-form` | `AccessApplyForm` | gate Apply, **or URL `?access=none`** | → `stripe-verify`; Cancel → Landing |
| A3 | `stripe-verify` | `StripeVerifying` | form submit | → `overview` via `unlockFromGate` + toast |
| A4 | `access-pending` | `AccessPending` | **nothing — unreachable** (see Unreachable below) | → `overview` on approve |

### B. prolook.com level

| # | `screen` | Component | Reached by |
|---|---|---|---|
| B1 | `home` | `ProlookHome` | **nothing — unreachable** |
| B2 | `portal` | `TeamStoresPortal` | Tweaks panel only ("Preview portal landing"). A code comment at `:27347` says the standalone Landing page replaced it, so reps land on `overview` instead. |

### C. Team Stores top level — `TeamStoresHeader` tabs

| # | `screen` | Tab | Component | Reached by |
|---|---|---|---|---|
| C1 | `overview` | **OVERVIEW** | `OverviewDashboard` (405 lines) | default landing for a rep |
| C2 | `list` | **STORES** | `StoreList` (204 lines) | tab; or from `leagues` by opening a league |
| C3 | `leagues` | *(sub-state of STORES)* | `LeaguesGrid` | tab when no league is active |
| C4 | `vault` | **STOCK VAULT** | `ProStockVaultPage` | tab |
| C5 | `orders` | *(returns to origin tab)* | `OrdersOverview` — all-stores | Overview "View all orders"; `ordersOrigin` remembers the tab to return to |
| C6 | `empty` | — | `EmptyState` | zero stores |
| C7 | `account` | — | `AccountProfile` (342 lines) | account menu |
| C8 | `wsettings` | — | `WorkspaceSettings` | account menu |
| C9 | `league-settings` | — | `LeagueSettings` (191 lines) | `list` → league Settings |
| C10 | `form` | *(create flow)* | `CreateForm` — 6-step wizard | Add Store; or Vault multi-select → wizard with products pre-loaded |
| C11 | `template` | *(create flow)* | `TemplateWorkspace` | **nothing — unreachable** |
| C12 | `template-repo` | *(create flow)* | `TemplateRepository` | **nothing — unreachable** |
| C13 | `loading` | — | blank `div` + `LoadingOverlay` | transitional, during store creation |
| C14 | `my-carts` | — | `MyCarts` | `window.__openMyCarts` global |
| C15 | `saved-designs` | — | `SavedDesigns` | `window.__openSavedDesigns` global |

### D. Store editor — no shell

| # | `screen` | Component | Reached by |
|---|---|---|---|
| D1 | `dashboard` | `ManageStoreWorkspace` → `Dashboard` | "Manage Store" from Overview or Stores |
| D2 | `customizer` | `Customizer` — 4-step picker | dashboard → Customize |

---

## D1 expanded — the store editor, where most of the Workspace lives

`ManageStoreWorkspace` (`:1763`) = `StoreWorkspaceBar` + optional archived banner + `Dashboard`.

**Six tabs**, duplicated as an icon rail (`StoreSideNav`, driven by `WORKSPACE_NAV` at `:1712`)
and a top tab strip (`Dashboard`, `:11078`). Confirmed in the browser: Home, My Teams, Products,
Orders, Reports, Settings.

| Tab id | Label | Component | Notes |
|---|---|---|---|
| `home` | Home | `HomeTab` (287 lines) | "Needs your attention", "Recently worked on", "In your store", League Manager Information, Brand assets |
| `roster` | **My Team** / **My Teams** | `RosterTab` (241 lines) | label switches on `store.storeType === "league"` |
| `products` | Products | `ProductsTab` (484 lines) | |
| `orders` | Orders | `OrdersTabV2` (346 lines) | sub-tabs: **All Orders**, **Pending Orders** (with count) |
| `payouts` | **Reports** | `PayoutsTab` | id and label differ — `payouts` renders "Reports" |
| `general` | **Settings** | `GeneralInfo` (463 lines) + `CatalogPolicySection` | six sections, below |

Each tab except Home carries an unread **dot** (`!viewed.<tab>`) — a per-tab first-visit state.

**Settings sections** (`StoreSettingsNav`, `:29479`):

| id | Label | Description |
|---|---|---|
| `store` | General | Details, branding & contact |
| `schedule` | Schedule & Status | Order window & close dates |
| `team` | Team & Roster | Roster rules & jersey numbers |
| `customization` | Store Customization & Design | Storefront color & announcement |
| `people` | People & Access | Invites & portal access |
| `distribution` | Distribution & Fulfillment | Fulfillment method & destination |

---

## Overlays by screen

57 `*Modal` components, 5 drawers, 4 overlays. Mounted at the top level of `App()` regardless of
screen:

`SalesTaxModal`, `CancelConfirmModal`, `CreateLeagueModal`, `CreateGroupModal`, `LoadingOverlay`,
`ArchiveStoreModal`, `RestoreStoreModal`, an inline logout `Modal`, `Toast`, `StoreGuideModal`,
`WelcomeSSOModal`, `TweaksPanel` *(preview shell)*.

Mounted inside a screen:

| Screen component | Overlays it owns |
|---|---|
| `Dashboard` | `LaunchStoreModal`, `LaunchSuccessModal` |
| `GeneralInfo` | `EditStoreDetailsModal`, `EditFulfillmentMethodModal`, `EditShippingTaxModal` |
| `ProductsTab` | `ChooseBrandModal`, `SelectApplicationSizeModal` |
| `RosterTab` | `AddRosterModal`, `NewRosterModal`, `RosterGroupModal`, `RosterConfirmDeleteModal` |
| `OrdersTabV2` | `OrderDetailDrawer`, `SubmitOrderModal`, `AssignManagersModal` |
| `OrdersOverview` | `OrderDetailDrawer` |
| `LeagueSettings` | `AddManagerModal` |
| `ProStockVaultPage` | `ProStockDeployModal`, `VaultSelectPanel` |
| `MyCarts` | `AddCartToStoreModal` |
| `SavedDesigns` | `AddDesignToStoreModal` |
| `PayoutsTab` | `RepPanel` |

`OverviewDashboard`, `StoreList`, `LeaguesGrid`, `CreateForm`, `HomeTab`, `AccountProfile`,
`WorkspaceSettings`, `Customizer`, `TeamManagerPortal`, `TeamStoresPortal` and `FeatureGate` own
no overlays.

---

## States — what the prototype implements, and what is absent

| State | Implemented? | Evidence |
|---|---|---|
| **Default** | yes, everywhere | — |
| **Empty** | **partially** | Only 4 empty-state components exist: `EmptyState` (whole-workspace, 1 mount), `EmptyTabState` (1 mount), `OrdersEmpty` (2 mounts), `CrEmptyWindow` (1 mount). Most lists have **no empty state**. |
| **Loading** | **one, transitional** | `LoadingOverlay` — a single mount, shown only for `screen === "loading"` during store creation. There is **no per-panel or per-list loading state anywhere**, because nothing is asynchronous. |
| **Error** | **absent** | No error component exists. `error` appears 30 times and `invalid` 22 — all **form-field validation**, not failure states. `retry` appears **0 times**. Nothing can fail, so nothing handles failure. |
| **Success** | inconsistent | `Toast` (24 mounts) plus `LaunchSuccessModal`. `SuccessBanner` is **defined and never mounted**. |
| **Disabled** | yes | 141 `disabled` occurrences, 36 `cursor: not-allowed` |
| **Read-only** | yes | archived stores render a full-width amber banner and `readOnly` propagates through `Dashboard` |

**This is the most important gap for conversion.** The prototype has no loading or error states
because its data is synchronous and in-memory. `CLAUDE.md` requires every service function to be
async and promise-returning — so the Vue build **will** have loading and failure paths the design
never showed. Those are new UI, not conversion, and they need design input. Logged as **OQ-P13**.

### States reachable only through interaction

Capture these before moving code; several are one-shot and persisted.

| State | Trigger | Persistence |
|---|---|---|
| `WelcomeSSOModal` | first load of a session | `sessionStorage: ts_sso_welcomed` |
| `StoreGuideModal` | first visit to any store dashboard | `localStorage: ts_setup_guide_seen_v1` |
| Onboarding "Launchpad" tour | first store, while `is_first_store` | `localStorage: prolook_is_first_store` |
| Per-tab unread dots | before first visit to each dashboard tab | `localStorage` badge state |
| `LaunchStoreModal` → `LaunchSuccessModal` | Launch, with ≥1 product | — |
| 6-step wizard, steps 2–6 | progressing `CreateForm` | — |
| `StoreCloseReportOverlay` | first dashboard visit after a store closes | `crCanReplay` global + Tweaks replay |
| Archived read-only banner | archive a store, then open it | store record |
| `OrderDetailDrawer` | click an order row | — |
| Roster upload progress | `UploadRosterModal` | simulated with `Math.random()` |

**Clear `localStorage` and `sessionStorage` before every fidelity pass** or these will silently
not appear. Confirmed: cleared storage reproduces both first-run modals in order.

---

## Unreachable branches — preserve, do not "finish"

Rendered branches with **no code path in**. `AGENTS.md`: a dead button in the design stays a dead
button.

| Branch | Read | Set | Consequence |
|---|---|---|---|
| `screen === "home"` | 2× | **0** | `ProlookHome` never renders |
| `screen === "access-pending"` | 3× | **0** | the manual-review path is unreachable; `stripe-verify` is the only route through |
| `screen === "template"` | 3× | **0** | `TemplateWorkspace` (286 lines) never renders |
| `screen === "template-repo"` | 3× | **0** | `TemplateRepository` (78 lines) never renders |
| `templateMode = true` | — | **0** — only `setTemplateMode(false)`, 3× | the wizard's template variant, which drops the products step (`:5969`), is unreachable |

So the **template/store-template feature is present in code and entirely unreachable in the UI**.
That is a scope question, not a bug to fix — logged as **OQ-P14**.

---

## Outbound links — listed, not followed

- **`window.location.href` → `Team Stores Landing.dc.html`** — 5 sites (gate Back, access-form
  Cancel, access-pending Back, header logo, logout confirm). Out of scope; **left exactly as-is**,
  and dead in this repo since Landing is not built.
- **`window.open`** → `https://customizer.prolook.com/` and `/account` (`AccountProfile` Edit
  Profile), plus `window.open(src)` for asset previews.
- **18 `href="#"` anchors** — see `interaction-inventory.md`; most are functional controls wearing
  the wrong element, not dead links.
