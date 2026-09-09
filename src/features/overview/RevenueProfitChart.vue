<script setup lang="ts">
/**
 * Dual-axis revenue and dealer-profit chart.
 *
 * Reproduces the prototype's `RevenueProfitChart` (:4277): three KPI tiles, a
 * smoothed two-series line chart with independent left and right axes, and
 * hover readout.
 *
 * Spec: Overview Graph Cards (Dealer Profit and Revenue), Sep 01 2026.
 */
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import TrendDelta from "@/components/common/TrendDelta.vue";
import {
  axisTicks,
  buildRevenueSeries,
  formatMoneyShort,
  percentDelta,
  smoothPath,
  type RevenueScale,
} from "./revenue-series";

const props = defineProps<{ totalRevenue: number; scale: RevenueScale; today: Date }>();

const wrap = ref<HTMLElement | null>(null);
const width = ref(900);
let observer: ResizeObserver | null = null;

onMounted(() => {
  if (!wrap.value) return;
  observer = new ResizeObserver(() => (width.value = wrap.value?.clientWidth || 900));
  observer.observe(wrap.value);
  width.value = wrap.value.clientWidth || 900;
});
onBeforeUnmount(() => observer?.disconnect());

const points = computed(() => buildRevenueSeries(props.totalRevenue, props.scale, props.today));

const geometry = computed(() => {
  const pts = points.value;
  const n = pts.length;
  const rev = axisTicks(Math.max(...pts.map((d) => d.revenue), 1));
  const prof = axisTicks(Math.max(...pts.map((d) => d.profit), 1));

  const X0 = 56;
  const X1 = width.value - 56;
  const Y0 = 16;
  const Y1 = 336;

  const x = (i: number) => X0 + (i * (X1 - X0)) / Math.max(n - 1, 1);
  const yRev = (v: number) => Y1 - (v / rev.max) * (Y1 - Y0);
  const yProf = (v: number) => Y1 - (v / prof.max) * (Y1 - Y0);

  return {
    n,
    X0,
    X1,
    Y0,
    Y1,
    rev,
    prof,
    x,
    yRev,
    yProf,
    dense: n > 12,
    revPath: smoothPath(pts.map((d, i) => [x(i), yRev(d.revenue)] as const)),
    profPath: smoothPath(pts.map((d, i) => [x(i), yProf(d.profit)] as const)),
  };
});

const tiles = computed(() => {
  const pts = points.value;
  const last = pts[pts.length - 1];
  const prev = pts[pts.length - 2] ?? last;
  const marginPts = Math.round((last.margin - prev.margin) * 100);
  return [
    {
      label: `Revenue · ${last.label}`,
      value: formatMoneyShort(last.revenue),
      up: last.revenue >= prev.revenue,
      delta: `${last.revenue >= prev.revenue ? "+" : "-"}${percentDelta(last.revenue, prev.revenue)}%`,
    },
    {
      label: `Dealer Profit · ${last.label}`,
      value: formatMoneyShort(last.profit),
      up: last.profit >= prev.profit,
      delta: `${last.profit >= prev.profit ? "+" : "-"}${percentDelta(last.profit, prev.profit)}%`,
    },
    {
      label: `Margin · ${last.label}`,
      value: `${Math.round(last.margin * 100)}%`,
      up: marginPts >= 0,
      delta: `${marginPts >= 0 ? "+" : ""}${marginPts} pts`,
    },
  ];
});

const hover = ref<number | null>(null);
</script>

<template>
  <div ref="wrap" class="revenue-chart">
    <div class="revenue-chart__tiles">
      <div v-for="tile in tiles" :key="tile.label" class="revenue-chart__tile">
        <p class="revenue-chart__tile-label">{{ tile.label }}</p>
        <p class="revenue-chart__tile-value">{{ tile.value }}</p>
        <TrendDelta :value="tile.delta" :direction="tile.up ? 'up' : 'down'" />
      </div>
    </div>

    <p class="revenue-chart__legend">
      <span class="revenue-chart__key">
        <span class="revenue-chart__dot-key revenue-chart__dot-key--revenue"></span>
        Revenue <span class="revenue-chart__axis-note">(left axis)</span>
      </span>
      <span class="revenue-chart__key">
        <span class="revenue-chart__dot-key revenue-chart__dot-key--profit"></span>
        Dealer Profit <span class="revenue-chart__axis-note">(right axis)</span>
      </span>
    </p>

    <svg
      class="revenue-chart__svg"
      :viewBox="`0 0 ${width} 380`"
      :width="width"
      height="380"
      role="img"
      aria-label="Revenue on the left axis and dealer profit on the right axis, over time"
    >
      <!-- Horizontal gridlines, from the revenue axis. -->
      <g class="revenue-chart__grid">
        <line
          v-for="t in geometry.rev.ticks"
          :key="`g${t}`"
          :x1="geometry.X0"
          :x2="geometry.X1"
          :y1="geometry.yRev(t)"
          :y2="geometry.yRev(t)"
        />
      </g>

      <!-- Left axis: revenue. Right axis: dealer profit. -->
      <g class="revenue-chart__axis">
        <text
          v-for="t in geometry.rev.ticks"
          :key="`lr${t}`"
          :x="geometry.X0 - 10"
          :y="geometry.yRev(t) + 4"
          text-anchor="end"
        >
          {{ formatMoneyShort(t) }}
        </text>
        <text
          v-for="t in geometry.prof.ticks"
          :key="`rp${t}`"
          :x="geometry.X1 + 10"
          :y="geometry.yProf(t) + 4"
          text-anchor="start"
        >
          {{ formatMoneyShort(t) }}
        </text>
      </g>

      <path class="revenue-chart__line revenue-chart__line--revenue" :d="geometry.revPath" />
      <path class="revenue-chart__line revenue-chart__line--profit" :d="geometry.profPath" />

      <!-- Hover targets and x labels. -->
      <g>
        <template v-for="(p, i) in points" :key="p.label">
          <text
            v-if="!geometry.dense || i % 2 === 0"
            class="revenue-chart__x-label"
            :x="geometry.x(i)"
            :y="geometry.Y1 + 26"
            text-anchor="middle"
          >
            {{ p.label }}
          </text>
          <circle
            v-if="hover === i"
            class="revenue-chart__dot revenue-chart__dot--revenue"
            :cx="geometry.x(i)"
            :cy="geometry.yRev(p.revenue)"
            r="4"
          />
          <circle
            v-if="hover === i"
            class="revenue-chart__dot revenue-chart__dot--profit"
            :cx="geometry.x(i)"
            :cy="geometry.yProf(p.profit)"
            r="4"
          />
          <rect
            class="revenue-chart__hit"
            :x="geometry.x(i) - (geometry.X1 - geometry.X0) / (2 * Math.max(geometry.n - 1, 1))"
            :y="geometry.Y0"
            :width="(geometry.X1 - geometry.X0) / Math.max(geometry.n - 1, 1)"
            :height="geometry.Y1 - geometry.Y0"
            @mouseenter="hover = i"
            @mouseleave="hover = null"
          />
        </template>
      </g>
    </svg>

    <p v-if="hover !== null" class="revenue-chart__readout">
      {{ points[hover].label }} · {{ formatMoneyShort(points[hover].revenue) }} revenue ·
      {{ formatMoneyShort(points[hover].profit) }} profit
    </p>
  </div>
</template>

<style lang="scss" scoped src="./RevenueProfitChart.scss"></style>
