# Component catalog

Build-order step 1. What is genuinely reused versus what belongs to one feature — the input to
deciding `components/common/` versus a feature folder.

**Source:** `reference/workspace-app.jsx`, export dated 2026-09-08. Counts re-derivable with the
script at the end.

---

## Totals

| | Count |
|---|---|
| Component definitions (return JSX) | **512** |
| Data constants (no JSX) | **160** |
| Definitions total | 672 |
| Components never mounted as JSX | **71** |

> An earlier report said "514 top-level definitions". That number conflated components with
> SCREAMING_CASE data constants and used a regex that missed `<Component` at end-of-line — the
> formatting used for every props-heavy mount. The figures above supersede it.

---

## Primitives — candidates for `components/common/`

Ranked by **fan-in** (how many distinct components mount them), which is the signal that matters
for a shared folder — not raw mount count.

### Tier 1 — unambiguous primitives

| Component | Mounts | Distinct owners | Lines | Notes |
|---|---|---|---|---|
| `Icon` | 57 | 57 | 6 | base `<svg>` wrapper; takes `d` as string or array |
| `Modal` | 59 | 56 | 45 | the only overlay shell; every one of the 57 `*Modal`s wraps it |
| `Button` | 65 | 31 | 31 | variants below |
| `Toast` | 24 | 17 | 32 | |
| `TextField` | 22 | 6 | 51 | |
| `SelectField` | 10 | 6 | 72 | |
| `Checkbox` | 10 | 7 | 20 | |

### Tier 2 — reused, feature-flavoured; decide case by case

`CatalogPhoto` (20/14) · `DefaultProductThumb` (8/8) · `ProductMiniThumb` (5/5) ·
`StatusBadge` (5/5) · `InfoTooltip` (5/5) · `SettingsToggle` (6/5) · `BlueLink` (6/4) ·
`DetailCard` (8/4) · `EditModalShell` (4/4) · `ListToolbar` (4/4) · `BrandMark` (4/4) ·
`ColorSwatches` (4/4) · `LogoDropZone` (4/4) · `FloatingActionBar` (6/6) · `StepHeader` (6/6) ·
`WizardPanel` (23/5) · `PriceSettingsCard` (6/6) · `PSModeControl` (6/5) ·
`RosterAssignField` (6/6) · `BundleToggle` (9/7)

`PriceSettingsCard` (114 lines) and `RosterAssignField` (94 lines) have primitive-level fan-in but
carry real domain logic — they are shared *feature* components, not `common/`.

### The icon set — one primitive, ~70 thin wrappers

`Icon` plus ~70 `Icon*` one-liners that pass a path `d`. Highest fan-in: `IconCheck` (55/48),
`IconX` (51/46), `IconPlus` (43/30), `IconChevron` (28/27), `IconTrash` (29/25),
`IconChevronRight` (27/22), `IconLock` (29/18), `IconAlert` (23/19).

Two are referenced **as values**, not JSX — `icon: IconHomeGlyph` and `icon: IconBarGraphBox` in
`WORKSPACE_NAV` — so a Vue port must keep them addressable as components, not inline them.

### Observed `Button` variants

From the signature at `:668`: `variant` ∈ `primary | secondary | ghost | danger`,
`size` ∈ `sm | md | lg`, plus `disabled` and pass-through `style`. `GreenButton` (`:2616`) is a
**separate** component rather than a Button variant — a divergence in its own right, and a
candidate for folding into `Button` **only** if it is pixel-identical, which needs checking
before it is done.

---

## Feature components

Grouped onto the `src/features/` structure. Sizes are definition line counts.

| Feature | Screen roots | Notable components |
|---|---|---|
| `overview` | `OverviewDashboard` (405) | `StatCard`, `RevenueProfitChart`, `RevenueScaleToggle`, `FrequentlyVisitedShelf`, `OrderingWindowRow`, `RosterBankRow`, `StoreScopeSelector`, `Panel` |
| `stores` | `StoreList` (204) | `StoreCard`, `GroupCard`, `ToolbarMenu`, `ListToolbar`, `ListPageHeader`, `ArchiveStoreModal`, `RestoreStoreModal`, `StoreTag` |
| `leagues` | `LeaguesGrid`, `LeagueSettings` (191) | `LeagueCard`, `LeagueAvatar`, `RoleBadge`, `MemberMenu`, `AddManagerModal`, `CreateLeagueModal`, `CreateGroupModal`, `SettingsCard` |
| `store-creation` | `CreateForm` (208) | `Step1Basics` (535) … `Step6Review`, `WizardStepper`, `WizardPanel`, `ChoiceCard`, `TeamDatabaseModal`, `StoreTypeSelect`, `ShipToAddressFields`, `LaunchStoreModal`, `LaunchSuccessModal` |
| `store-dashboard` | `Dashboard` (265), `HomeTab` (287) | `StoreWorkspaceBar`, `StoreSideNav`, `HomeAttentionCard`, `LiveStoreControls`, `OnboardingChecklist`, `StoreGuideModal` |
| `products` | `ProductsTab` (484) | `ProductCard`, `ConfigureProduct` (257), `EditProductDrawer` (451), `AddProductsPage`, `CreateBundleSection` (357), `BundlePricingInsights`, `BulkPricingModal`, `ConfirmSizesModal`, `SizeRow`, `ProductDetailPage` (790), `ProductsCatalogSections` (386), `ArtworkBuilderPage` (347) |
| `roster` | `RosterTab` (241) | `RosterPlayerTable` (411), `PlayerDrawer`, `PlayerEditRow`, `TeamCanvasView` (481), `Canvas*` set, `BankZone`, `MovePlayersModal`, `UploadRosterModal`, `RosterGroupModal`, `JerseyGrid`, `JerseyCellPicker`, `TeamManagerMapping` (303) |
| `orders` | `OrdersTabV2` (346), `OrdersOverview` | `AllOrdersRichTable`, `AllOrdersExperience`, `OrdersTable`, `OrdersRow`, `PendingOrdersList`, `OrderDetailDrawer` (38 + `Drawer*` set), `SubmitOrderModal`, `ColumnOrganizer`, `DateRangeControl`, `OrderWindowScheduler` (269) |
| `reports` | `PayoutsTab` | `RepPanel`, `RepStatCard`, `TeamProfitChart`, `FundraisingReport`, `FundraisingReportSettingsModal`, `StoreCloseReport*` + `Cr*` set (~700 total) |
| `settings` | `GeneralInfo` (463) | `StoreSettingsNav`, `SectionSideNav`, `DetailCard`, `Edit*Modal` set, `NumberSelectionCard`, `RepeatingCloseBlock`, `TMAccessSection`, `EmailsSection`, `CategoriesSection`, `CatalogPolicySection`, `StoreCustomizationSection`, `AnnouncementEditor` |
| `vault` | `ProStockVaultPage` | `ProStockItemCard`, `ProStockDeployModal`, `VaultOfferModal`, `VaultSelectPanel` |
| `account` | `AccountProfile` (342) | `ProfileReadField`, `AccountMenu`, `WelcomeSSOModal` |
| `access` | `FeatureGate` (194) | `AccessApplyForm`, `AccessPending`, `StripeVerifying`, `Crosshairs` |
| `customizer-bridge` | `Customizer` | `CustSportPickerStep`, `CustProductPickerStep`, `CustBuilderStep`, `CustReviewStep`, `MyCarts`, `SavedDesigns` — **isolate behind a clean interface** per `CLAUDE.md`; assume repeated mount/unmount |
| `team-manager-portal` | `TeamManagerPortal` (388) | out-of-workspace preview surface reached via `window.__openTmPortal` |

### Does not fit the `README.md` folder list — flagged, not forced

- **`customizer-bridge`** — `README.md` has no folder for it. It is designer/picker UI that
  `CLAUDE.md` says to isolate behind a stable interface. It needs its own boundary, not a home
  inside `products`.
- **`team-manager-portal`** — a *different persona's* surface (the team manager, not the rep),
  rendered over the Workspace. Whether it belongs in this repo at all is a scope question →
  **OQ-P15**.
- **`store-close-report`** — ~700 lines of `Cr*` components forming a full-screen animated report
  overlay with its own PDF settings modal. Too large for `reports/`, and `CLAUDE.md` says PDF
  generation stays on the Workspace side of the bundle line. Probably its own feature folder.
- **`access`** — the gate, application form and Stripe verification are pre-authentication
  surfaces. `CLAUDE.md` says auth is an injected boundary, so these may not belong here either →
  part of **OQ-P15**.

---

## Never mounted — 71 components

Three different reasons; only the third is dead code.

**1. Referenced as values (alive).** `IconHomeGlyph`, `IconBarGraphBox` — `icon:` entries in
`WORKSPACE_NAV`.

**2. Exported to `window`, never mounted.** The file is assembled from numbered `ASSET` blocks,
each ending in `Object.assign(window, {…})`. These are reachable from outside but unreachable in
the running Workspace: `ProductsListV2` (295), `ProductImageEditor` (409), `TemplateWorkspace`
(286), `ProductsList` (227), `ProductImagesView` (93), `StoreVaultPage` (18), `TeamStoresTabs`
(60), `TPL_CAT_PRODUCTS`.

**3. Defined and never referenced at all — genuinely dead.** One total reference each, the
definition itself:

| Component | Lines | Superseded by |
|---|---|---|
| `StoreCategoryManager` | 222 | `CategoriesSection` |
| `EditProductModal` | 180 | `EditProductDrawer` |
| `CrossStorePending` | 133 | — |
| `RevenueChart` | 52 | `RevenueProfitChart` |
| `StoreSwitcher` | 51 | `StoreWorkspaceBar`'s inline switcher |
| `OrdersTab` | 42 | `OrdersTabV2` |

**~680 lines of dead code.** Do not port it. Do not delete it from `reference/` either — record
it and move on.

There are **zero** `TODO`, `FIXME`, `XXX` or `HACK` comments in the whole file.

---

## Design-system name correspondence

`reference/_ds/` holds 202 Figma-extracted components. **Not a source of truth** — it is React
(see `docs/divergences.md` DIV-004) and the Workspace does not load it. It is useful as **shared
vocabulary between design and the dev team**, and it corroborates component boundaries.

**Exact name matches (3):**

| DS name | Prototype | Fan-in |
|---|---|---|
| `Button` | `Button` | 31 owners |
| `Checkbox` | `Checkbox` | 7 owners |
| `Icon` | `Icon` | 57 owners |

All three are Tier-1 primitives here. Design and the prototype independently arrived at the same
three names — reasonable corroboration for putting them in `components/common/`.

**DS name = prototype `Icon<Name>` (32):** Alert, ArrowRight, BarGraphBox, Briefcase, Calendar,
Cart, Check, Chevron, ChevronLeft, ChevronRight, Clock, Download, Edit, Filter, Folder, Grid,
Image, Info, Link, List, Phone, Plus, Search, Settings, Share, Shirt, Sort, Trash, Trophy, Upload,
User, Users.

**Suggestion, not a decision:** the DS drops the `Icon` prefix and passes the name to a single
`Icon` component. If icon naming is ever revisited, that is the design side's existing convention.
Renaming now would be an unrequested change — the prototype's names stay.

The DS also names primitives the prototype has under different names — `InputField` /
`ModalInputField` vs `TextField`, `Toggle` vs `SettingsToggle`, `Tag` vs `StatusBadge`,
`NavItem` / `SideNavigation` vs `StoreSideNav`, `Tabs` / `TabItem` vs the inline tab strips. Those
are the same concepts under two vocabularies, and worth knowing when talking to design.

---

## Re-deriving these numbers

```python
import re, collections
F="reference/workspace-app.jsx"
lines=open(F,encoding="utf-8").read().split("\n")
fn=re.compile(r'^function\s+([A-Z][A-Za-z0-9_]*)\s*\(')
arrow=re.compile(r'^const\s+([A-Z][A-Za-z0-9_]*)\s*=\s*(?:\(|[A-Za-z_$][\w$]*\s*=>|React\.)')
comps={(m.group(1)) for l in lines if (m:=(fn.match(l) or arrow.match(l)))}
# NOTE: (?=[\s/>]|$) — the lookahead is required; props-heavy mounts put the
# component name at end-of-line, and omitting `$` silently loses ~90 of them.
use=re.compile(r'<([A-Z][A-Za-z0-9_]*)(?=[\s/>]|$)')
mounts=collections.Counter(m.group(1) for l in lines for m in use.finditer(l) if m.group(1) in comps)
print(len(comps), "components;", sum(1 for c in comps if not mounts[c]), "never mounted")
```

Preview-shell ranges to exclude when counting application behaviour: **189–537** (Tweaks system)
and **25768–25834** (`OverviewGrid`).
