<script setup lang="ts">
/**
 * The three-tab section nav: Overview / Stores / Stock Vault.
 *
 * Spec — Team Stores Workspace (Sep 01, 2026), Epic A: "Three tabs only… and
 * nothing else. Catalog Templates does not appear as a nav tab. Workspace
 * Settings does not appear as a nav tab either."
 *
 * The prototype renders these as `<a href="#">` with an onClick (`:1032`) and
 * they expose no accessible name in the accessibility tree. These are real
 * navigation, so they become RouterLinks with real hrefs — authorised
 * deviation, DIV-007 items 1 and 2. Appearance is unchanged.
 */
const tabs = [
  { to: { name: "overview" }, label: "OVERVIEW" },
  { to: { name: "stores" }, label: "STORES" },
  { to: { name: "stock-vault" }, label: "STOCK VAULT" },
] as const;
</script>

<template>
  <nav class="workspace-nav" aria-label="Team Stores sections">
    <RouterLink
      v-for="tab in tabs"
      :key="tab.label"
      :to="tab.to"
      class="workspace-nav__tab"
      active-class="workspace-nav__tab--active"
    >
      {{ tab.label }}
    </RouterLink>
  </nav>
</template>

<style lang="scss" scoped src="./WorkspaceNavTabs.scss"></style>
