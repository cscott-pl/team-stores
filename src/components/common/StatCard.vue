<script setup lang="ts">
/**
 * KPI card. Spec — KPI Summary Cards (Jun 22, 2026): "an icon, a label, a large
 * figure, and (where applicable) a signed month-over-month delta".
 *
 * Interactive variant renders a real <button> rather than a div with a click
 * handler, which is what the prototype uses (`:4162`, `role="button"` on a div).
 * Authorised deviation — DIV-007. Default button appearance is neutralised in
 * the sibling SCSS so it is visually identical.
 */
import AppIcon from "./AppIcon.vue";
import TrendDelta from "./TrendDelta.vue";
import type { IconName } from "./icons";

withDefaults(
  defineProps<{
    label: string;
    value: string;
    icon: IconName;
    delta?: string;
    deltaDirection?: "up" | "down";
    sub?: string;
    /** Present = the card is a control. */
    href?: string;
  }>(),
  { delta: undefined, deltaDirection: "up", sub: undefined, href: undefined },
);

defineEmits<{ activate: [] }>();
</script>

<template>
  <component
    :is="href ? 'button' : 'div'"
    class="stat-card"
    :class="{ 'stat-card--interactive': href }"
    :type="href ? 'button' : undefined"
    @click="href && $emit('activate')"
  >
    <span class="stat-card__head">
      <span class="stat-card__label">
        {{ label }}
        <AppIcon v-if="href" name="chevron-right" :size="13" class="stat-card__cue" />
      </span>
      <span class="stat-card__icon"><AppIcon :name="icon" :size="18" /></span>
    </span>

    <span class="stat-card__value">{{ value }}</span>

    <span class="stat-card__foot">
      <TrendDelta v-if="delta" :value="delta" :direction="deltaDirection" />
      <span v-if="sub" class="stat-card__sub">{{ sub }}</span>
    </span>
  </component>
</template>

<style lang="scss" scoped src="./StatCard.scss"></style>
