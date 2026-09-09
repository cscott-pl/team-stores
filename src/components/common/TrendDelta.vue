<script setup lang="ts">
/**
 * Signed month-over-month delta with a direction arrow.
 *
 * Spec — KPI Summary Cards: "a signed month-over-month delta with an up/down
 * arrow colored green for up and red for down."
 *
 * Colour is not the only carrier of meaning (CLAUDE.md): the arrow shape and
 * the visually-hidden direction word both convey it independently.
 */
import { computed } from "vue";
import AppIcon from "./AppIcon.vue";

const props = withDefaults(defineProps<{ value: string | number; direction?: "up" | "down" }>(), {
  direction: "up",
});

const isUp = computed(() => props.direction === "up");
</script>

<template>
  <span class="trend-delta" :class="`trend-delta--${direction}`">
    <AppIcon :name="isUp ? 'trend-up' : 'trend-down'" :size="15" />
    <span class="trend-delta__sr">{{ isUp ? "Up" : "Down" }}</span>
    {{ value }}
  </span>
</template>

<style lang="scss" scoped src="./TrendDelta.scss"></style>
