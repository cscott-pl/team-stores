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

See `docs/divergences.md` DIV-001, and the clustered colour mapping in the same file which is
built so this can be answered by reading a table.

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

### OQ-P03 · Store lifecycle states and field locking
The full state list, the legal transitions, and which fields lock after launch.
**Affects:** store status controls, the launch flow, and the edit modals.
**Note:** `CLAUDE.md` is explicit that the previous attempt's store lifecycle state list must
**not** be carried over on trust — verify against the current MVP Specs first.

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

### OQ-P13 · Loading and error states the design never showed — **needs design**
The prototype has **no error state anywhere** (`retry` appears 0 times; the 30 `error` and 22
`invalid` hits are all form-field validation) and **one** loading state — a single
`LoadingOverlay` during store creation. Nothing is asynchronous, so nothing can fail.

`CLAUDE.md` requires every `src/services/` function to be async and promise-returning. So every
seam introduces a loading path and a failure path **that do not exist in the design**. That is new
UI, not conversion.
**Affects:** every screen that reads data. **Owner:** Connor — needs design, not a developer
guess. Until answered, services resolve immediately and no failure UI is invented.

### OQ-P14 · Is the store-template feature in the MVP?
It is **fully built and entirely unreachable**: `TemplateWorkspace` (286 lines),
`TemplateRepository` (78), `CreateTemplateModal`, `TemplateSummaryCard`,
`StoreTemplateInterstitial`, the `Tpl*` set, and the wizard's template mode (`templateMode`, which
drops the products step). `screen === "template"` and `"template-repo"` are read but never set,
and `setTemplateMode(true)` is never called.

Live entry points **point at it** — `onCreateTemplate` is wired from `StoreList`,
`AccountProfile` and `Dashboard` — so the buttons exist and the destination cannot be reached.
**Affects:** whether ~500 lines get converted, and whether three live buttons stay dead.
**Owner:** Connor. Preserved as-is meanwhile: not finished, not removed.

### OQ-P15 · Are the Team Manager portal and the access/gate screens in this repo's scope?
Two surfaces that may not belong to the Workspace:
- **`TeamManagerPortal`** (388 lines) — a *different persona's* view (team manager, not rep),
  rendered over the Workspace via `window.__openTmPortal`.
- **`FeatureGate` / `AccessApplyForm` / `StripeVerifying` / `AccessPending`** (~600 lines) —
  pre-authentication surfaces. `CLAUDE.md` treats auth as an injected boundary, which suggests
  these sit outside it.

They are in the in-scope file, so by the file-scope rule they are in scope; by the
"auth is injected" and "Workspace is internal rep tooling" rules they may not be.
**Affects:** feature folder structure and roughly 1,000 lines. **Owner:** Connor.

### OQ-P16 · Which Tweaks-panel variant is canonical?
The Tweaks panel is preview shell and is not reproduced — but it is **not a simple deletion**,
because `App()` reads `tweaks.*` directly and some flags gate real behaviour, while others expose
variants that exist **only** as tweaks:

- `TeamStoresPortal`: 2 hero treatments × 3 headlines × 2 CTA labels × 2 CTA colours
- Create wizard: 2 accent colours (PROLOOK Red / Navy), 2 template layouts (sidebar / stacked)
- Onboarding checklist: 3 accents (red / navy / green), 2 positions
- Behaviour gates: `hasStoreAccess`, `bypassGate`, `seedData`, `overviewEmpty`, `zeroState`,
  `ssoWelcome`, `ssoMultiBrand`, `ssoOriginBrand`

Removing the panel means **choosing a fixed value for each**, and those are product decisions.
**Affects:** Phase 1 shell removal, and the default appearance of the portal, wizard and
checklist. **Owner:** Connor. Full list in `docs/architecture/interaction-inventory.md` §5.

### OQ-P17 · Fidelity checklist item 1 cannot cover the Overview KPIs
Seed revenue is `Math.random()`-generated (`workspace-app.jsx:27918`) and feeds the Overview
totals — two loads gave $69,589 then $69,420, and 1,513 then 1,509 orders. Dates are
`Date.now()`-relative and drift.

So "side-by-side … colour all match" can never pass on those values. The checklist should say
values are excluded and layout/typography/formatting compared instead, and `src/mock-data/` should
use **fixed** fixtures so our own regression comparisons are stable.
**Affects:** `AGENTS.md` fidelity checklist wording. Not blocking. **Owner:** Connor — a wording
change to a governing doc, so not made unilaterally.
