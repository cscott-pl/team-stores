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

### Vue 3 — **decided**

**Decided by Cody on 9 September 2026.** A call, not an inference, and not provisional.

**Grounds:** the handoff artifact is source-level Vue SFCs and SCSS, which the dev team
re-integrates into their own build. Core's exact toolchain therefore matters less than getting
something runnable in front of people.

**Residual risk, stated plainly: if Core turns out to be on Vue 2, the port is real work.** Not
catastrophic and not open-ended, but real — component syntax and API differ enough that it is a
genuine task rather than a config change. That risk was accepted knowingly in exchange for
momentum.

**The answer may still arrive.** Jowin has been asked which Vite plugin Core's config uses —
`@vitejs/plugin-vue` or `@vitejs/plugin-vue2` — which settles the question without him having to
characterise anything. See `docs/decisions-needed-jowin.md`. If the answer is Vue 2 we will know
what we took on.

**Explicitly not inferred from the stack.** An earlier draft reasoned from "Laravel with Inertia
and Vite" to Vue 3. That inference does not hold — Inertia ships separate adapters per major
(`@inertiajs/vue2` and `@inertiajs/vue3`), Laravel + Inertia + Vue 2 was common, and Vite supports
Vue 2 via `@vitejs/plugin-vue2`. The stack is consistent with both, so it never narrowed anything.
It is recorded here only so nobody re-derives it and mistakes it for evidence.

#### Vue-2 portability hedges — withdrawn 9 September 2026

Earlier guidance said to avoid Teleport, Suspense, multi-root templates and `v-model` arguments
where avoiding them was free, to keep a Vue 2 port cheap. **That constraint is dropped.** Use
whatever is clearest.

What stays, because it is idiomatic Vue 3 rather than a hedge: **`<script setup>`** and the
**Composition API**.

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

## Asked, but no longer open — Jowin

**OQ-B03 is decided** (above). These are still worth an answer, and none of them block:

1. **Is Core on Vue 2 or Vue 3?** — phrased as: does your build config use `@vitejs/plugin-vue`
   or `@vitejs/plugin-vue2`? Answers it from the config, with no characterisation needed.
2. **Is Core TypeScript or plain JavaScript?**

**Already settled without him:** the SCSS toolchain, from the export's own `handoff/` folder.

## Not decided here

Everything under "Still to write" in `docs/architecture/README.md` — routing, state, data flow,
conventions, runtime config — waits on scaffolding rather than on an answer.
