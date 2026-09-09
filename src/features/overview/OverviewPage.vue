<script setup lang="ts">
/**
 * Overview — the rep's landing screen.
 *
 * Prototype: `OverviewDashboard` (`reference/workspace-app.jsx:4640`).
 * Specs: Analytics Dashboard (Overview Tab) and its children — KPI Summary
 * Cards, Overview Graph Cards, Top Performing Stores Leaderboard, Active
 * Ordering Windows Monitor. All read 2026-09-09.
 *
 * Not yet built, tracked as follow-ups within this screen: the Frequently
 * Visited shelf, the store-scope multi-select, and the zero-state variant
 * (`isEmpty`, which the Tweaks default never reaches — see tweaks-defaults.md).
 */
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

import AppButton from "@/components/common/AppButton.vue";
import AppIcon from "@/components/common/AppIcon.vue";
import AppPanel from "@/components/common/AppPanel.vue";
import SegmentedToggle from "@/components/common/SegmentedToggle.vue";
import StatCard from "@/components/common/StatCard.vue";

import { getToday, listStores } from "@/services/stores-service";
import type { Store } from "@/types/store";

import ActiveOrderingWindows from "./ActiveOrderingWindows.vue";
import RevenueProfitChart from "./RevenueProfitChart.vue";
import RosterBankPanel from "./RosterBankPanel.vue";
import TopPerformingStores from "./TopPerformingStores.vue";
import {
  deriveBankRows,
  deriveKpis,
  deriveOrderingWindows,
  deriveTopStores,
  formatMoney,
  scopeStores,
} from "./overview-metrics";
import type { RevenueScale } from "./revenue-series";

const router = useRouter();

const stores = ref<Store[]>([]);
// Two different "now"s, because the prototype uses two. The ordering windows
// are measured against a pinned date so the seeded countdowns are stable
// (`workspace-app.jsx:4658`); the revenue series reads the real clock
// (`:4245`), so its trailing-12-months axis ends on the actual current month.
// Reproduced rather than harmonised — the drift is the prototype's own, and
// OQ-P17 already excludes figures from fidelity comparison.
const windowToday = ref(new Date());
const chartToday = new Date();
// Empty scope = all stores, matching the prototype's default (`:4648`).
const scope = ref<Set<string>>(new Set());
const search = ref("");
const moneyScale = ref<RevenueScale>("month");

// Resolves immediately from frozen fixtures, so no loading state renders.
// The design specifies none — OQ-P13.
onMounted(async () => {
  const [loaded, pinned] = await Promise.all([listStores(), getToday()]);
  stores.value = loaded;
  windowToday.value = pinned;
});

const scoped = computed(() => scopeStores(stores.value, scope.value));
const kpis = computed(() => deriveKpis(scoped.value));
const windows = computed(() => deriveOrderingWindows(scoped.value, windowToday.value));
const bankRows = computed(() => deriveBankRows(scoped.value));
const topStores = computed(() => deriveTopStores(scoped.value, kpis.value.totalRevenue));

const summaryCaption = computed(() =>
  scope.value.size
    ? `Performance across ${scope.value.size} selected store${scope.value.size > 1 ? "s" : ""}`
    : `Performance across ${stores.value.length} stores`,
);

const scaleOptions = [
  { key: "day", label: "Day" },
  { key: "month", label: "Month" },
  { key: "year", label: "Year" },
] as const;

function openStore(storeId: string) {
  router.push({ name: "store-home", params: { storeId } });
}
function openRoster(storeId: string) {
  router.push({ name: "store-roster", params: { storeId } });
}
</script>

<template>
  <main class="overview">
    <header class="overview__header">
      <div>
        <h1 class="overview__title">Overview</h1>
        <p class="overview__lede">
          Your stores at a glance: activity, performance, and what needs attention.
        </p>
      </div>
      <div class="overview__actions">
        <AppButton icon="plus" @click="router.push({ name: 'store-create' })">Add Store</AppButton>
        <div class="overview__search">
          <label class="overview__search-label" for="overview-search">Search Team Stores</label>
          <input
            id="overview-search"
            v-model="search"
            class="overview__search-input"
            type="search"
            placeholder="Search Team Stores"
          />
          <AppIcon name="search" :size="16" class="overview__search-icon" />
        </div>
      </div>
    </header>

    <div class="overview__summary-head">
      <h2 class="overview__section-label">Performance summary</h2>
      <p class="overview__summary-caption">{{ summaryCaption }}</p>
    </div>

    <div class="overview__kpis">
      <StatCard
        label="Total Revenue"
        :value="formatMoney(kpis.totalRevenue)"
        icon="dollar"
        delta="12.4%"
        delta-direction="up"
        sub="vs last month"
      />
      <StatCard
        label="Orders"
        :value="kpis.orders.toLocaleString()"
        icon="receipt"
        delta="8.1%"
        delta-direction="up"
        sub="vs last month"
        href="orders"
        @activate="router.push({ name: 'all-stores-orders' })"
      />
      <StatCard
        label="Active Stores"
        :value="String(kpis.liveCount)"
        icon="store"
        :sub="`${stores.length} total`"
      />
      <StatCard
        label="Avg. Order Value"
        :value="formatMoney(kpis.aov)"
        icon="wallet"
        delta="3.2%"
        delta-direction="down"
        sub="vs last month"
      />
    </div>

    <div class="overview__panels">
      <AppPanel
        title="Revenue & Dealer Profit"
        subtitle="Gross revenue across all stores vs. dealer profit — revenue minus manufacturing cost (COGS), platform fee, sales tax, and team fundraising."
      >
        <template #actions>
          <SegmentedToggle
            v-model="moneyScale"
            :options="scaleOptions"
            label="Revenue time scale"
          />
        </template>
        <RevenueProfitChart
          :total-revenue="kpis.totalRevenue"
          :scale="moneyScale"
          :today="chartToday"
        />
      </AppPanel>

      <AppPanel title="Top Performing Stores">
        <template #actions>
          <AppButton variant="ghost" size="sm" @click="router.push({ name: 'stores' })">
            All stores →
          </AppButton>
        </template>
        <TopPerformingStores :rows="topStores" @open="openStore" />
      </AppPanel>

      <AppPanel title="Active Ordering Windows">
        <ActiveOrderingWindows :windows="windows" />
      </AppPanel>

      <AppPanel title="Roster Bank" subtitle="Checkout captures awaiting roster review">
        <RosterBankPanel :rows="bankRows" @review="openRoster" />
      </AppPanel>
    </div>
  </main>
</template>

<style lang="scss" scoped src="./OverviewPage.scss"></style>
