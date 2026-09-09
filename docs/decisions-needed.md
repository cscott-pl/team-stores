# Decisions needed

Everything currently waiting on a person, grouped by who can answer it.

**Context, for a reader new to this:** we are rebuilding the Team Store Workspace as a Vue
front end, matching an approved Claude Design prototype as closely as possible, to hand to the
Core Dev team. Fidelity beats cleanliness — an unrequested improvement is indistinguishable from
a regression. Every question below has a **default we will proceed with** if we hear nothing, so
nothing is stalled. Answering just changes the outcome.

Reply inline, or to the owner. Last updated 2026-09-09.

---

# Connor — design and product scope

## 1. Does the Workspace adopt the PROLOOK design system? *(biggest one)*

The prototype and the design system disagree about nearly every colour, font and spacing value.
The design system ships 547 tokens, Gotham, a Tailwind Zinc grey ramp and `--red-500` as its
accent. The prototype uses Inter and Archivo from Google Fonts, 364 distinct hex values, and a
different red.

**Answer this part first:** the prototype's accent colours come from the **garment catalogue** —
`#e1251b` is the apparel colour "Red", `#1f9d55` is "Kelly Green", `#2563eb` is "Azure Royal".
Adopting the design system's red would decouple the interface from the colours the company
actually sells. **Is that coupling intentional?** If yes, design-system adoption is partly off the
table regardless of everything else, and the rest of this question changes shape.

The strongest evidence that *something* needs deciding: the prototype runs **two grey ramps at
once**. Twelve values match the design system's Zinc ramp exactly; a second custom ramp sits
alongside them, 5–13 ΔE away, doing the same jobs. That is not a decision anyone made.

- **Blocks:** only the *values* in two files (`_tokens.scss`, `_typography.scss`). Not building.
- **Default if no answer:** we match the prototype exactly, and name the tokens using the design
  system's vocabulary. Adoption later is then a change of values in one file — no renaming, no
  component edits.
- **If you say "adopt the DS":** the Workspace changes appearance — different greys, different
  red, Gotham instead of Inter/Archivo. That is a visible redesign, not a swap, and it would need
  re-approval from whoever signed off the prototype.
- **Where to look:** a clustered three-way colour table is in `docs/divergences.md` (DIV-005) —
  built so this can be answered by reading it.

## 2. Is the Third Party Integration Workspace variant in the MVP?

The design export contains a second Workspace variant, and its own instructions said every change
must be mirrored into both. Our brief says the variant is out of scope. Both can't be right.

- **Blocks:** the scope sections of three governing documents — **before any screen is built**, if
  the variant is in.
- **Default:** out of scope. We build one Workspace and do not read the variant.
- **If it's in:** the scope definition changes and every screen gets built twice, in lockstep.

## 3. Are the Team Manager portal and the access/gate screens ours?

Two surfaces sit inside the file we were given but may not belong to this project: a **Team
Manager portal** (~390 lines — a different person's view entirely, not the rep's), and the
**access / compliance gate** flow (~600 lines — the application form and Stripe verification a
rep sees *before* they have access).

- **Blocks:** folder structure, and roughly 1,000 lines of conversion work.
- **Default:** build them, because they are in the file we were told to convert.
- **If they're not ours:** we skip both. Note the gate flow is unreachable anyway in the default
  state, and there is a spec for it in the MVP folder — so this may already be settled.

## 4. Loading and error states — the design has none *(not blocking)*

The prototype has **no error state anywhere** and one loading spinner. Nothing in it is
asynchronous, so nothing can fail. The real system will have both.

- **Blocks:** nothing today.
- **Default:** we build no spinners, skeletons, retry buttons or error banners the design never
  showed, and note against each backend seam that its loading and failure treatment is
  unspecified.
- **What's needed eventually:** design for those states, before the Core Dev team wires up real
  data. Flagging now so it isn't discovered at integration.

## 5. Two small ones

**Which deployment is the fidelity reference?** Our checklist says compare against "the deployed
Workspace", but the only thing deployed is the *previous, rejected* build. We read it as the
Claude Design prototype. One line to confirm.

**Where is the full design export archived?** We excluded 213 MB of unused files from the repo, so
the complete export now exists only on one laptop. It needs a durable shared home, or
"verifiable against what was approved" stops being true. Not urgent, permanently annoying if
missed.

---

# Jowin — toolchain

## 6. Is Core on Vue 2 or Vue 3?

Originally five version questions; four are now settled or don't matter. What survives
re-integration is the Vue components and the stylesheets, so only the **Vue major version**
genuinely matters — Vue 2 and Vue 3 differ enough to make a port expensive.

**The easiest way to answer: does your build config use `@vitejs/plugin-vue` or
`@vitejs/plugin-vue2`?** That settles it without you having to describe anything.

Also useful, not blocking: **is Core TypeScript or plain JavaScript?**

- **Blocks:** nothing right now — we are proceeding on Vue 3.
- **Default:** Vue 3 at current stable, recorded as *provisional*. Chosen because it is where new
  work goes and Vue 2 reached end-of-life at the end of 2023 — **not** inferred from your stack.
  We are writing in a style that keeps a Vue 2.7 port mechanical.
- **If Core is Vue 2:** a port is needed. Bounded, but real, and better known now than later.
- **Already settled without you:** the SCSS toolchain. Your team's own earlier conversion uses
  modern dart-sass module syntax (45 `@use`, zero `@import`), so we matched it. No question there.

---

# Product / BA — MVP scope

## 7. Is the store-template feature in or out? *(probably already answered)*

The prototype contains a **complete, fully-built store-template feature — about 500 lines — that
no user can reach.** Three live buttons point at it and go nowhere.

A spec in the MVP folder says *"Removed from scope — August 20, 2026. Store templates (both
curated and user-generated) have been removed from the product entirely."* **That appears to
settle it — please confirm.**

- **Default:** we do not build it. The three buttons stay exactly as they are: present, styled,
  going nowhere, because that is what the prototype does.
- **If it's actually in:** ~500 lines come back and three dead buttons become live.

## 8. Business rules we can see but cannot cite

The prototype implements a lot of working business logic. We are not allowed to carry it over on
trust — each rule needs a citation to the MVP specs before it becomes code.

Rules currently uncited: store lifecycle states and transitions · order-window scheduling and
repeating close cadences · team-required / team-supplied / fan-gear semantics · product status
transitions · profit, bulk and bundle pricing · tax mode and flat-rate handling · roster duplicate
names and jersey numbers · minimum-quantity thresholds · fundraising enable/disable · league vs
individual store differences.

**Several of these probably already have specs** — we have just indexed 52 spec pages, including
dedicated pages for store lifecycle, roster management and product catalog management, and have
not yet read them in depth. **The next pass will either cite each rule or establish that nothing
covers it.** This entry is here so the remainder has a home; expect it to shrink.

- **Blocks:** writing those rules as code. Not blocking layout or component work.
- **Default:** we reproduce the prototype's behaviour exactly and mark each rule uncited.

## 9. Open product questions the design doesn't answer

Recorded, not urgent, each affecting one area: whether a rep or store ever spans more than one
brand · whether cross-store views span brands · whether a closed store stages edits until
reopened · tax calculation (the prototype uses a placeholder) · payment, fundraising, fees and
payouts including merchant-of-record · how products, orders and freight attach to rosters · league
vs individual differences the design doesn't show · expected launch-day traffic.

- **Default for all:** leave the prototype's current behaviour untouched and flag it.

---

# Informational — no reply needed

Recorded so they aren't rediscovered as bugs.

- **The design has no type scale.** 26 font sizes including seven half-pixel values; `12.5px` is
  used 332 times, more than 14px. Also 17 near-duplicate greys and 63 one-off shadows. We
  reproduce all of it exactly — inventing a scale would be a silent redesign, and rounding
  `12.5 → 13` would shift text on hundreds of elements. A post-MVP question for design.
- **The Workspace is desktop-only, floored at 1280px.** The design sets that floor itself. No
  breakpoints exist and none are being added.
- **The prototype's numbers are random.** Seed revenue is generated per page load, so the
  dashboard totals differ between two loads of the prototype itself. Fidelity comparison is on
  layout, not figures.
- **~680 lines of dead code** in the prototype — six components defined and never used. Not
  ported.
- **Three accessibility defects are being fixed**, all invisible: 18 links that should be buttons,
  three nav items with no accessible name, and suppressed focus outlines in 32+ places. Logged as
  intentional deviations.
- **The design system is React**, while the target is Vue. It appears to be a design-time artifact
  rather than something Core installs, so it is recorded rather than acted on.

---

*Full detail behind every item: `docs/open-questions.md` and `docs/divergences.md`.*
