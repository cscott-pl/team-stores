# Divergences

Where the sources of truth disagree: the Figma frame (`node-id=9293-67700`), the deployed
Workspace prototype, the existing Team Store documentation, and the "Team Stores MVP Specs"
Confluence folder.

**This file states what differs. It does not pick a winner.** Per `CLAUDE.md`: appearance and
behaviour follow the prototype; Figma is design intent; requirements come from the MVP Specs. A
divergence logged here is a question for review, not a defect to fix.

| ID | Sources in conflict | Found |
|---|---|---|
| [DIV-001](#div-001) | `_ds/` design system vs. prototype | 2026-09-08 |
| [DIV-002](#div-002) | Export's own `CLAUDE.md` vs. repo scope | 2026-09-08 |
| [DIV-003](#div-003) | `handoff/` conversion vs. prototype | 2026-09-08 |
| [DIV-004](#div-004) | PROLOOK design system is React vs. Vue target | 2026-09-09 |
| [DIV-005](#div-005) | Three colour vocabularies, and two grey ramps at once | 2026-09-09 |
| [DIV-006](#div-006) | Spacing, radii and type do not form scales | 2026-09-09 |
| [DIV-007](#div-007) | Deliberate deviations we are introducing | 2026-09-09 |

---

## DIV-001

**The export ships a PROLOOK design system the Workspace does not use.**

`reference/_ds/prolook-design-system-c88ba952-1dca-427e-ae7f-71dec59f9459/` contains
`styles.css`, `_ds_bundle.js`, `_ds_manifest.json`, an adherence lint config, and **18 Gotham
`.otf` faces** (XLight through Ultra, with italics).

`reference/workspace-app.jsx` links none of it. It loads **Inter, Archivo and JetBrains Mono from
Google Fonts** instead, via the `<link>` in `Team Stores Workspace.dc.html`.

Related: the same dc.html defines a `:root` block of 21 design tokens (`--ink`, `--accent:#e1251b`,
`--radius:6px`, …), and `workspace-app.jsx` references `var(--…)` **exactly once** in 33,939
lines. It carries **6,116 hard-coded hex literals across 364 distinct values** instead. So the
prototype diverges from *both* the named design system and its own token block.

**What this blocks:** `src/styles/_tokens.scss` — step 2 of the `AGENTS.md` build order. Whether
tokens are derived from `_ds/`, from the dc.html `:root` block, or from the hex values actually
rendered changes every downstream component. Tracked as a blocking question in
`docs/open-questions.md` (OQ-B02), owner Connor.

**Not resolved here.** Do not adopt `_ds/` and do not substitute Gotham for Inter/Archivo on the
assumption that the design system is authoritative.

---

## DIV-002

**The export's own `CLAUDE.md` scopes changes to both Workspace variants.**

`reference/CLAUDE.md.original` (renamed from `CLAUDE.md` in commit `dca1094`; content unchanged,
sha256 `57e2d64b…`) reads:

> Any change to the Team Stores workspace applies to BOTH `Team Stores Workspace.dc.html`
> (workspace-app.jsx) and `Team Stores Workspace - Third Party Integration.dc.html`
> (workspace-app-integrated.jsx) — implemented identically in each — UNLESS the user explicitly
> says a request is only for the third-party file.

This contradicts the Workspace-only scope in the repo root `CLAUDE.md`, `AGENTS.md` and the
handoff brief, all of which put the Third-Party Integration variant explicitly out of scope.

It is a genuine signal, not noise: it means the two variants were **maintained in lockstep during
design**. If that is still the intent, the repo's scope boundary is wrong; if the variant has been
dropped from the MVP, the export's rule is stale. Both readings are live.

**What this blocks:** the scope sections of `CLAUDE.md`, `AGENTS.md` and `README.md` — but only if
the variant is in the MVP. Tracked as OQ-B01, owner Connor. **Those files are not to be rewritten
pre-emptively.**

The file was renamed so it cannot be auto-loaded into an agent session working inside
`reference/`; see `reference/README.md`.

---

## DIV-003

**`handoff/` is an earlier conversion attempt, not a baseline.**

`reference/handoff/` is a static HTML/SCSS conversion of the design, with its own README claiming
a "Static, componentized codebase for the Team Stores MVP. No frameworks, no inline styles."

It covers far less than it appears to. `handoff/pages/workspace.html` is **211 lines / 10.6 KB**
and its README scopes it to "Overview (KPIs, revenue chart, windows, payouts)" — roughly **one of
the twenty-plus screens** in `workspace-app.jsx`, which has 514 top-level components, 57 modals,
5 drawers and a 22-value screen state machine. Its SCSS totals 1,362 lines across 17 partials, and
covers the Landing and Storefront pages too, both out of scope here.

This is distinct from the **Netlify deployment** at `team-store-mvp-demo.netlify.app/workspace.html`,
which is a *different* prior attempt — a Vite-built Vue app (926 KB JS chunk, 456 KB CSS), the one
`CLAUDE.md` describes as rejected for inline style objects and a single `screen` switch.

So three conversions of this design exist: `handoff/` (partial, static), the Netlify build (Vue,
rejected), and this repo.

**Consequence:** neither prior attempt is a starting point. Do not lift structure, class names,
tokens or partial organisation from `handoff/` — its BEM conventions and token set were authored
for a different scope and were never reconciled against the full Workspace.

**Ambiguity worth noting:** `AGENTS.md` fidelity checklist item 1 says to compare "against the
deployed Workspace," and the only thing currently deployed is the rejected Vue build. `CLAUDE.md`
says the deployed *prototype* wins. These should be read as the Claude Design prototype in
`reference/`, not the Netlify build — but the wording is worth tightening before screen work
starts.

---

## DIV-004

**The PROLOOK design system is React; the Workspace target is Vue.**

`reference/_ds/prolook-design-system-c88ba952-1dca-427e-ae7f-71dec59f9459/` is a **React**
component library, unambiguously:

| Signal | Count in `_ds_bundle.js` |
|---|---|
| `React` | 6,889 |
| `createElement` | 6,884 |
| `jsx` | 812 |
| `Vue` / `defineComponent` | **0** |

All 202 `sourcePath` values in `_ds_manifest.json` are `.jsx` (`components/core/Avatar.jsx`,
`components/figma/Alert.jsx`, …), and `_adherence.oxlintrc.json` declares
`"plugins": ["react", "import"]` with JSX-selector rules such as
`JSXOpeningElement[name.name='AccountLineItem']`.

Its readme claims it "Powers the account area, apparel customizer, team stores and ordering
flows" — i.e. it presents itself as the platform's design system. Meanwhile the agreed direction
for the core application is Vue (see `docs/architecture/toolchain-decisions.md` for that claim's
provenance).

**Why this is probably not evidence about Core, and must not be read as such.** Three things
indicate a design-time artifact generated for the prototype rather than a dependency Core
installs:

- **Consumption is a browser global.** Setup is `<link rel="stylesheet">` + `<script src>` +
  `window.PROLOOKDesignSystem_c88ba9`. The bundle contains **zero** `module.exports`,
  `export default`, `exports.`, `define(` or `import(`. That is exactly what Claude Design's
  `<x-import>` needs, and not how a Laravel/Inertia/Vite app consumes a design system.
- **It is not installable** — no `package.json` anywhere in the export.
- **It is Figma-derived.** `components/figma/` holds what the readme calls "202 Figma-extracted
  components", and the bundle opens with a generator envelope: `/* @ds-bundle: {"format":3,…}`.

**Consequence:** the React/Vue mismatch is recorded, not resolved, and it is **not** treated as
an argument for Vue 2, for React, or against the Vue direction. What it does mean is that "the
platform is Vue" is less settled than the repo's docs imply, and that if the real PROLOOK design
system is React, adopting it (OQ-B02) would mean porting components, not importing them.

**Useful residue:** the DS component names are shared vocabulary between design and the dev team
even though the code is not reusable here. The correspondence with prototype components is
catalogued in `docs/architecture/component-catalog.md` §"Design-system name correspondence" and
used to justify component boundaries — not as a source of truth.

---

## DIV-005

**The prototype carries three separate colour vocabularies — and runs two grey ramps at once.**

### The three vocabularies

| Source | What it is | Size |
|---|---|---|
| `Team Stores Workspace.dc.html` `:root` | the prototype's own semantic tokens | 17 values |
| `PROLOOK_COLORS` (`workspace-app.jsx:~5340`) | **a garment/apparel colour catalogue** — codes and names like `BK` Black, `SE` Sangria, `C` Cardinal, `TX` Texas Orange, `KG` Kelly Green, `VG` Vegas Gold | 52 values |
| `_ds/tokens/colors.css` | the PROLOOK design system | 547 tokens total, ~60 colour |

**`PROLOOK_COLORS` is a different kind of thing** and that is itself the finding. It is domain
data — the colours a customer can order a uniform in, used by `SelectTeamColorModal` — not a UI
palette. But **the UI's accent colours are drawn from it**: `#e1251b` is the garment colour "Red",
`#1f9d55` is "Kelly Green", `#2563eb` is "Azure Royal", `#e8590c` is "Orange". So the interface
is partly coloured out of the apparel catalogue.

That matters for OQ-B02: adopting the design system's `--red-500` (`#ef4444`) would decouple the
UI accent from the brand's actual garment red. That may be right, but it is a brand decision, not
a token cleanup.

### The two grey ramps

The prototype uses **both** its own neutral ramp and the Tailwind Zinc ramp the design system is
built on. Twelve values are **exact** Zinc matches; the custom ramp sits 5–13 ΔE away from the
nearest Zinc — close enough to look like drift, far enough to be visible side by side.

**This is the single strongest argument that OQ-B02 needs a real answer.** Two greys that differ
by ΔE 12 doing the same job in the same interface is not a decision anyone made.

### The palette actually in use

Every colour used 8+ times, mapped three ways. ΔE is distance to the nearest DS token — `EXACT`
means identical.

| Prototype hex | Uses | dc.html `:root` | `PROLOOK_COLORS` | Nearest DS token | ΔE |
|---|---:|---|---|---|---:|
| `#0e0e10` | 1180 | `--ink` | Black | `--brand-ink` | 9 |
| `#ffffff` | 1056 | `--bg` | White | `--white` | **EXACT** |
| `#6b6b72` | 465 | `--muted` | — | `--zinc-500` | 12 |
| `#9a9aa1` | 443 | `--muted-2` | — | `--zinc-400` | 13 |
| `#ececf0` | 332 | `--line-2` | — | `--zinc-100` | 12 |
| `#d4d4d8` | 296 | — | — | `--zinc-300` | **EXACT** |
| `#f1f1f3` | 160 | `--bg-soft-2` | — | `--zinc-100` | 5 |
| `#e1251b` | 151 | `--accent` | **Red** | `--red-600` | 12 |
| `#fafafb` | 131 | — | — | `--zinc-50` | 1 |
| `#b81d14` | 104 | `--accent-ink` | — | `--red-700` | 8 |
| `#e4e4e7` | 102 | — | — | `--zinc-200` | **EXACT** |
| `#71717a` | 87 | — | — | `--zinc-500` | **EXACT** |
| `#09090b` | 79 | — | — | `--brand-ink` | **EXACT** |
| `#3f3f46` | 59 | — | — | `--zinc-700` | **EXACT** |
| `#1f9d55` | 58 | `--ok` | **Kelly Green** | `--green-600` | 15 |
| `#f4f4f5` | 57 | — | — | `--zinc-100` | **EXACT** |
| `#e5e5e9` | 53 | `--line` | — | `--zinc-200` | 2 |
| `#52525b` | 50 | — | — | `--zinc-600` | **EXACT** |
| `#a1a1aa` | 43 | — | — | `--zinc-400` | **EXACT** |
| `#2563eb` | 43 | `--blue` | **Azure Royal** | `--blue-600` | **EXACT** |
| `#1d3a8a` | 35 | — | — | *(none — 75)* | 75 |
| `#1f7a44` | 34 | — | — | `--green-700` | 33 |
| `#f7f7f8` | 32 | `--bg-soft` | — | `--zinc-50` | 5 |
| `#18181b` | 31 | — | — | `--zinc-900` | **EXACT** |
| `#e7f5ed` | 25 | `--ok-soft` | — | `--green-50` | 14 |
| `#fafafa` | 25 | — | — | `--zinc-50` | **EXACT** |
| `#8a5f10` | 24 | — | — | `--amber-700` | 25 |
| `#fdf6e7` | 21 | — | — | *(none — 12)* | 12 |
| `#efdcae` | 18 | — | — | *(none — 39)* | 39 |
| `#fbfbfc` | 17 | — | — | `--zinc-50` | 2 |
| `#fdecea` | 16 | — | — | `--red-50` | 10 |
| `#e8590c` | 10 | — | **Orange** | `--orange-700` | 45 |
| `#27272a` | 10 | — | — | `--zinc-800` | **EXACT** |
| `#2944a8` | 9 | — | — | *(none — 74)* | 74 |

Plus ~24 further greys used 8–18 times that are near-duplicates of the above
(`#b6b6bd`, `#c9c9cf`, `#c4c4c8`, `#c7c7cd`, `#b0b0b6`, `#c0c0c6`, `#c4c4cb`, `#a4a4ab`,
`#4b4b52`, `#3a3a40`, `#52525a`, `#ebebed`, `#f1f2f4`, `#f2f2f5`, `#f3f3f4`, `#f4f4f6`,
`#f5f5f7`) — 17 shades of grey with no semantic distinction between them, and **299 further
colours used fewer than 8 times each**.

### No DS equivalent at all

Five colour families the design system cannot express — these are where adoption would need
design input, not a lookup:

- **Navy** `#1d3a8a`, `#2944a8`, `#eef3fb` (ΔE 74–75) — the wizard's "Navy" accent variant
- **Warm amber/parchment** `#fdf6e7`, `#efdcae`, `#f2e2c9`, `#fff8ef`, `#b06f1e` — the archived
  read-only banner
- **Brand red** `#e1251b` — 12 from `--red-600`, and a *different hue* from `--red-500`
- **Success green** `#1f9d55` / `#1f7a44` / `#1f8a55` — three greens for one role
- **Orange** `#e8590c` (ΔE 45)

**Not resolved here.** Tokens in `src/styles/_tokens.scss` carry the prototype's values under the
DS's names, so answering OQ-B02 is a change of values in one file.

---

## DIV-006

**Spacing, radii and type sizes do not form scales.**

Recorded because `_tokens.scss` reproduces the irregularity rather than tidying it, and that will
look like an error to anyone who does not know it was deliberate.

| Dimension | What the design does |
|---|---|
| **Spacing** | 4px steps, **plus** 6, 10 and 14 used heavily (49, 99 and 38 times). Not a 4px scale. |
| **Radii** | 1, 2, 3, 5, 7, 9, 11, 13, 14 and 20 all appear alongside 4/6/8/10/12. 26 distinct values. |
| **Type** | **26 distinct sizes including seven half-pixel values** — 9.5, 10.5, 11.5, 12.5, 13.5, 14.5, 15.5. `12.5px` is used **332 times**, more than 14px. No ratio, no base step. |
| **Weights** | six (400–900), where the DS type scale defines three. 800 is the second most-used weight. |
| **Shadows** | 63 distinct strings, most used once, in two different tints — `rgba(20,20,30,…)` and `rgba(9,9,11,…)`. |
| **Line height** | 1.45, 1.5 and 1.55 all used heavily as separate values. |

**Rounding any of this would be a visual change.** `12.5px → 13px` shifts text metrics on
hundreds of elements. The prototype wins.

**One point of agreement worth noting:** the prototype uses `cubic-bezier(0.2, 0, 0, 1)` 11 times
— *exactly* the design system's `--ease-standard` — and `.12s` / `.2s` match its
`--duration-fast` / `--duration-base`. Motion is the one dimension where the two already agree.

---

## DIV-007

**Deliberate deviations from the prototype that we are introducing.**

Everywhere else, the prototype wins. These are the exceptions — each authorised, each invisible,
each recorded here so no one mistakes them for drift.

### Accessibility fixes (authorised 2026-09-09)

`CLAUDE.md` requires semantic markup and accessibility, and shipping known-broken markup into a
dev handoff is worse than a documented deviation. All three changes are invisible.

| # | Prototype | What we do |
|---|---|---|
| 1 | **18 `href="#"` anchors** carrying `onClick` — functional controls wearing the wrong element | real `<button>` where the behaviour is an action; a real `href` where it is navigation; the two email anchors become `mailto:`. Default styling neutralised in SCSS. Full line-by-line list in `docs/architecture/interaction-inventory.md` §2. |
| 2 | **The three primary nav links expose no accessible name** — `link [ref_6] href="#"` with no label, while the store side-nav buttons are correctly named | accessible names added |
| 3 | **Focus outlines suppressed** — `outline: 0` / `outline: none` in 32+ places with no visible replacement | visible focus restored in `src/styles/_focus.scss`, built from existing tokens. Scoped to **`:focus-visible`**, not `:focus`, so the ring shows for keyboard users and **pointer interaction renders byte-identical to the prototype** — the visual diff for the side-by-side comparison stays at zero. |

Each instance gets a line in this table as it is converted.

### Dead code not ported (authorised 2026-09-09)

Recorded so it is a decision, not an omission someone re-discovers.

**Six components, ~680 lines, defined and never referenced anywhere** — not mounted, not
exported, not passed as values:

| Component | Lines | Apparently superseded by |
|---|---|---|
| `StoreCategoryManager` | 222 | `CategoriesSection` |
| `EditProductModal` | 180 | `EditProductDrawer` |
| `CrossStorePending` | 133 | — |
| `RevenueChart` | 52 | `RevenueProfitChart` |
| `StoreSwitcher` | 51 | `StoreWorkspaceBar`'s inline switcher |
| `OrdersTab` | 42 | `OrdersTabV2` |

**Not converted.** They render nothing in the prototype, so there is no appearance to reproduce.
They stay in `reference/` untouched.

Separately, and **not** covered by this decision: the ~500-line store-template feature is fully
built but unreachable. It is not being ported either, but that is a product question rather than
dead code, because three live buttons point at it — see **OQ-P14**.

---

# Spec ↔ prototype cross-check (2026-09-09)

First pass. **Nine spec pages read in full**, prioritised by what unblocks a decision:
Store Status & Lifecycle · Launch & Status Controls · Team Stores Workspace · Tabbed Store
Dashboard · Template Store Creation · System Modals & Toasts · Step 2 – Divisions & Teams ·
Access / Compliance Gate · Roster-Optional Architecture.

Each claim below was verified on **both** sides — spec text and prototype source line.

## A. Verified agreements — do not "fix" these

Recorded because they look like divergences until checked, and a later pass could waste effort
or, worse, change them.

| Area | Spec | Prototype | Verdict |
|---|---|---|---|
| Workspace nav | Three tabs only: Overview / Stores / Stock Vault. "The Settings tab that appeared in the prototype is removed." | `TeamStoresHeader` renders exactly those three; `wsettings` reached from the account menu with `activeSubTab = "none"` | **match** — the design already actioned the Sep 1 amendment |
| Account menu | Exactly My Account, Customizer, Orders, Workspace Settings, Logout, **in that order** | `AccountMenu` items in exactly that order and order of ids | **exact match** |
| Settings sections | **Seven**, one (Catalog & Decoration) conditional on a third-party vendor | `StoreSettingsNav` has six static + `if (isMultiSourceStore(store)) items.push({id:"catalog", label:"Catalog & Decoration"})` | **exact match** |
| Wizard steps | Individual = 3, League = 4 (Divisions & Teams inserted at 2) | `const baseSteps = wizardStepsFor(data.storeType)` — with a source comment reading *"the list is store-type dependent (League = 4 steps, Individual = 3). No hardcoded totals."* | **exact match** |
| Structure editor | "must be extracted as a **single shared component**… must not be forked" | `TeamCanvasView` mounted twice — once with a `wizard` prop (`:8284`), once in `RosterTab` (`:13232`) | **match** |
| Roster Bank | Capture → pre-group → commit staging area, per-team and store-wide queues | `BankZone`, `BankConflictModal`, `RosterBankRow`, `makeBankSeed`, `prolook_bank_captures_v1` | **built** |
| Template entry path | "Add Store now enters Step 1 — Basics directly; there is no interstitial choice modal" | `goCreate` → `screen = "form"`; `StoreTemplateInterstitial` never mounted | **match** |

> **Correction to an earlier finding.** I reported a "three-way disagreement" on the Settings
> section count (six / six / seven). There is no disagreement: the count is **seven, one
> conditional**, and the prototype implements exactly that. The apparent conflict was stale
> summary text in the Store General Settings page's audit note, which the Sep 2 amendment to
> Tabbed Store Dashboard explicitly corrects ("The two references to a six-section Settings tab
> … are corrected to seven").

## B. Prototype contradicts the spec

### DIV-008 · The launch gate ignores product visibility — *revised 2026-09-09*

> **Revised on the second spec pass.** The first version of this entry said "three specs require a
> *published* product". That was accurate about those three pages but **wrong about the current
> model** — I had not yet read the page that owns it. The conclusion survives; the terminology and
> the reason do not.

#### The specs are not unanimous, and the newest ones changed the model

| Spec | Modified | Launch gate wording |
|---|---|---|
| Launch & Status Controls | Aug 3 | *"zero **published** products"*; tooltip *"Publish at least one product to launch your store."* |
| Store Status & Lifecycle | Aug 31 | *"zero **published** products"* |
| Roster-Optional Architecture | Aug 31 | *"≥1 **published** product"* |
| **Product Catalog Management** | **Sep 1** | *"**there is no draft or published state** — but it is **Hidden by default**… A rep makes an item buyer-facing by turning on its **Visibility** toggle. A store cannot launch until at least one product is **visible**."* |
| **Tabbed Store Dashboard** | **Sep 2** | *"the launch gate requires at least one **visible** product (Products Tab spec)"* |

**Product Catalog Management owns the product model, and it has removed draft/published
altogether**, replacing it with a per-item **Visibility** toggle defaulting to off. The two most
recently edited pages both say **visible**. The three "published" pages are stale on vocabulary —
the same staleness pattern as DIV-012.

#### The prototype carries both models at once, and the gate uses neither

| Model | In the prototype |
|---|---|
| Old — `status: "draft" \| "published"` | present: 8 `draft`, 12 `published` |
| New — `hidden` / visibility flag | present: **28 references**, and it already implements the spec's Incomplete-bundle rule at `:12476` — `hidden: ids2.length < 2 ? true : b.hidden` |
| Launch gate | `:11041` — `const canLaunch = (store.products \|\| []).length > 0` — **reads neither** |

So the prototype is mid-migration: the new visibility model exists and works for bundles, the old
draft/published model persists alongside it, and the launch gate ignores both and counts rows.

#### What still stands

**The gate is too permissive, on every reading.** A store can go live with a catalog where every
item is hidden or draft — nothing for a buyer to see. That is the failure the gate exists to
prevent, and both the old and the new spec wording would block it.

**What changed:** the fix is not "check `status === 'published'`". It is "check the visibility
flag", and it sits inside a larger question — whether we reproduce the prototype's dual product
model or converge on the specified one. That is bigger than a launch gate and belongs with the
Products Tab conversion, not before it.

Tracked as **OQ-P18**.

### DIV-009 · Archived → Draft is self-service in the prototype; the spec forbids it twice

| | |
|---|---|
| **Spec** | *"Archived → Open or Closed: **Not self-service.** Requires a Prolook support request. Support staff only."* And separately: *"Open / Closed / Archived → Draft: **Not allowed.** Draft is the entry state only."* |
| **Prototype** | `:27717` — `RestoreStoreModal` `onConfirm` → `updateStore(restoreTargetId, { status: "active", live: false, archived: false })`, toast *"Store restored — now a **draft** in your active stores"*. A rep does this unaided. |
| **Effect** | Violates both rules at once: rep-initiated, and lands in Draft. |

### DIV-010 · The access flow is instant and automated; the spec requires manual review

| | |
|---|---|
| **Spec** | Access / Compliance Gate: submission → *"a 'pending review' state that clearly states verification is a **manual process** with a typical **24–48 hour** turnaround — access is *not* granted on submission"* → admin approve/deny. Stripe is never mentioned. |
| **Prototype** | `access-form` → `StripeVerifying` → `unlockFromGate` — a `setTimeout(…, 1500)` at `:2321` then unconditional success. `screen === "access-pending"` is **read 3× and set 0×**: the pending state is built and unreachable. |
| **Effect** | The prototype implements the opposite mechanism. It also explains the unreachable branch — the pending path was superseded by the Stripe path in the design. |

### DIV-011 · Two setup guides and two paced-card shells run in parallel

**Setup guide.** The Aug 31 amendment moved it *"from a single scrolling list of bullets to a
paced card sequence"*. The prototype has **both**, simultaneously:

| Implementation | Mounted | Seen-state | Matches spec? |
|---|---|---|---|
| `StoreGuideModal` — a single scrolling bullet list | yes, in `App()` | global `ts_setup_guide_seen_v1` | the **superseded** design |
| `StoreSetupGuideHost` / `SgCover` / `SgCardView` — paced cards | yes, 2× | per-store `ts_setup_guide_seen_<id>` | the current design |
| `SetupGuideHeaderButton` — the spec's "persistent entry point… to reopen" | **never mounted** | — | missing |

The spec requires seen-state **per rep, per store type**, re-arming once for the other type.
Neither implementation does that: one is global, the other per-store. **Three different models.**

**Paced-card shell.** System Modals & Toasts is explicit: the Store Close Report and Store Setup
Guide *"share one shell. This section owns that shell so the two do not drift."* The prototype has
two parallel implementations — the `Cr*` set (`CrCover`, `CrHeroView`, `CrPanel`, …) and the `Sg*`
set (`SgCover`, `SgCardView`, `SgMediaSlot`). They drifted exactly as the spec anticipated.
**Conversion consequence:** build one shell with two consumers, not two shells.

### DIV-012 · Status vocabulary disagrees three ways — including spec vs. spec

| Source | Vocabulary |
|---|---|
| Store Status & Lifecycle (**Aug 31**, self-declared authoritative) | **Draft · Open · Closed · Archived**; badges Draft blue / Open green / Closed amber |
| Launch & Status Controls (**Aug 3**) | **Draft · Active · On Hold**; Stores filter offers "Active" and "On Hold" |
| Prototype | `status` ∈ `draft, active, live, closed, archived` — **five values** — plus separate `live` and `archived` booleans. Badge label is **"Active"**, not "Open" |

The two specs conflict with each other, not just with the prototype. The Aug 31 page claims
precedence ("All other features reference this section for status semantics"), which makes
**Launch & Status Controls stale on terminology** — and it is also stale on templates, since it
still specifies a post-launch *Create Template* menu that was removed 17 days later.

The prototype's three overlapping fields for one four-state machine is a data-model concern for
`docs/service-layers/`, not a visual divergence.

### DIV-013 · Smaller confirmed mismatches

- **Team Profit** — System Modals & Toasts (Sep 1) and Store Analytics both state *"Team Profit
  has been removed from the product."* The prototype still mounts `TeamProfitChart`.
- **Modal inventory** — the spec's registered inventory lists **19** modals; the prototype has
  **57** `*Modal` components. The page intends the inventory to be complete ("this page records
  that they exist"), so either it is incomplete or the prototype has 38 unregistered modals.
- **Close Report seen-state** — spec: *per user, per close event*. Prototype: `crCanReplay` +
  per-store key. No user dimension exists in a single-user prototype, so this is a seam note
  rather than a visual fix.

## C. Prototype behaviour no spec covers

- **`TeamStoresPortal`** (`screen === "portal"`, four Tweaks-only variants). No spec page covers
  it, and the prototype's own comment says the standalone Landing page replaced it.
- **All Tweaks-panel variants** — 2 portal heroes × 3 headlines × 2 CTAs × 2 CTA colours, 2 wizard
  accents, 3 checklist accents, 2 checklist positions. None specified anywhere. Defaults taken
  per `docs/architecture/tweaks-defaults.md`.
- **`MyCarts` and `SavedDesigns`** — the Customizer-bridge surfaces, reachable only via
  `window.__openMyCarts` / `__openSavedDesigns`. No page in the MVP folder specifies them.
- **`StoreTypeSelect`** — defined and never mounted, while both store types are specified.

## D. Spec requirements with no prototype counterpart

- **Order-approval queue** for Team Supplied items (Roster-Optional, Epic D; default off).
- **Storefront team selector** and the tiered access gate — storefront surfaces, out of scope
  here, but they replace roster-match gating and therefore change what the Workspace must
  configure.
- **Consequence-tier modals naming every affected record by name, never a bare count**, with
  exempt records listed separately and their reason. Applies to the fundraising disable
  interstitial and bundle-member removal. Not verified against the prototype in this pass.

## E. Spec-side open questions — not ours to answer, but they block spec-derived work

Three questions the specs themselves record as unresolved. Listing them so nobody treats a spec
as complete on these points.

1. **Consent / privacy — the spec calls it "build-blocking."** Roster-Optional Architecture:
   capture-to-roster involves children's personal information, implicating COPPA-style and GDPR
   parental-consent regimes, and *"the exact consent mechanism, retention, and parental-consent
   handling must be confirmed with legal/privacy before the capture-to-roster flow ships."*
   Owner: **legal / privacy**. The prototype has the Roster Bank built.
2. **Logout session scope** (Team Stores Workspace, Epic D) — whether logout ends only the Team
   Stores session or the propagated Customizer session, and where the rep lands.
3. **Per-team coach import** (Step 2 – Divisions & Teams, Epic E) — four sub-questions, explicitly
   *"not specified until… answered. Nothing in this step changes today."*

---

## DIV-014 · Two in-force specs disagree about whether store templates exist

**This supersedes the confident reading recorded earlier in the cross-check.** Found on the second
spec pass, 2026-09-09.

| Spec | Modified | Says |
|---|---|---|
| [Template Store Creation](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4196925446) | Aug 21, 2026 | *"Store templates (both curated and **user-generated**) have been removed from the product entirely… retained for history only and **is not in force**."* |
| [Store General Settings](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4154130493) | **Sep 02, 2026** | Epic D: *"the same card carries **Create Template** — saving this store's products, pricing, and settings as a reusable blueprint for future stores."* Also listed in the section table and the Schedule & Status summary — **four references**. |

**The later page is not obviously stale.** Its amendment history records edits on **Aug 3, Aug 24,
Aug 25, Aug 31 and Sep 2** — *four separate edits after the 20 August removal* — and the Create
Template references survived every one. That is materially different from a single untouched page.

### The prototype implements the removed feature, not the surviving one

`CreateTemplateModal` (`workspace-app.jsx:6784`) saves `storeType`, `distributionModel`,
`fundraisingEnabled` and product `blocks`, persisted to `localStorage` under
`prolook_user_templates`. It carries **store configuration**, not just products — a
**user-generated store template**, precisely the thing the removal note names.

It is therefore *not* interchangeable with **Catalog Templates** (the Aug 31 rename of Product
Packages), which are product sets authored from a catalog and explicitly *not* store
configuration. The two features have confusingly similar names and the terminology collision is
part of why this is hard to read.

### What this changes

An earlier revision of this file and of `docs/decisions-needed.md` presented "remove the three
Create Template buttons" as a **high-confidence recommendation needing a one-line confirmation**.
**That was wrong.** It rested on one spec while a more recently edited spec says the opposite, and
the prototype agrees with the more recent one.

**Downgraded to a genuine conflict for Connor to resolve** — see OQ-P14. Default is unchanged:
keep the buttons exactly as they behave.

**What is still settled:** the ~500 lines of template *destination* code are not ported. Both
readings agree the interstitial entry path is gone, and the prototype already implements that.

---

## DIV-015 · Field locking after launch is an explicit spec-side TBD

[Store General Settings](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4154130493), **Epic B —
"Edit permissions by store state — TBD"** (read Sep 02, 2026):

> **OPEN — to be determined:** the exact fields/inputs that lock after launch are *TBD* and must be
> defined before build.

So **OQ-P03 is half-answered**. The four lifecycle *states* and their transitions are fully
specified in Store Status & Lifecycle. **Which fields lock after launch is not**, and the spec says
so itself.

The spec does name four deliberate exceptions that must stay editable on a live store — **Store
Point of Contact**, the **ship-to destination address**, **Team Fundraising**, and the **manager
collection** — each for the same reason: a live store must be correctable without a rebuild.

**Consequence for us:** none today. The prototype applies no post-launch field locking, and
reproducing that is correct until the spec is completed. Not a divergence — an absence on both
sides.

---

## Second-pass agreements

| Area | Spec | Prototype | Verdict |
|---|---|---|---|
| Archive location | Schedule & Status → **Danger Zone**, owner-only | `:18399` — *"Danger zone — owner only (Epic C)"*, inside the schedule section | **match** |
| Close / Re-open | On the Store Status card, in Settings — not the header | `:18389–18392` Re-open Store / Close Store in `GeneralInfo` | **match** |
| Close Report secondary entry | *"a View Close Report link… alongside Re-open Store"* | `:31192` — `// variant "settings" → Settings → Schedule & Status → Store Status card` | **match** |
| Store Status Changed email | *"one email per change"*, names actor and prior status | `:29811` `status-changed` template with `{{prevStatus}}`, `{{newStatus}}`, `{{actor}}` | **match** |

**One extra surface, not in the spec:** the prototype also offers **Archive** from the store card's
kebab menu in the Stores list (`:3774`), wired to `onArchive` → `ArchiveStoreModal`. The spec
places archiving only in the Settings Danger Zone. Minor, but it is a second destructive entry
point the spec does not sanction.
