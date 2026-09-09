<script setup lang="ts">
/**
 * Application root.
 *
 * Deliberately thin: it renders the router outlet and nothing else. The three
 * mutually exclusive chrome states the design uses — the prolook.com shell, the
 * Team Stores shell, and the chrome-free store editor — are layout decisions
 * that belong to route-level components, not here.
 *
 * See docs/architecture/workspace-screen-inventory.md, "How navigation actually
 * works".
 */
</script>

<template>
  <RouterView />
</template>
