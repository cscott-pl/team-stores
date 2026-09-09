<script setup lang="ts">
/**
 * White card with a heading row. The Overview stacks five of these; the store
 * dashboard reuses the same shell.
 *
 * `title` renders as a real heading. The prototype uses <h3> throughout with no
 * <h2> above it; here the level is a prop so each page can keep a correct
 * heading hierarchy without changing appearance — CLAUDE.md, "Markup quality".
 */
withDefaults(
  defineProps<{ title: string; subtitle?: string; headingLevel?: 2 | 3 | 4 }>(),
  { subtitle: undefined, headingLevel: 2 },
);
</script>

<template>
  <section class="app-panel">
    <div class="app-panel__head">
      <div class="app-panel__heading">
        <component :is="`h${headingLevel}`" class="app-panel__title">{{ title }}</component>
        <p v-if="subtitle" class="app-panel__subtitle">{{ subtitle }}</p>
      </div>
      <div v-if="$slots.actions" class="app-panel__actions">
        <slot name="actions" />
      </div>
    </div>
    <slot />
  </section>
</template>

<style lang="scss" scoped src="./AppPanel.scss"></style>
