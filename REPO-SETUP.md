# Repo setup — what else you need

Everything required to stand the new GitHub repository up, beyond `README.md`, `CLAUDE.md` and
`AGENTS.md`. Ordered by when you need it.

## Do this before `npm install`

**Get Core's pinned versions from Jowin.** Vue, Vite, Node, TypeScript, and the SCSS compiler.
This is the one decision that is expensive to reverse: if you install latest (Vite 8, TypeScript
7, vue-router 5, Pinia 4) and Core is pinned several majors behind, the prototype hands off with
an upgrade project attached — and the architecture notes already flag that Core's toolchain is
older and memory-hungry to build. Pin to Core, not to latest, and record the versions and the
reason in `docs/architecture/`.

---

## 1. First commit — the reference, untouched

```
reference/          # the exported Claude Design project, committed as-is, never edited
```

Commit the export **before** writing any application code, in its own commit. This is what makes
later fidelity diffs possible, and what lets anyone verify the prototype against what was
approved. Add a one-line `reference/README.md` saying it is read-only and where it came from.

## 2. Root configuration

| File | Purpose | Notes |
| --- | --- | --- |
| `package.json` | deps + the six scripts named in `README.md` | Pin to Core's versions |
| `.nvmrc` | Node version | Match Core's Node, not your local |
| `.gitignore` | `node_modules/`, `dist/`, `.env*`, `.DS_Store`, editor dirs | |
| `.editorconfig` | indentation, line endings, final newline | Cheap; prevents cross-team diff noise |
| `index.html` | Vite entry | |
| `vite.config.ts` | Vue plugin, `@/*` → `src/*` alias, SCSS options | Keep the Workspace as its own entry point |
| `tsconfig.json` + `tsconfig.node.json` | TypeScript config | |
| `eslint.config.js` | flat config: `eslint-plugin-vue` + TS | |
| `.stylelintrc.json` | SCSS linting | This is what actually enforces the styling rules |
| `.prettierrc` | formatting | Turn off Prettier rules that fight ESLint |

### Two configs worth getting right

**`.stylelintrc.json`** — the styling separation is a hard requirement from the dev team, so
enforce it mechanically rather than by memory. Configure it to reject hard-coded colour literals
(use tokens), enforce a consistent class naming pattern, and forbid `!important`. A rule nobody
checks lasts about two sprints.

**`eslint.config.js`** — add an import-boundary rule that forbids importing from `src/mock-data/`
anywhere outside `src/services/`. That single rule is what keeps the backend seam real instead of
aspirational, and it is the seam the Core Dev team is actually going to consume.

## 3. Source skeleton

```
src/
├── main.ts
├── App.vue
├── router/index.ts
├── stores/                  # Pinia
├── services/                # async, promise-returning; the only importer of mock-data
├── mock-data/
├── config/runtime-config.ts # brand/tenant config, read at runtime
├── features/
├── components/{common,feedback,layout}/
├── styles/{_tokens.scss,_mixins.scss,global.scss}
└── types/
public/                      # fonts and static assets lifted from the export
```

**On `.env`** — you will probably want a `.env.example`, but note what it is *not* for. Brand and
tenant identity must not live in build-time environment constants; that is exactly the constraint
that makes one build unable to serve more than one brand. Runtime config goes in `src/config/`
and is loaded at startup. Keep `.env` for build-time concerns only, and say so in the file's
comments.

## 4. Docs skeleton

Create these as stubs on day one. Empty files that exist get filled; files that don't exist don't
get created under deadline.

```
docs/
├── handoff/claude-code-brief.md   # the handoff prompt, committed so the rules live in-repo
├── handoff/phase-log.md           # what changed, phase by phase
├── architecture/                  # routes, state, data flow, conventions, pinned versions
├── features/                      # one per feature: business rules with cited specs
├── service-layers/                # the backend contract ← primary handoff artifact
├── divergences.md                 # Figma vs prototype vs docs vs specs
└── open-questions.md              # anything flagged rather than decided
```

Commit the handoff brief into `docs/handoff/`. Rules that live only in a chat message get lost;
rules in the repo get read by whoever picks this up next.

## 5. GitHub-specific

| File | Purpose |
| --- | --- |
| `.github/workflows/ci.yml` | lint, lint:css, typecheck, build — on every PR |
| `.github/pull_request_template.md` | the fidelity checklist from `AGENTS.md`, as checkboxes |
| `.github/CODEOWNERS` | route review to you and to Core Dev |

Then in repo settings: protect `main`, require the CI check, require one review. The PR template
is the highest-value item here — it puts "compared side-by-side against the deployed Workspace"
in front of the reviewer every time, which is the only check that actually catches fidelity drift.

Optionally add a **bundle-size check** to CI. It matters for the same reason the Workspace keeps
its own entry point: nothing heavy should end up in a bundle a future public storefront inherits.

## 6. Deployment for review

The previous round was reviewed via a temporary Netlify deployment, and that worked — the
architects navigated the prototype and came back with minutes. Set up preview deployments per
PR so every change is reviewable at a URL rather than by pulling a branch. Keep it clearly
labelled as a temporary review deployment.

---

## Decisions I made as defaults — worth confirming

1. **TypeScript.** Carried over from the previous attempt and it helps handoff, but if Core's Vue
   codebase is plain JavaScript, matching it may matter more.
2. **vue-router with real routes**, replacing the previous single-page `screen` switch. Better for
   handoff, slightly more setup.
3. **Pinia** for state, replacing the single React context.
4. **Sibling `.scss` files** via `<style src="...">` rather than inline `<style>` blocks in the
   SFC. This is the strongest reading of "separate styling from the other component
   responsibilities" — scoped blocks inside the SFC would be more idiomatic Vue but keep styling
   in the component file.
5. **Vitest for pure business-rule functions only** — not component tests. The previous repo had
   no test framework at all; a handful of tests on the spec-cited pure functions is cheap and
   protects the rules the dev team is inheriting. Skip if you'd rather stay zero-config.
6. **Desktop-only layout.** The previous attempt enforced `min-width: 1280px` globally. I have
   not carried that forward, because responsiveness should follow the design rather than a
   previous decision — check what the Figma frame and the export actually specify for the
   Workspace before locking this in.
