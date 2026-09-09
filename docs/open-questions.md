# Open questions

Everything flagged rather than decided. Per `AGENTS.md`: where the design is silent or ambiguous,
leave current behaviour untouched, add a `TODO` pointing here, and raise it. **Do not resolve
these.**

Two kinds of entry:

- **`OQ-B*` — blocking or formerly blocking.** Each records an owner and, accurately, what it
  blocks. Two of the three no longer block building — read the "what this blocks" line rather
  than assuming the prefix means stopped.
- **`OQ-P*` — product/design.** Answer needed before the affected screen is built, but nothing is
  blocked today.

---

## Blocking

### OQ-B01 · Is the Third Party Integration variant in the MVP?

**Owner:** Connor
**Raised:** 2026-09-08 · **Status:** open

Two questions, in order: (a) is the Third-Party Integration Workspace variant in the MVP at all,
and (b) if so, does it stay in lockstep with the main Workspace?

The export's own `CLAUDE.md` required every Workspace change to be mirrored into
`workspace-app-integrated.jsx` "implemented identically in each," which is how the two were
maintained during design. This repo's scope puts the variant out of scope entirely. See
`docs/divergences.md` DIV-002.

**Blocks:** the scope sections of `CLAUDE.md`, `AGENTS.md` and `README.md` — all three need
rewriting **before any screen is built** if the variant is in scope, because lockstep changes what
"one concern per commit" and the fidelity checklist mean in practice.

**Explicitly not to be done pre-emptively:** do not rewrite those scope sections, and do not read
or convert `reference/workspace-app-integrated.jsx`, on the assumption of either answer.

---

### OQ-B02 · Does the Workspace adopt the PROLOOK design system at all?

**Owner:** Connor
**Raised:** 2026-09-08 · **Restated:** 2026-09-09 · **Status:** open

**Restated, because it is much bigger than typography.** The original framing — "Gotham or
Inter/Archivo" — was too narrow. The real question covers **colour, spacing, radii, shadows and
motion**, not just type.

`reference/_ds/` ships a complete design system: **547 tokens** across
`tokens/{fonts,colors,typography,spacing}.css` — a Tailwind Zinc ramp (`--zinc-50`…`--zinc-950`),
near-black `#09090B`, `--red-500` as the sole accent doubling as destructive, semantic
`--text-primary/secondary/muted`, `--surface-page/card/subtle`, `--border-default/strong`,
`--radius-sm/md/lg/full`, `--shadow-xs/md/modal`, motion at 120–200 ms on
`cubic-bezier(0.2,0,0,1)`, and Gotham at Book 400 / Medium 500 / Bold 700.

The prototype uses **none of it**: 364 distinct hex literals across 6,116 occurrences, Inter and
Archivo from Google Fonts, and `var(--…)` referenced once in 33,939 lines. It ships its own
adherence lint config (`_adherence.oxlintrc.json`) whose rules forbid raw hex, raw px and any
non-Gotham font — so **the prototype violates its own design system's rules wholesale**.

So: does the Workspace adopt the PROLOOK design system, in whole or in part, or does it stay on
the prototype's values?

**Third, and the part that may settle the rest: is the coupling between the UI's accent colours
and the garment catalogue intentional?**

`PROLOOK_COLORS` is not a UI palette — it is the apparel colour catalogue, the colours a customer
can order a uniform in. But the interface is partly coloured out of it: `#e1251b` is the garment
colour **"Red"**, `#1f9d55` is **"Kelly Green"**, `#2563eb` is **"Azure Royal"**, `#e8590c` is
**"Orange"**.

So adopting the design system's `--red-500` (`#ef4444`) would not be a token swap. It would
**decouple the interface from the colours the company actually sells.** That may be deliberate and
load-bearing, or it may be incidental — nobody has said.

**If it is intentional, design-system adoption is partly off the table regardless of what anyone
decides about grey ramps**, and that reframes this entire question. Please answer this part first.

See `docs/divergences.md` DIV-005 for the three-way mapping, built so this can be answered by
reading a table.

**What this blocks — accurately.** It does **not** block building. Fidelity wins: we match the
prototype's values, not the design system's rules. What it blocks is only the **values** in
`src/styles/_tokens.scss` and `_typography.scss`.

Token *names* are deliberately taken from the DS's semantic vocabulary (`--text-primary`,
`--surface-card`, `--border-default`, `--radius-md`, `--shadow-modal`, …) with the prototype's
values inside them. Adoption later is therefore a change of values in one file — no renaming, no
component edits. Where the prototype needs something the DS has no name for, a name is invented
in the same style and flagged; those flags are the places where adoption would genuinely need
design input.

**Not to be pre-empted:** do not "fix" hex literals into DS tokens, do not swap fonts, and do not
adopt the DS lint config. The DS is a divergence to document, not a standard to comply with.

---

### OQ-B03 · Is Core on Vue 2 or Vue 3?

**Owner:** Jowin
**Raised:** 2026-09-08 · **Narrowed:** 2026-09-09 · **Status:** open — no longer blocking

**Narrowed from five versions to two questions:**

1. **Is Core on Vue 2 or Vue 3?**
2. **Does Core use `@vitejs/plugin-vue` or `@vitejs/plugin-vue2`?** — the better question, because
   their build config answers it without anyone having to characterise their stack.

Also wanted, not blocking: **is Core TypeScript or plain JavaScript?**

**Why it narrowed.** What survives re-integration is the Vue SFCs and the SCSS; our Vite, Node
and TypeScript versions barely do. So only the **Vue major** genuinely matters — it changes
component syntax and API enough to make a port expensive.

**Dropped from this question entirely:** the **SCSS compiler**, settled from the export rather
than from Jowin. `reference/handoff/style/` is 45 `@use` and 0 `@import`, so the dev side is
already on modern dart-sass modules. See `docs/architecture/toolchain-decisions.md`.

**No longer blocking.** Scaffolding proceeds on **Vue 3, provisional**, chosen because it is
where new work goes rather than inferred from Core's stack — Laravel + Inertia + Vite is
consistent with both majors, so it never narrowed the binary. Hedges (`<script setup>`, plain
Composition API, Vue-3-only features avoided where free) keep a Vue 2.7 port mechanical without
contorting the code.

## Product and design

From the `AGENTS.md` ask-don't-assume list. Where the design is silent, current behaviour stands
and a `TODO` points here.

### OQ-P01 · Brand span for a rep or store
Whether a rep or a store ever spans more than one brand / Customizer.
**Affects:** `src/config/` runtime brand configuration, and any brand selector. The prototype has
a `CUSTOMIZER_BRANDS` map and takes an originating brand from a `?brand=` hand-off parameter, so
it models one primary brand per session without stating whether that is a constraint.

### OQ-P02 · Brand span for portfolio and cross-store views
Whether portfolio and cross-store views span brands or stay within one.
**Affects:** the Overview dashboard, the all-stores Orders view, and cross-store pending orders.

### OQ-P03 · Store lifecycle states and field locking — **half answered 2026-09-09**
**States and transitions: ANSWERED.** [Store Status & Lifecycle](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4168908810)
(Aug 31, 2026) specifies four states — Draft / Open / Closed / Archived — with a full transition
table and a per-surface behaviour matrix. Cited in `docs/features/README.md`. Note the prototype
diverges on two points: DIV-009 (rep can un-archive to Draft) and DIV-012 (vocabulary).

**Field locking after launch: STILL OPEN — and the spec says so itself.** Store General Settings
Epic B is titled *"Edit permissions by store state — TBD"* and states the locking fields *"are TBD
and must be defined before build"*. Four exceptions are named as always-editable: Store Point of
Contact, ship-to destination address, Team Fundraising, and the manager collection.
**Affects:** nothing today — the prototype applies no post-launch locking, and reproducing that is
correct until the spec is finished. See DIV-015.

### OQ-P04 · Closed-store edit semantics
Whether a closed store stages edits until reopened rather than publishing live.
**Affects:** every edit surface on a closed store, and the close/reopen flow.

### OQ-P05 · Tax calculation
The design uses a placeholder approach.
**Affects:** the sales tax modal and shipping/tax edit surfaces. Preserve the placeholder; do not
implement real calculation.

### OQ-P06 · Payment, fundraising, fees and payouts
Including merchant-of-record.
**Affects:** the Payouts tab, fundraising reporting and its settings, and price/profit settings.

### OQ-P07 · Roster and roster-group structure
The structure itself, and how products, orders and freight attach to it.
**Affects:** the Roster tab, roster groups, the team canvas, and roster upload.

### OQ-P08 · Store-type differences (league vs individual team)
Where the design does not show them.
**Affects:** store creation, league settings, and league/group management.

### OQ-P09 · Expected launch-day traffic and concurrency
**Affects:** nothing in a frontend-only prototype directly, but it bears on what the Core Dev team
inherits — record the answer rather than designing around a guess.

---

## Raised by this session, not on the original list

### OQ-P10 · ~~Is a minimum width wanted for the Workspace?~~ — CLOSED 2026-09-09
**Closed by evidence, not by decision.** This question rested on my incorrect finding that the
design specifies no minimum width. It does: both application roots set `minWidth: 1280`
(`reference/workspace-app.jsx:27423` and `:27476`), and the author's own comment at `:25764`
reads *"Native iframe viewport — the App is min-width: 1280"*. The previous attempt's global
`min-width: 1280px` was faithful reproduction, not an invention. Nothing to ask; see
`docs/architecture/responsive-strategy.md`.

### OQ-P11 · "The deployed Workspace" is ambiguous in the fidelity checklist
`AGENTS.md` item 1 says to compare against "the deployed Workspace," and the only deployment is
the rejected Vue build at `team-store-mvp-demo.netlify.app/workspace.html`. `CLAUDE.md` says the
deployed *prototype* wins. Read as the Claude Design prototype in `reference/` — but the wording
should be tightened before screen work starts. See `docs/divergences.md` DIV-003.

### OQ-P12 · Where is the full export archived?
`reference/uploads/` (213 MB, 562 files) is deliberately not in git, so the complete 309 MB export
exists in one place only. See the archival requirement in `reference/README.md` and
`REPO-SETUP.md` §1.
**Owner:** Connor. Not blocking, but it invalidates "verifiable against what was approved" the
first time that machine is replaced.

---

## Raised by the Phase 2 inventory (2026-09-09)

### OQ-P13 · Loading and error states — **re-scoped 2026-09-09; blocks nothing**
**Owner:** Connor · **Status:** open, non-blocking

The design has no error state anywhere and one loading state. Nothing is asynchronous, so nothing
can fail.

**Resolved for this prototype — there was no tension.** Service functions are async because that
is the contract the backend will fulfil; a promise that resolves immediately renders no loading
state, so nothing new appears on screen. We build **no** spinners, skeletons, retry buttons or
error banners the design never showed, and keep the single existing `LoadingOverlay` where the
design has it.

**Still open, for later — and the specs confirm the gap rather than closing it.**
[System Modals & Toasts](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4153802806) (read
Sep 01, 2026) was the candidate to close this. It does not. Its registered inventory lists a
single row — *"Global loading overlay | Informational | —"* — with **no owning spec and no
behaviour specified**. Its four severity tiers are Informational, Confirmation, Consequence and
**Blocking**, where Blocking means *"the action is not permitted in the current state"* — a state
gate, not a failure. The words *error*, *failure* and *retry* do not appear anywhere on the page,
and its only feedback rule is for success: *"when it finishes, then a toast confirms the outcome."*

So the gap is real on the spec side too, not just the prototype's. Recorded as a note to the dev
team in `docs/service-layers/README.md` rather than as UI for us to invent.

### OQ-P14 · Store templates — **two in-force specs disagree**
**Owner:** Connor · **Status:** open — **corrected 2026-09-09, second spec pass**

> **This entry previously read as a high-confidence recommendation needing a one-line
> confirmation. That was wrong** — it rested on one spec without having read the other.

| Spec | Modified | Says |
|---|---|---|
| Template Store Creation | Aug 21, 2026 | store templates *"removed from the product entirely"*, *"not in force"* |
| Store General Settings | **Sep 02, 2026** | Epic D still carries **Create Template** on the Store Status card — **four references** |

The later page had **four separate edits after the removal** (Aug 24, Aug 25, Aug 31, Sep 2) and
the references survived all of them. It is not obviously stale.

**And the prototype agrees with the later page.** `CreateTemplateModal` saves `storeType`,
`distributionModel`, `fundraisingEnabled` and product blocks to `prolook_user_templates` — store
*configuration*, i.e. a user-generated **store template**, exactly the thing the removal note
names. It is **not** a Catalog Template (the Aug 31 rename of Product Packages), which carries
products only. The two names are confusingly close and that is part of why this is hard to read.

**The question for Connor:** which spec is in force? If Template Store Creation wins, the three
Create Template buttons go. If Store General Settings wins, they stay and the destination needs
building.

**Default:** keep the buttons exactly as they behave — present, styled, going nowhere.
**Still settled either way:** the ~500 lines of template destination code are not ported, and the
interstitial entry path is gone (both readings agree; the prototype already implements that).

### OQ-P15 · TM portal and access screens — **access gate ANSWERED; portal still open**
**Owner:** Connor · **Status:** partly resolved 2026-09-09

**The access / compliance gate is in the MVP.** [Access / Compliance Gate](https://qstrike.atlassian.net/wiki/spaces/TS/pages/4153016322)
(read Aug 31, 2026) is a current, in-force spec with two personas, two epics, metrics and
dependencies. It is not background. So `FeatureGate`, `AccessApplyForm` and the pending state are
in scope — **build them.**

Two caveats: the spec's mechanism is **manual admin review with a 24–48 hour turnaround**, which
the prototype contradicts with instant Stripe verification (DIV-010); and `TWEAK_DEFAULTS` sets
`hasStoreAccess: true`, so the flow is unreachable in the default state and needs the tweak
flipped to review it.

**Still open: the Team Manager portal** (`TeamManagerPortal`, ~390 lines, reached via
`window.__openTmPortal`). No page in the MVP folder covers it, and it is a different persona's
surface. Roster-Optional Architecture names team managers as users but specifies no portal.
**Default:** build it, because it is in the file we were told to convert.

### OQ-P16 · ~~Which Tweaks-panel variant is canonical?~~ — **RESOLVED 2026-09-09**
**Resolved without escalation.** Take whatever the panel produces untouched from cleared
first-run state — the faithful default, needing nobody's input. All 18 flags in `TWEAK_DEFAULTS`
(`workspace-app.jsx:26390`) have a default, so nothing needed escalating.

Every chosen value and its alternative is recorded in
[`../architecture/tweaks-defaults.md`](../architecture/tweaks-defaults.md), so a later "actually we
wanted the other portal treatment" is a one-line change rather than an investigation.

One consequence worth flagging: `hasStoreAccess: true` means the **gate, application form, Stripe
verification and pending screens are never reached** in the default state. They stay built — see
OQ-P15.

### OQ-P17 · ~~Fidelity item 1 vs. the randomised KPIs~~ — **RESOLVED 2026-09-09**
**Resolved.** `AGENTS.md` fidelity checklist item 1 amended: comparison is on layout, spacing,
sizing, typography, colour and state — **not on displayed numbers**. Values differ between two
loads of the prototype itself and always will.

`src/mock-data/` uses **fixed fixtures**: capture one observed load, record the values, freeze
them. Each fixture file notes that its source was randomised and that the values are one frozen
sample.

---

## Informational — no decision needed, recorded for the dev team

Not blocking anything. Listed so they are not rediscovered as defects, and so design can pick them
up post-MVP if it wants to.

### INF-01 · The design has no type scale
26 distinct font sizes including seven half-pixel values (9.5, 10.5, 11.5, 12.5, 13.5, 14.5,
15.5). `12.5px` is used **332 times** — more than 14px. There is no ratio and no base step.

**Left unresolved deliberately.** Inventing a scale would be exactly the silent improvement this
project exists to avoid, and rounding `12.5 → 13` would shift text metrics on hundreds of
elements. All 26 sizes are reproduced in `_typography.scss`.

Same reasoning for: the **17 near-duplicate greys** with no semantic distinction between them, and
the **63 distinct box-shadows**, most used once, in two different tints.

**Post-MVP question for design**, not an MVP blocker. See `docs/divergences.md` DIV-006.

### OQ-P18 · The launch gate, and the product model underneath it
**Owner:** Connor · **Raised:** 2026-09-09 · **Revised same day, second spec pass**

The prototype lets a rep launch with **any** product row — `canLaunch = products.length > 0` — so a
store can go live with a catalog that is entirely hidden or draft. Nothing for a buyer to see.
Every spec reading blocks that.

**But the model underneath moved, and the prototype is mid-migration.** Product Catalog Management
(Sep 1) states *"there is no draft or published state"* and replaces it with a per-item
**Visibility** toggle, default off; the gate is *"at least one **visible** product"*. Three older
pages still say "published". The prototype carries **both** — `status: draft|published` (20 uses)
*and* a `hidden` flag (28 uses, already implementing the spec's Incomplete-bundle rule) — with the
gate reading neither.

**Two questions, and the second is the real one:**
1. Fix the gate, or reproduce it faithfully and log it?
2. Does the conversion reproduce the prototype's **dual product model**, or converge on the
   specified visibility-only model?

**Default:** reproduce the prototype exactly, both the gate and the dual model, and log it.
**Note:** (2) is properly a Products Tab decision and should be taken with that conversion, not
ahead of it. See DIV-008.
