<script setup lang="ts">
/**
 * Active Ordering Windows monitor.
 *
 * Spec: Active Ordering Windows Monitor (Jun 22, 2026) — "per-store progress
 * rows showing days-left (flagged urgent under 7 days), amount raised, and a
 * progress bar."
 *
 * NOTE — the spec's "flagged urgent under 7 days" is NOT in the prototype: it
 * renders the raised amount and the window dates, with no urgency treatment and
 * no days-left figure on the row. Prototype wins on appearance; logged rather
 * than added. See docs/divergences.md DIV-016.
 */
import AppIcon from "@/components/common/AppIcon.vue";
import ProgressBar from "@/components/common/ProgressBar.vue";
import TeamAvatar from "@/components/common/TeamAvatar.vue";
import { formatMoney, formatWindowDate, type OrderingWindow } from "./overview-metrics";

defineProps<{ windows: OrderingWindow[] }>();
</script>

<template>
  <div>
    <ul v-if="windows.length" class="ordering-windows">
      <li v-for="w in windows" :key="w.id" class="ordering-windows__row">
        <div class="ordering-windows__head">
          <TeamAvatar :mono="w.mono" :color="w.color" />
          <div class="ordering-windows__names">
            <p class="ordering-windows__name">{{ w.name }}</p>
            <p class="ordering-windows__span">{{ w.dayCount }} day window</p>
          </div>
          <span class="ordering-windows__raised">{{ formatMoney(w.raised) }} raised</span>
        </div>
        <ProgressBar
          :value="w.pct"
          fill="var(--window-progress)"
          :height="8"
          :label="`${w.name} ordering window elapsed`"
        />
        <div class="ordering-windows__dates">
          <span>{{ formatWindowDate(w.startDate) }}</span>
          <span>{{ formatWindowDate(w.endDate) }}</span>
        </div>
      </li>
    </ul>
    <p v-else class="ordering-windows__empty">No open windows.</p>

    <p class="ordering-windows__foot">
      <AppIcon name="clock" :size="14" />
      {{ windows.length }} window{{ windows.length === 1 ? "" : "s" }} open now
    </p>
  </div>
</template>

<style lang="scss" scoped src="./ActiveOrderingWindows.scss"></style>
