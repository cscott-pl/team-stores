<script setup lang="ts">
/**
 * Top Performing Stores leaderboard.
 *
 * Spec: Top Performing Stores Leaderboard (Jun 22, 2026) — "a ranked table
 * (Store · Orders · Revenue · Trend) with per-row navigation directly into the
 * store management workspace and an 'All stores →' shortcut."
 *
 * Rendered as a real <table> with sortable column headers. The prototype uses
 * a CSS grid of <button> rows (:4952) — same appearance, but a table is what a
 * screen reader needs for tabular data and gives the sort state somewhere
 * correct to live (`aria-sort`). Authorised deviation — DIV-007.
 */
import { computed, ref } from "vue";
import AppIcon from "@/components/common/AppIcon.vue";
import ProgressBar from "@/components/common/ProgressBar.vue";
import TeamAvatar from "@/components/common/TeamAvatar.vue";
import TrendDelta from "@/components/common/TrendDelta.vue";
import { formatMoney, sortTopStores, type TopSortKey, type TopStoreRow } from "./overview-metrics";

const props = defineProps<{ rows: TopStoreRow[] }>();
const emit = defineEmits<{ open: [storeId: string] }>();

const columns: { key: TopSortKey; label: string; align: "start" | "end" }[] = [
  { key: "name", label: "Store", align: "start" },
  { key: "created", label: "Store Created", align: "start" },
  { key: "orders", label: "Orders", align: "end" },
  { key: "revenue", label: "Revenue", align: "end" },
  { key: "aov", label: "Avg. Order Value", align: "end" },
  { key: "pctOfTotal", label: "% of Total Rev.", align: "end" },
  { key: "completion", label: "Completion", align: "end" },
  { key: "trend", label: "Trend", align: "end" },
];

const sort = ref<{ key: TopSortKey; dir: "asc" | "desc" }>({ key: "revenue", dir: "desc" });

function toggle(key: TopSortKey) {
  sort.value =
    sort.value.key === key
      ? { key, dir: sort.value.dir === "desc" ? "asc" : "desc" }
      : { key, dir: "desc" };
}

const sorted = computed(() => sortTopStores(props.rows, sort.value.key, sort.value.dir));

function ariaSort(key: TopSortKey) {
  if (sort.value.key !== key) return "none";
  return sort.value.dir === "desc" ? "descending" : "ascending";
}
</script>

<template>
  <table class="top-stores">
    <caption class="top-stores__caption">
      Stores ranked by revenue, with orders, average order value and roster completion.
    </caption>
    <thead>
      <tr>
        <th
          v-for="col in columns"
          :key="col.key"
          scope="col"
          :aria-sort="ariaSort(col.key)"
          :class="[`top-stores__th--${col.align}`]"
        >
          <button
            type="button"
            class="top-stores__sort"
            :class="{ 'top-stores__sort--active': sort.key === col.key }"
            @click="toggle(col.key)"
          >
            <span>{{ col.label }}</span>
            <AppIcon
              :name="
                sort.key === col.key
                  ? sort.dir === 'desc'
                    ? 'sort-desc'
                    : 'sort-asc'
                  : 'sort-none'
              "
              :size="12"
              :stroke="2.5"
            />
          </button>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in sorted" :key="row.id" class="top-stores__row">
        <th scope="row" class="top-stores__store">
          <button type="button" class="top-stores__open" @click="emit('open', row.id)">
            <TeamAvatar :mono="row.mono" :color="row.color" />
            <span class="top-stores__names">
              <span class="top-stores__name">{{ row.name }}</span>
              <span class="top-stores__sport">{{ row.sport }}</span>
            </span>
          </button>
        </th>
        <td class="top-stores__mono">{{ row.created }}</td>
        <td class="top-stores__mono top-stores__td--end">{{ row.orders }}</td>
        <td class="top-stores__mono top-stores__td--end top-stores__td--strong">
          {{ formatMoney(row.revenue) }}
        </td>
        <td class="top-stores__mono top-stores__td--end">{{ formatMoney(row.aov) }}</td>
        <td class="top-stores__td--end">
          <span class="top-stores__metric">
            <span class="top-stores__mono">{{ row.pctOfTotal.toFixed(1) }}%</span>
            <ProgressBar :value="row.pctOfTotal" fill="var(--ink)" :label="`${row.name} share of total revenue`" />
          </span>
        </td>
        <td class="top-stores__td--end">
          <span class="top-stores__metric">
            <span class="top-stores__mono">
              {{ row.completion }}%
              <span class="top-stores__ratio">· {{ row.rosterOrdered }}/{{ row.rosterSize }}</span>
            </span>
            <ProgressBar
              :value="row.completion"
              :fill="row.completion >= 80 ? 'var(--green-600)' : 'var(--amber-600)'"
              :label="`${row.name} roster completion`"
            />
          </span>
        </td>
        <td class="top-stores__td--end">
          <TrendDelta :value="`${Math.abs(row.trend)}%`" :direction="row.trend >= 0 ? 'up' : 'down'" />
        </td>
      </tr>
      <tr v-if="!sorted.length">
        <td :colspan="columns.length" class="top-stores__empty">No stores yet.</td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped src="./TopPerformingStores.scss"></style>
