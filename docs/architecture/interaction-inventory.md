# Interaction inventory

Build-order step 1. Every interactive element classified **functional / stubbed / dead**, so we
know which controls are deliberately inert *before* conversion rather than discovering it during.

`AGENTS.md`: *a dead button in the design stays a dead button.* This file is how we tell which
ones those are.

**Source:** `reference/workspace-app.jsx`, export 2026-09-08. Static counts plus browser
verification on 2026-09-09.

---

## Headline: there are almost no stubs

| Signal | Count | Reading |
|---|---|---|
| `onClick={() => {}}` | **0** | no empty click handlers anywhere |
| `onChange={() => {}}` | 2 | both intentional read-only displays |
| `TODO` / `FIXME` / `XXX` / `HACK` | **0** | nothing marked unfinished |
| "coming soon" / "not implemented" | **0** | no placeholder copy |
| `disabled` | 141 | real conditional disabling |
| `cursor: not-allowed` | 36 | paired with the above |

The prototype is far more complete than a typical design export. **The risk here is the opposite
of the usual one** — not stubs to preserve, but a temptation to treat working demo behaviour as
real business logic. It is neither dead nor production: it is *demo-functional*, operating on
in-memory data.

---

## 1. Functional — full round trip on in-memory state

These work end to end and must keep working identically. All mutate React state and, in some
cases, `localStorage`.

- **Navigation** — all three `TeamStoresHeader` tabs, the six store side-nav/tab controls, the six
  Settings sections, Orders sub-tabs. *Verified in browser: clicking STORES navigates.*
- **Store lifecycle** — Launch (`LaunchStoreModal` → `LaunchSuccessModal`), status changes,
  archive/restore. `CLAUDE.md`: lifecycle transitions are the only sanctioned status change and
  each fires its toast. **Do not carry the state list over on trust** — OQ-P03.
- **Store creation** — the whole 6-step wizard, producing a store that persists to `localStorage`
  and appears in Overview and Stores.
- **Products** — add, configure, edit, publish/unpublish, bundles, bulk pricing, size confirmation.
- **Roster** — add/edit/delete players and groups, jersey-number assignment, move players between
  teams, CSV upload *(progress simulated — see Simulated below)*.
- **Orders** — sort, filter, date range, column organiser, drawer, submit.
- **Leagues** — create league, create group, add manager, league settings.
- **Vault** — select, deploy to one or many stores, start a store from selection.
- **Search / filter / sort** — throughout.

## 2. Semantically wrong but functional — the real conversion work

**18 `href="#"` anchors.** These are **not dead**. Most carry an `onClick` and navigate; the
`href="#"` is a placeholder on an element that should be a `<button>`. Browser-verified: clicking
the STORES nav anchor navigates correctly.

| Line | Owner | Visible text |
|---|---|---|
| 954 | `UtilityBar` | — |
| 986, 995 | `GlobalHeader` | — |
| 1032 | `NavTabs` | — |
| 1165 | `TeamStoresHeader` | — (the three primary tabs) |
| 1242 | `TeamStoresTabs` | — *(component unreachable)* |
| 13201 | `RosterTab` | — |
| 14838 | `TeamManagerLabel` | — |
| 18195 | `GeneralInfo` | "View in Products →" |
| 22193 | `StatusBadge` | `{tracking}` |
| 22828 | `AllOrdersRichTable` | — |
| 23210 | `BlueLink` | — |
| 23672, 23676 | `DrawerHeader` | `{order.webOrderNum}`, `{order.factoryOrderNum}` |
| 23692 | `DrawerCrumbs` | — |
| 23771 | `OrderViewItemStatus` | — |
| 24014 | `DeliveryBlock` | `{delivery.email}` |
| 24029 | `RepBlock` | `{rep.email}` |

**Per `CLAUDE.md`, each becomes a `<button>` (or a real `mailto:` for the two email anchors), with
the default appearance neutralised in SCSS rather than the correct element avoided.** Two —
`{order.webOrderNum}` and `{order.factoryOrderNum}` — may be genuinely dead links awaiting an
order-detail route; check behaviour before choosing.

**Accessibility gap found in the browser.** The three primary nav anchors expose **no accessible
name** in the accessibility tree (`link [ref_6] href="#"` with no label), while the store side-nav
buttons do (`button "Home"`, `button "Products"`, …). The nav is keyboard-reachable but
unannounced. Fix during Phase 3 semantics work; it is an addition, not an appearance change.

## 3. Simulated — looks asynchronous, is not

Treat as **behaviour to preserve, not logic to keep**. Each becomes a real service call at the
`src/services/` seam.

| Behaviour | Mechanism |
|---|---|
| Stripe verification | `setTimeout(… , 1500)` at `:2321`, then unconditional success |
| Roster CSV upload progress | `prog += 10 + Math.random() * 20` at `:17041` |
| "Copied" confirmations | `setTimeout(… , 1500)` at `:10740` |
| Store creation | `screen = "loading"` + `LoadingOverlay`, then success |

**Every simulated path succeeds.** There is no failure branch anywhere — see the error-state gap
in `workspace-screen-inventory.md` and **OQ-P13**.

## 4. Dead — no code path

| Item | Detail |
|---|---|
| `screen === "home"` | read 2×, set **0×** |
| `screen === "access-pending"` | read 3×, set **0×** — the manual-review approval path is unreachable |
| `screen === "template"`, `"template-repo"` | read 3× each, set **0×** |
| `templateMode = true` | never set; the wizard's template variant (drops the products step, `:5969`) is unreachable |
| 6 components | `StoreCategoryManager`, `EditProductModal`, `CrossStorePending`, `RevenueChart`, `StoreSwitcher`, `OrdersTab` — defined, never referenced (~680 lines) |
| `SuccessBanner`, `BankZonePlaceholder` | defined, never mounted |

**The store-template feature is fully built and entirely unreachable** — `TemplateWorkspace`,
`TemplateRepository`, `CreateTemplateModal`, `TemplateSummaryCard`, `StoreTemplateInterstitial`,
the `Tpl*` set, and the wizard's template mode. Plus live entry points that *point at* it:
`onCreateTemplate` is wired from `StoreList`, `AccountProfile` and `Dashboard` into
`setCreateTplStore`. So the buttons exist and the destination screen cannot be reached.

**Do not finish it and do not remove it.** OQ-P14.

## 5. Preview shell — not application, not reproduced

`TweaksPanel` and its ~14 `TweakButton` / `TweakToggle` / `TweakRadio` / `TweakSelect` /
`TweakSlider` controls (lines 189–537 plus the panel in `App()`), and `OverviewGrid`
(25768–25834, the "Frame overview" mode).

**These are the highest-risk items in this file**, because they are interactive, they look like
product features, and several gate real behaviour:

| Tweak | Gates |
|---|---|
| `hasStoreAccess` | whether the no-access gate appears at all |
| `bypassGate` | the compliance-gate bypass |
| `ssoWelcome`, `ssoOriginBrand`, `ssoMultiBrand` | `WelcomeSSOModal` and the originating brand |
| `overviewEmpty`, `zeroState` | Overview and Stores empty states |
| `seedData` | whether demo data exists |
| `overviewMode` | `OverviewGrid` |
| `portalHero`, `portalHeadline`, `portalCta`, `portalCtaColor` | four `TeamStoresPortal` variants |
| `wizardAccent`, `wizardAthletes`, `templateLayout` | wizard appearance |
| `checklistAccent`, `checklistPosition` | onboarding checklist |

**Deleting the panel changes application behaviour** — `App()` reads `tweaks.*` directly at
`:26917` and throughout. Removing it requires choosing a fixed value for each flag above, and
those choices are product decisions, not deletions. Several also expose *variants that only exist
as tweaks* — four portal treatments, two wizard accents, three checklist accents. Which variant is
canonical is unanswered → **OQ-P16**.

Also preview-only: `getFrameRoute()` / `#frame=<id>` deep links (`:26918`), which suppress
persisted stores and the setup guide, and the 12-frame list at `:25744`.

---

## Consequences for conversion

1. **18 anchors → buttons**, appearance neutralised in SCSS, plus accessible names on the primary
   nav.
2. **4 simulated async paths → service calls**, and they need failure branches the design never
   showed (OQ-P13).
3. **~680 lines of dead components: skip.** The 5 unreachable screen branches: preserve as-is.
4. **The Tweaks panel is not a delete** — it is 20-odd product decisions (OQ-P16).
5. **Demo-functional ≠ specified.** Everything in §1 works, but `CLAUDE.md` forbids carrying
   business rules over on trust. Each rule needs a spec citation before it becomes a pure function
   in `src/features/`.
