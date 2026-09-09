<script setup lang="ts">
/**
 * Layout for every screen that wears the Team Stores shell — Overview, Stores,
 * Stock Vault, the all-stores Orders page, and the account-menu destinations.
 *
 * The store editor and the access flow do NOT use this: the design drops the
 * chrome entirely for the editor, and the access screens render full-viewport.
 * See workspace-screen-inventory.md, "How navigation actually works".
 */
import WorkspaceHeader from "./WorkspaceHeader.vue";
</script>

<template>
  <div class="workspace-layout">
    <WorkspaceHeader />
    <RouterView />
  </div>
</template>

<style lang="scss" scoped src="./WorkspaceLayout.scss"></style>
