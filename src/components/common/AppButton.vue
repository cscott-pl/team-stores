<script setup lang="ts">
/**
 * Button primitive. Highest fan-in in the prototype after Icon and Modal — 31
 * distinct components mount it — and one of only three names the PROLOOK design
 * system and the prototype independently agree on, alongside Icon and Checkbox.
 * See docs/architecture/component-catalog.md.
 *
 * Variants observed in the prototype's own signature (`:668`): primary,
 * secondary, ghost, danger × sm, md, lg.
 */
import AppIcon from "./AppIcon.vue";
import type { IconName } from "./icons";

withDefaults(
  defineProps<{
    variant?: "primary" | "secondary" | "ghost" | "danger";
    size?: "sm" | "md" | "lg";
    icon?: IconName;
    disabled?: boolean;
    type?: "button" | "submit";
  }>(),
  { variant: "primary", size: "md", icon: undefined, disabled: false, type: "button" },
);
</script>

<template>
  <button
    class="app-button"
    :class="[`app-button--${variant}`, `app-button--${size}`]"
    :type="type"
    :disabled="disabled"
  >
    <AppIcon v-if="icon" :name="icon" :size="16" :stroke="2.4" />
    <slot />
  </button>
</template>

<style lang="scss" scoped src="./AppButton.scss"></style>
