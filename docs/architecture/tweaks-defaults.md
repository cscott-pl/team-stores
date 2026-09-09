# Tweaks-panel defaults — the chosen values

Resolves **OQ-P16**. Decided 2026-09-09.

The Claude Design Tweaks panel is preview shell and is not reproduced — but removing it is not a
deletion, because `App()` reads `tweaks.*` directly and several flags gate real behaviour while
others expose variants that exist nowhere else.

**Decision: take whatever the panel produces untouched, from cleared first-run state.** That is
the faithful default and needs nobody's input.

**Source for every value below:** `TWEAK_DEFAULTS`, `reference/workspace-app.jsx:26390`, verified
against a cleared-storage load of the served prototype. All 18 flags have a default, so nothing
needed escalating.

Each becomes a fixed value or a runtime config entry — never a build-time constant where it
touches brand identity.

## Behaviour gates

| Flag | Value | What it fixes |
|---|---|---|
| `hasStoreAccess` | `true` | The rep has Team Stores access. **The no-access gate, application form, Stripe verification and pending screens are therefore never reached in the default state.** They remain built — see OQ-P15. |
| `bypassGate` | `false` | No compliance-gate bypass |
| `seedData` | `true` | Demo data present |
| `zeroState` | `false` | Not the zero-state usability variant |
| `overviewEmpty` | `false` | Overview shows populated state, not its empty state |
| `overviewMode` | `false` | Frame-overview grid off — preview shell, not reproduced at all |

## SSO welcome

| Flag | Value | What it fixes |
|---|---|---|
| `ssoWelcome` | `true` | `WelcomeSSOModal` **shows on session start** — confirmed in browser from cleared storage |
| `ssoOriginBrand` | `"prolook"` | Originating brand. **Goes to `src/config/` runtime config, not a constant** — `CLAUDE.md` forbids build-time brand identity, and the first real brand is expected to be MRC/Marucci |
| `ssoMultiBrand` | `false` | Single-brand account |

## Team Stores portal — 4 variants collapsed to 1

Reached only via the Tweaks panel (`screen === "portal"`), and a code comment at `:27347` says the
standalone Landing page replaced it. Defaults recorded anyway, since the screen still renders.

| Flag | Value | Alternatives not taken |
|---|---|---|
| `portalHero` | `"cinematic"` | `split` |
| `portalHeadline` | `"fulfillment"` | `teamstores`, `geared` |
| `portalCta` | `"manager"` → "Enter Store Manager" | `dashboard` → "Go to Dashboard" |
| `portalCtaColor` | `"black"` | `red` |

## Create-store wizard

| Flag | Value | Alternatives not taken |
|---|---|---|
| `wizardAccent` | `"red"` → `#e1251b` | `navy` → `#1d3a8a` |
| `wizardAthletes` | `30` | slider, 10–60 |
| `templateLayout` | `"sidebar"` | `stacked` — moot while the template feature is unreachable (OQ-P14) |

The unused navy accent is why `#1d3a8a`, `#2944a8` and `#eef3fb` appear in the palette with no
design-system equivalent (DIV-005). Those tokens exist but the default never renders them.

## Onboarding checklist

| Flag | Value | Alternatives not taken |
|---|---|---|
| `checklistAccent` | `"red"` | `navy`, `green` |
| `checklistPosition` | `"right"` (bottom right) | `left` |

---

## If someone later says "we wanted the other one"

Change the single value here and in the component that consumed it. Each row records what the
alternative was, so it is a one-line change rather than an investigation — which is the whole
point of recording them.

**Not reproduced at all** (preview shell, no default to take): `TweaksPanel` and its controls, the
`OverviewGrid` frame-overview mode, `getFrameRoute()` / `#frame=` deep links, `--dc-inv-zoom`, and
the `__bundler_thumbnail` template.
