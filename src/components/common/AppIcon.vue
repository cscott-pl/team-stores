<script setup lang="ts">
/**
 * Base icon. The prototype's `Icon` (`reference/workspace-app.jsx:538`),
 * with geometry moved to a registry.
 *
 * Decorative by default — `aria-hidden`, because an icon beside a label adds
 * nothing for a screen reader. Pass `label` when the icon IS the control's only
 * content, which CLAUDE.md requires for icon-only controls.
 */
import { computed } from "vue";
import { ICON_PATHS, type IconName } from "./icons";

const props = withDefaults(
  defineProps<{
    name: IconName;
    size?: number;
    /** Prototype default is 1.6; bank-inbox is drawn at 1.8. */
    stroke?: number;
    /** Accessible name. Omit for decorative icons. */
    label?: string;
  }>(),
  { size: 18, stroke: 1.6, label: undefined },
);

const paths = computed(() => ICON_PATHS[props.name]);
const strokeWidth = computed(() => (props.name === "bank-inbox" ? 1.8 : props.stroke));
</script>

<template>
  <svg
    class="app-icon"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    :stroke-width="strokeWidth"
    stroke-linecap="round"
    stroke-linejoin="round"
    :aria-hidden="label ? undefined : true"
    :role="label ? 'img' : undefined"
    :aria-label="label"
  >
    <path v-for="(d, i) in paths" :key="i" :d="d" />
  </svg>
</template>

<style lang="scss" scoped src="./AppIcon.scss"></style>
