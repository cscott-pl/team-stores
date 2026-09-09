<script setup lang="ts">
/**
 * Segmented control. The Overview's Day / Month / Year revenue scale; the same
 * treatment recurs across the dashboard.
 *
 * Rendered as a radiogroup rather than plain buttons — it is a single-choice
 * control, and that is what a screen reader needs to hear. Appearance is
 * unchanged.
 */
defineProps<{
  options: readonly { key: string; label: string }[];
  modelValue: string;
  /** Accessible name for the group. */
  label: string;
}>();

defineEmits<{ "update:modelValue": [value: string] }>();
</script>

<template>
  <div class="segmented-toggle" role="radiogroup" :aria-label="label">
    <button
      v-for="option in options"
      :key="option.key"
      type="button"
      role="radio"
      :aria-checked="modelValue === option.key"
      class="segmented-toggle__option"
      :class="{ 'segmented-toggle__option--active': modelValue === option.key }"
      @click="$emit('update:modelValue', option.key)"
    >
      {{ option.label }}
    </button>
  </div>
</template>

<style lang="scss" scoped src="./SegmentedToggle.scss"></style>
