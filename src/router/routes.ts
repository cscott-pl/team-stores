import type { RouteRecordRaw } from "vue-router";
import RoutePlaceholder from "@/components/common/RoutePlaceholder.vue";

/**
 * The Workspace route table.
 *
 * Derived one-for-one from docs/architecture/workspace-screen-inventory.md.
 * Every route currently renders RoutePlaceholder; screens replace them one at a
 * time. `meta.screen` records the prototype's `screen` value (or dashboard tab)
 * so the mapping back to the inventory stays checkable.
 *
 * CLAUDE.md: real routes, one per screen. There is no central switch statement
 * and none is to be introduced — the prototype's 22-value `screen` variable is
 * exactly the pattern being replaced.
 *
 * DELIBERATELY ABSENT
 *  - `template`, `template-repo` — the store-template screens. Unreachable in
 *    the prototype and removed from the product on 2026-08-20, though two specs
 *    disagree about that; see DIV-014 / OQ-P14. Not routed either way.
 *  - `home` (`ProlookHome`) — the prolook.com storefront home, not a Workspace
 *    surface. Out of scope per CLAUDE.md.
 *  - `loading` — a transient state during store creation, not a destination.
 *  - `empty` — the zero-stores state of the Stores screen, not its own route.
 */
export const routes: RouteRecordRaw[] = [
  { path: "/", redirect: { name: "overview" } },

  // ── Access / compliance gate ───────────────────────────────────────────────
  // Full-viewport, no Workspace chrome. In the MVP: it has a current, in-force
  // spec. Unreachable in the prototype's default state because TWEAK_DEFAULTS
  // sets hasStoreAccess: true. The prototype's Stripe step contradicts the
  // spec's manual 24-48h review — see DIV-010.
  {
    path: "/access",
    children: [
      {
        path: "gate",
        name: "access-gate",
        component: RoutePlaceholder,
        meta: { title: "Access gate", screen: "gate", spec: "Access / Compliance Gate" },
      },
      {
        path: "apply",
        name: "access-apply",
        component: RoutePlaceholder,
        meta: { title: "Business details", screen: "access-form", spec: "Access / Compliance Gate" },
      },
      {
        path: "verifying",
        name: "access-verifying",
        component: RoutePlaceholder,
        meta: {
          title: "Verifying",
          screen: "stripe-verify",
          spec: "Access / Compliance Gate",
          note: "Prototype-only. The spec requires manual admin review with a 24–48 hour turnaround and never mentions Stripe — DIV-010.",
        },
      },
      {
        path: "pending",
        name: "access-pending",
        component: RoutePlaceholder,
        meta: {
          title: "Application pending",
          screen: "access-pending",
          spec: "Access / Compliance Gate",
          note: "Built but unreachable in the prototype — the Stripe path superseded it. The spec makes this the normal path.",
        },
      },
    ],
  },

  // ── Team Stores — the three-tab shell ──────────────────────────────────────
  {
    path: "/overview",
    name: "overview",
    component: RoutePlaceholder,
    meta: { title: "Overview", screen: "overview", spec: "Analytics Dashboard (Overview Tab)" },
  },
  {
    path: "/orders",
    name: "all-stores-orders",
    component: RoutePlaceholder,
    meta: { title: "All-stores orders", screen: "orders", spec: "All-Stores Orders Page" },
  },
  {
    path: "/vault",
    name: "stock-vault",
    component: RoutePlaceholder,
    meta: { title: "Stock Vault", screen: "vault", spec: "Product Catalog Management, Epic G" },
  },

  // ── Stores ─────────────────────────────────────────────────────────────────
  {
    path: "/stores",
    name: "stores",
    component: RoutePlaceholder,
    meta: { title: "Stores", screen: "list", spec: "Team Store Directory (Stores Tab)" },
  },
  {
    path: "/stores/new",
    name: "store-create",
    component: RoutePlaceholder,
    meta: {
      title: "Create a store",
      screen: "form",
      spec: "Step 1 – Basics · Step 2 – Divisions & Teams · Step 2 – Add Products · Step 3 – Review",
      note: "Three steps for an Individual Team Store, four for a League Store. The prototype already forks correctly.",
    },
  },
  {
    path: "/leagues",
    name: "leagues",
    component: RoutePlaceholder,
    meta: { title: "Leagues", screen: "leagues" },
  },
  {
    path: "/leagues/:leagueId/settings",
    name: "league-settings",
    component: RoutePlaceholder,
    meta: { title: "League settings", screen: "league-settings" },
  },

  // ── Account-menu destinations ──────────────────────────────────────────────
  {
    path: "/account",
    name: "account",
    component: RoutePlaceholder,
    meta: { title: "My Account", screen: "account", spec: "Rep Account & Brand Customizer Access" },
  },
  {
    path: "/workspace-settings",
    name: "workspace-settings",
    component: RoutePlaceholder,
    meta: {
      title: "Workspace Settings",
      screen: "wsettings",
      spec: "Workspace Settings",
      note: "Reached only from the account menu. Not a navigation tab — the shell stays at three tabs.",
    },
  },

  // ── Store editor — chrome-free, six tabs ───────────────────────────────────
  {
    path: "/stores/:storeId",
    redirect: (to) => ({ name: "store-home", params: to.params }),
  },
  {
    path: "/stores/:storeId/home",
    name: "store-home",
    component: RoutePlaceholder,
    meta: { title: "Store · Home", screen: "dashboard/home", spec: "Store Home (Home Tab)" },
  },
  {
    path: "/stores/:storeId/roster",
    name: "store-roster",
    component: RoutePlaceholder,
    meta: {
      title: "Store · My Team(s)",
      screen: "dashboard/roster",
      spec: "Roster Management · Roster-Optional Architecture",
      note: "Tab label switches between My Team and My Teams on store type.",
    },
  },
  {
    path: "/stores/:storeId/products",
    name: "store-products",
    component: RoutePlaceholder,
    meta: {
      title: "Store · Products",
      screen: "dashboard/products",
      spec: "Product Catalog Management (Products Tab)",
    },
  },
  {
    path: "/stores/:storeId/orders",
    name: "store-orders",
    component: RoutePlaceholder,
    meta: {
      title: "Store · Orders",
      screen: "dashboard/orders",
      spec: "Order Management (Orders Tab)",
      note: "Two sub-tabs: All Orders and Pending Orders.",
    },
  },
  {
    path: "/stores/:storeId/reports",
    name: "store-reports",
    component: RoutePlaceholder,
    meta: {
      title: "Store · Reports",
      screen: "dashboard/payouts",
      spec: "Store Analytics (Reports Tab)",
      note: "Prototype tab id is `payouts`; the label is Reports.",
    },
  },
  {
    path: "/stores/:storeId/settings/:section?",
    name: "store-settings",
    component: RoutePlaceholder,
    meta: {
      title: "Store · Settings",
      screen: "dashboard/general",
      spec: "Store General Settings (Settings Tab)",
      note: "Seven sections, one (Catalog & Decoration) conditional on a third-party vendor.",
    },
  },

  // ── Customizer bridge ──────────────────────────────────────────────────────
  // CLAUDE.md requires designer/picker UI to sit behind a clean boundary and to
  // assume repeated mount/unmount. Routed rather than global-triggered — the
  // prototype reaches these through window.__openMyCarts / __openSavedDesigns.
  {
    path: "/stores/:storeId/customizer",
    name: "customizer",
    component: RoutePlaceholder,
    meta: { title: "Customizer picker", screen: "customizer", spec: "Customizer & Picker Page" },
  },
  {
    path: "/stores/:storeId/carts",
    name: "my-carts",
    component: RoutePlaceholder,
    meta: { title: "My Carts", screen: "my-carts", note: "No MVP spec covers this surface." },
  },
  {
    path: "/stores/:storeId/designs",
    name: "saved-designs",
    component: RoutePlaceholder,
    meta: { title: "Saved Designs", screen: "saved-designs", note: "No MVP spec covers this surface." },
  },

  // ── Other personas / surfaces ──────────────────────────────────────────────
  {
    path: "/portal",
    name: "team-stores-portal",
    component: RoutePlaceholder,
    meta: {
      title: "Team Stores portal",
      screen: "portal",
      note: "Reachable only from the prototype's Tweaks panel, and its own comment says the standalone Landing page replaced it. Routed so it is not silently lost.",
    },
  },
  {
    path: "/team-manager",
    name: "team-manager-portal",
    component: RoutePlaceholder,
    meta: {
      title: "Team Manager portal",
      screen: "portal (TeamManagerPortal)",
      note: "A different persona's surface. Whether it belongs in this repo is OQ-P15.",
    },
  },

  { path: "/:pathMatch(.*)*", name: "not-found", component: RoutePlaceholder, meta: { title: "Not found" } },
];
