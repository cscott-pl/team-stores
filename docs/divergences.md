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
