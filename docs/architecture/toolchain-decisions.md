# Toolchain decisions

What is settled, what is provisional, and what each rests on. Written for the Core Dev team:
where a claim comes from outside this repository, the source is named so it can be weighed.

**Recorded:** 2026-09-09.

---

## Provenance of the two external claims

Neither of these can be verified from inside this repository. Both are recorded here so nobody
downstream mistakes them for observations.

### "Vue is the primary stack for the core application"

**Source:** an email from the UI/UX development lead, dated **17 August 2026**, reporting an
agreement reached with the Core team.

**Status:** a **decision record, not a technical observation.** It does not specify a major
version.

Nothing in the design export corroborates it, and that is expected rather than troubling — **the
direction is organisational, not technical.** It was agreed between teams; it is not something
that could be discovered by reading the prototype. For completeness, what the export actually
contains points the other way: the Claude Design runtime is React, and the PROLOOK design-system
bundle is React (see `docs/divergences.md` DIV-004). Neither is evidence about Core.

### "Laravel with Inertia and Vite"

**Source:** an architecture discussion document that is **not in this repository** and that has
not been read by anyone writing this file.

**Status: unverified background.** Treat it as context, not as a constraint, and do not derive
conclusions from it — see the note under "Vue 3" below for why one tempting derivation does not
hold.

---

## Decided

### Vue 3 — provisional, pinned to current stable

**Chosen because it is where new work goes; Core's version is unconfirmed.** Vue 2 reached
end-of-life at the end of 2023, so no new work should start there.

**Explicitly not inferred from the stack.** An earlier draft of this reasoning inferred Vue 3
from "Laravel with Inertia and Vite." That inference does not hold: Inertia ships separate
adapters for each major (`@inertiajs/vue2` and `@inertiajs/vue3`), Laravel + Inertia + Vue 2 was
a common combination, and Vite supports Vue 2 via `@vitejs/plugin-vue2`. The observed stack is
consistent with **both** branches, so it never narrowed the question. Recording it as evidence
would have put a conclusion into a handoff document that was never established.

**Versions are provisional.** They are pinned to current stable at the date above, not to Core.
The bet is deliberately narrow: what survives re-integration is the Vue SFCs and the SCSS, so
our Vite, Node and TypeScript versions matter much less than the Vue major, which changes
component syntax and API enough to make a port expensive.

**Hedges taken, without contortion:** `<script setup>`, plain Composition API, and Vue-3-only
features avoided **where avoiding them is free**. Where avoiding one would cost clarity or
fidelity, it gets used and logged. A bounded list of "these components use Vue-3-only features"
is more useful to a porter than a codebase bent around a version we may never need to support.
That list lives in `docs/architecture/vue3-only-usage.md` once any such component exists.

### SCSS — settled, and closed as a question

**Write `@use` only. Use `math.div()` and `map.get()`, never legacy division or `map-get()`.**

**Established from the export, not from Jowin.** `reference/handoff/` is a previous conversion
attempt by the dev side, and its stylesheets are unambiguous:

| Idiom | Count in `reference/handoff/style/` |
|---|---|
| `@use` | **45** |
| `@import` | **0** |
| `math.div` / `map.get` | 0 (no division or map access yet) |

`reference/handoff/style/app.scss` is pure `@use` and carries the comment
`// Compile: sass style/app.scss style/app.css`. `@use` requires dart-sass ≥ 1.23, so the dev
side is on a modern dart-sass and already writing the current module system.

**The SCSS compiler is therefore dropped from the open toolchain list.** It was one of the five
versions originally needed from Jowin; it no longer needs asking.

---

## Open — one binary question, with Jowin

Reduced from five versions to two questions that a single glance at Core's build config answers.
Tracked as **OQ-B03** in `docs/open-questions.md`.

1. **Is Core on Vue 2 or Vue 3?**
2. **Does Core use `@vitejs/plugin-vue` or `@vitejs/plugin-vue2`?**

The second is the better question: it is answered by reading their build config, without anyone
having to characterise or summarise their stack. The two answers should agree; if they disagree,
that disagreement is itself the finding.

Still wanted, but no longer blocking a decision: whether Core is TypeScript or plain JavaScript
(bears on `REPO-SETUP.md` default decision 1, which chose TypeScript to help handoff — matching
Core may matter more).

---

## Not decided here

Everything under "Still to write" in `docs/architecture/README.md` — routing, state, data flow,
conventions, runtime config — waits on scaffolding rather than on an answer.
