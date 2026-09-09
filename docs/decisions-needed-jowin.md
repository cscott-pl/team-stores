# One question for Jowin — Team Store Workspace front end

**Asked 2026-09-09. This is the only thing we need from you.** It does not block us today; it
changes how much rework lands later.

## Is Core on Vue 2 or Vue 3?

**The easiest way to answer: does your build config use `@vitejs/plugin-vue` or
`@vitejs/plugin-vue2`?** That settles it without you having to describe anything.

## Why only this one

We are building a front-end prototype of the Team Store Workspace to hand to your team. What
survives that handover is the Vue components and the stylesheets — our Vite, Node and TypeScript
versions do not. So the **Vue major version** is the only one that genuinely matters: Vue 2 and
Vue 3 differ enough in component syntax and API to make a port expensive.

Originally we had five version questions for you. Four are gone:

- **SCSS compiler — answered from your own work.** Your team's earlier conversion attempt (the
  `handoff/` folder in the design export) uses modern dart-sass module syntax: 45 `@use`,
  zero `@import`. We matched it. No question.
- **Vite, Node, TypeScript versions** — these don't survive re-integration, so matching them
  exactly matters much less than we first thought.

## What we're doing meanwhile

Proceeding on **Vue 3 at current stable, recorded as provisional.** Chosen because it is where
new work goes and Vue 2 reached end-of-life at the end of 2023 — **not** inferred from your stack.

We considered inferring Vue 3 from "Laravel with Inertia and Vite" and rejected it: Inertia ships
separate adapters for each major (`@inertiajs/vue2` and `@inertiajs/vue3`), Laravel + Inertia +
Vue 2 was common, and Vite supports Vue 2 via `@vitejs/plugin-vue2`. That stack is consistent with
both answers, so it never narrowed anything.

We are writing in a style that keeps a Vue 2.7 port mechanical — `<script setup>`, plain
Composition API, and Vue-3-only features avoided where avoiding them is free. Where one is worth
using we use it and log it, so a porter gets a short list rather than a codebase bent around a
version you may not even need.

## What changes with your answer

| Answer | Consequence |
|---|---|
| **Vue 3** | Nothing changes. We drop "provisional" from the record. |
| **Vue 2** | A port is needed. Bounded and known, and much cheaper to know now than at integration. |

## One more, useful but not blocking

**Is Core TypeScript or plain JavaScript?** We defaulted to TypeScript because it helps handover,
but matching your codebase may matter more.

---

*Full context: `docs/architecture/toolchain-decisions.md` in the `cscott-pl/team-stores` repo.*
