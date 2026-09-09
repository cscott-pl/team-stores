<script setup lang="ts">
/**
 * The Team Stores shell header — brand mark, three-tab nav, account menu.
 *
 * Prototype `TeamStoresHeader` (`reference/workspace-app.jsx:1151`).
 * Spec: Team Stores Workspace (Sep 01, 2026).
 *
 * One of three mutually exclusive chrome states in the design; the store editor
 * drops the shell entirely. See workspace-screen-inventory.md.
 */
import { useRouter } from "vue-router";
import AccountMenu from "./AccountMenu.vue";
import WorkspaceNavTabs from "./WorkspaceNavTabs.vue";

const router = useRouter();

/**
 * Read-only identity mirrored from the Customizer sign-in. `CLAUDE.md` treats
 * auth as an injected boundary, so this is a prop-shaped constant for now
 * rather than anything resembling a session.
 */
const accountName = "Hingle McCringleberry";

function onSelect(id: string) {
  switch (id) {
    case "account":
      router.push({ name: "account" });
      break;
    case "customizer":
      // Spec: the rep's primary brand Customizer, in a NEW browser tab, "so
      // neither side loses work". Resolved from runtime config once wired.
      window.open("https://customizer.prolook.com/", "_blank", "noopener");
      break;
    case "orders":
      router.push({ name: "all-stores-orders" });
      break;
    case "wsettings":
      router.push({ name: "workspace-settings" });
      break;
    case "logout":
      // Spec Epic D records logout scope as OPEN — whether it ends only the
      // Team Stores session or the propagated Customizer session too. The
      // prototype shows a confirm modal; not built yet.
      break;
  }
}
</script>

<template>
  <header class="workspace-header">
    <!-- The wordmark links to the Landing page, which is out of scope. The
         prototype's dead link is left dead — CLAUDE.md: "If the Workspace links
         somewhere out of scope, leave the link as-is." -->
    <RouterLink :to="{ name: 'overview' }" class="workspace-header__brand">
      <img class="workspace-header__mark" src="/assets/qx-logo.png" alt="" />
      <span class="workspace-header__rule" aria-hidden="true" />
      <span class="workspace-header__wordmark">TEAM STORES</span>
    </RouterLink>

    <WorkspaceNavTabs />

    <AccountMenu :name="accountName" @select="onSelect" />
  </header>
</template>

<style lang="scss" scoped src="./WorkspaceHeader.scss"></style>
