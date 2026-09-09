<script setup lang="ts">
/**
 * Round monogram avatar carrying a store's primary team colour.
 *
 * High fan-in: the prototype repeats this inline in the ordering-window rows,
 * Roster Bank rows, the Top Performing Stores leaderboard and the frequently-
 * visited shelf. One component, four call sites.
 *
 * The colour is data, not a token — it is the store's own team colour — so it
 * arrives as a prop and is bound rather than written into SCSS.
 */
withDefaults(defineProps<{ mono: string; color: string; size?: number }>(), { size: 32 });
</script>

<template>
  <span
    class="team-avatar"
    :style="{
      '--team-avatar-size': `${size}px`,
      '--team-avatar-color': color,
    }"
    aria-hidden="true"
    >{{ mono }}</span
  >
</template>

<style lang="scss" scoped src="./TeamAvatar.scss"></style>
