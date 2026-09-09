# Decisions needed — Connor and product/BA

Everything waiting on a person, grouped by who can answer it. **Updated 2026-09-09** after reading
nine MVP spec pages against the prototype.

**Context, for a reader new to this:** we are rebuilding the Team Store Workspace as a Vue front
end, matching an approved design prototype as closely as possible, to hand to the Core Dev team.
Fidelity beats cleanliness — an unrequested improvement is indistinguishable from a regression.
**Every item has a default we proceed with if we hear nothing**, so nothing is stalled. Answering
just changes the outcome.

*Jowin's single toolchain question is in `docs/decisions-needed-jowin.md` — sent separately.*

---

# Connor

## 1. Store templates — two of your specs disagree, and we can't tell which wins

| Spec | Last edited | Says |
|---|---|---|
| **Template Store Creation** | 21 Aug | store templates *"removed from the product entirely"*, *"not in force"* |
| **Store General Settings** | **2 Sept** | still lists **Create Template** on the Store Status card — in four places |

The Settings page was edited **four times after the removal** and kept the references each time,
so we can't treat it as stale. **And the prototype agrees with it** — its Create Template saves
store type, distribution model, fundraising and products, which is a *store* template, the exact
thing the removal note names.

Watch the naming: a **store template** (removed?) is not a **Catalog Template** (the August rename
of Product Packages, current). The two are easy to conflate and we may be seeing that.

**Which page is in force?** If it's the removal, three buttons go. If it's Settings, they stay and
the destination screens need building.

- **Default:** keep the buttons exactly as they behave — present, styled, going nowhere.
- **Settled either way:** we don't build the ~500 lines behind them, and the old "template or
  scratch?" modal stays gone — both readings agree, and the prototype already does that.

*(An earlier draft of this page put this at the top as a one-line confirmation to remove the
buttons. That was based on one spec before we'd read the other — withdrawn.)*

## 2. Does the Workspace adopt the PROLOOK design system? — *the one that needs your judgement*

The prototype and the design system disagree about nearly every colour, font and spacing value.

**Answer this part first:** the prototype's accent colours come from the **garment catalogue** —
`#e1251b` is the apparel colour "Red", `#1f9d55` is "Kelly Green", `#2563eb` is "Azure Royal".
Adopting the design system's red would **decouple the interface from the colours the company
actually sells**. Is that coupling intentional? If yes, design-system adoption is partly off the
table regardless of everything else, and the rest of this question changes shape.

The clearest evidence that *something* needs deciding: the prototype runs **two grey ramps at
once**. Twelve values match the design system's Zinc ramp exactly; a second custom ramp sits
alongside them, 5–13 ΔE away, doing the same jobs. Nobody decided that.

- **Blocks:** only the *values* in two stylesheet files. Not building.
- **Default:** match the prototype exactly, with tokens named using the design system's
  vocabulary — so adopting later is a change of values in one file, no component edits.
- **If you say adopt:** the Workspace changes appearance. That is a visible redesign needing
  re-approval, not a swap.
- **A table to answer from:** `docs/divergences.md`, DIV-005.

## 3. The launch gate lets a rep go live with an empty storefront

The prototype allows launching a store when **any** product exists, including drafts only. **Three
separate specs** require at least one *published* product, and one gives the exact tooltip:
*"Publish at least one product to launch your store."* The prototype says *"Add at least one
product."*

This is the first case where fidelity and correctness genuinely conflict — reproducing the
prototype means reproducing a bug that lets a store go live with nothing buyers can see.

- **Default:** reproduce the prototype and log it. Fidelity wins unless you say otherwise.
- **If you say fix it:** one condition and one tooltip string. Invisible unless a rep tries it.

## 4. Two setup guides are running at once

The prototype contains **both** the old setup guide (a scrolling list of bullets) and the new one
(the paced card sequence the spec now requires) — wired simultaneously, with different memory of
whether you have seen it. The spec's "reopen from the header" button exists in the code but is
never shown.

- **Default:** build the **new** paced-card version, since it is what the current spec specifies,
  and drop the old modal. Say so if you want the old one preserved.
- **Related:** the spec requires one shared card-sequence shell for both this and the Store Close
  Report. The prototype built two. We will build one.

## 5. Is the Third Party Integration Workspace variant in the MVP?

The design export contains a second Workspace variant, and its own instructions said every change
must be mirrored into both. Our brief says it is out of scope. Both can't be right.

- **Blocks:** the scope sections of three governing documents — **before any screen is built**.
- **Default:** out of scope. One Workspace.

## 6. Is the Team Manager portal ours?

A ~390-line surface for a *different person* — the team manager, not the rep — rendered over the
Workspace. No page in the MVP specs folder covers it.

- **Default:** build it, because it is in the file we were told to convert.
- **Now answered, so no longer asked:** the access / compliance gate **is** in the MVP — it has a
  current, in-force spec. We will build it. (Note its spec requires manual admin review with a
  24–48 hour wait, while the prototype does instant Stripe verification — logged as DIV-010.)

## 7. Loading and error states — *not blocking, but nobody has designed them*

The prototype has **no error state anywhere** and one loading spinner. We checked the spec that
looked most likely to cover this; it doesn't — its modal inventory lists a single unspecified
"Global loading overlay", and the words *error*, *failure* and *retry* appear nowhere on it.

So the gap is real on both sides. The real system will need both.

- **Default:** build nothing the design never showed, and record against each backend seam that
  its loading and failure treatment is unspecified.
- **What's needed eventually:** design for those states, before Core wires up real data.

## 8. Two small ones

**Which deployment is the fidelity reference?** Our checklist says "the deployed Workspace", but
the only thing deployed is the *previous, rejected* build. We read it as the design prototype. One
line to confirm.

**Where is the full design export archived?** We excluded 213 MB of unused files from the repo, so
the complete export now exists only on one laptop. Not urgent, permanently annoying if missed.

---

# Product / BA

## 9. Business rules still uncited — *shrinking*

We are not allowed to implement business logic without citing a spec. After the first pass, most
of the list has a source: store lifecycle, launch gate, auto-close, archive semantics, the
League/Individual fork, roster schema and duplicate-number policy, the Roster Bank, modal severity
tiers, and the access gate are all now cited.

**Still uncited**, pending a second reading pass: product status transitions · profit, bulk and
bundle pricing · tax mode and flat-rate handling · minimum-quantity thresholds · fundraising
enable/disable · repeating close cadences · freight mapping.

Dedicated spec pages exist for all of them — **expect this to shrink again, not to become a
question for you.**

## 10. Open product questions the design doesn't answer

Whether a rep or store ever spans more than one brand · whether cross-store views span brands ·
whether a closed store stages edits until reopened · tax calculation (the prototype uses a
placeholder) · payment, fundraising, fees and payouts including merchant-of-record · expected
launch-day traffic.

- **Default for all:** leave the prototype's behaviour untouched and flag it.
- **Now answered by the specs, so removed from this list:** League vs Individual store types.
  **Both are in the MVP**, with a specified fork — 3 wizard steps for Individual, 4 for League —
  and the prototype already implements it exactly.

---

# Not ours, but blocking — raised by the specs themselves

Three questions the MVP specs record as unresolved. Listed so nobody reads a spec as complete.

1. **Consent / privacy — the spec calls it "build-blocking."** The Roster-Optional epic captures
   buyer and player details at checkout and surfaces them to a rep. Much of that data concerns
   **children**, implicating COPPA-style and GDPR parental-consent rules. The spec states the
   consent mechanism, retention and parental-consent handling **must be confirmed with
   legal/privacy before the flow ships**. The prototype has the Roster Bank built.
   **Owner: legal / privacy.**
2. **Logout scope** — whether logging out ends only the Team Stores session or the Customizer
   session it came from, and where the rep lands. **Owner: product.**
3. **Per-team coach import** — four sub-questions the spec deliberately leaves open. **Owner:
   product.**

---

# Informational — no reply needed

- **The design has no type scale.** 26 font sizes including seven half-pixel values; `12.5px` used
  332 times. Also 17 near-duplicate greys and 63 one-off shadows. We reproduce all of it —
  inventing a scale would be a silent redesign. A post-MVP question for design.
- **Status vocabulary disagrees three ways.** The Aug 31 spec says Draft/Open/Closed/Archived; the
  Aug 3 spec says Draft/Active/On Hold; the prototype uses five values plus two booleans. We
  follow the prototype and have logged it. The Aug 3 page is stale on this *and* on templates.
- **The prototype lets a rep un-archive a store back to Draft**, which the spec forbids twice
  (support-only, and never back to Draft). Logged; we reproduce the prototype.
- **The Workspace is desktop-only, floored at 1280px** — the design sets that floor itself.
- **The prototype's numbers are random.** Dashboard totals differ between two loads of the
  prototype. Fidelity comparison is on layout, not figures.
- **~680 lines of dead code** — six components defined and never used. Not ported.
- **Three accessibility defects fixed**, all invisible: links that should be buttons, unnamed nav
  items, suppressed focus outlines.
- **The design system is React** while the target is Vue — a design-time artifact, recorded not
  acted on.

---

*Full detail: `docs/open-questions.md`, `docs/divergences.md`, `docs/specs-index.md`.*
