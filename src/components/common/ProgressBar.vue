<script setup lang="ts">
/**
 * Thin progress track. Used by the ordering-window rows and twice per row in
 * the Top Performing Stores leaderboard.
 *
 * A real <progress> would be semantically ideal but carries heavy, barely
 * overridable UA styling; CLAUDE.md's rule is to neutralise a correct element
 * in SCSS rather than avoid it, but here the element cannot be made to match
 * without recreating it entirely. Using role="progressbar" instead gives the
 * same accessible semantics with no appearance to fight.
 */
withDefaults(
  defineProps<{
    /** 0–100. Clamped on render. */
    value: number;
    /** Bar colour token, e.g. var(--green-600). Track stays neutral. */
    fill?: string;
    height?: number;
    label?: string;
  }>(),
  { fill: "var(--ink)", height: 4, label: undefined },
);
</script>

<template>
  <span
    class="progress-bar"
    :style="{ '--progress-height': `${height}px`, '--progress-fill': fill }"
    role="progressbar"
    :aria-valuenow="Math.round(value)"
    aria-valuemin="0"
    aria-valuemax="100"
    :aria-label="label"
  >
    <span class="progress-bar__fill" :style="{ width: `${Math.min(Math.max(value, 0), 100)}%` }" />
  </span>
</template>

<style lang="scss" scoped src="./ProgressBar.scss"></style>
