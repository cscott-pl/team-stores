# Open questions

Everything flagged rather than decided. Per `AGENTS.md`: where the design is silent or ambiguous,
leave current behaviour untouched, add a `TODO` pointing here, and raise it. **Do not resolve
these.**

Two kinds of entry:

- **`OQ-B*` — blocking.** Named work cannot start until answered. Each records an owner and what
  it blocks.
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

### OQ-B02 · Typography and design system — Gotham or Inter/Archivo?

**Owner:** Connor
**Raised:** 2026-09-08 · **Status:** open — **blocking**

Three parts:

1. The export ships a PROLOOK design system (`reference/_ds/`) with 18 Gotham `.otf` faces. The
   prototype ignores it and loads **Inter, Archivo and JetBrains Mono from Google Fonts**. Which
   is authoritative?
2. Is a **runtime Google Fonts dependency acceptable for internal authenticated tooling**? It is
   a third-party request on every load, and it is a hard dependency of the current prototype.
3. Where do tokens come from — `_ds/`, the dc.html `:root` block of 21 tokens, or the 364 distinct
   hex values actually rendered? The prototype uses `var(--…)` once in 33,939 lines and hard-codes
   6,116 hex literals, so it does not follow its own token block either.

See `docs/divergences.md` DIV-001.

**Blocks:** `src/styles/_tokens.scss` — **step 2 of the `AGENTS.md` build order**, and therefore
everything after it. This is the first thing the build order asks for, so it is blocking now, not
pending.

---

### OQ-B03 · Core's pinned toolchain versions

**Owner:** Jowin
**Raised:** 2026-09-08 · **Status:** open — **blocking**

Needed: pinned versions for **Vue, Vite, Node, TypeScript and the SCSS compiler**, and whether
**Core is TypeScript or plain JavaScript**.

`REPO-SETUP.md` calls this "the one decision that is expensive to reverse": installing latest
(Vite 8, TypeScript 7, vue-router 5, Pinia 4) when Core is pinned several majors behind hands the
prototype off with an upgrade project attached, and the architecture notes already flag Core's
toolchain as older and memory-hungry to build. Pin to Core, not to latest.

The TypeScript-vs-JavaScript answer also revisits `REPO-SETUP.md` default decision 1, which chose
TypeScript on the grounds that it helps handoff — matching Core may matter more.

**Blocks:** `package.json`, `npm install`, `.nvmrc`, `vite.config.ts`, `tsconfig.json`,
`eslint.config.js`, `.stylelintrc.json` — i.e. all scaffolding, and every phase after it. Record
the answers and the reason in `docs/architecture/` when they land.

---

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
