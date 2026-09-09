<script setup lang="ts">
/**
 * Roster Bank rollup — proposed players waiting per store.
 *
 * Spec: Roster-Optional Architecture (Aug 31, 2026), Epic C — checkout captures
 * land in a staging Bank, pre-grouped into proposed players, committed to a
 * roster in one click. This panel is the Overview's cross-store rollup; the
 * commit surfaces live on the My Team(s) tab.
 *
 * Consent gating for those captures is BUILD-BLOCKING per that spec, pending
 * legal review — the prototype shows the rollup regardless, and so do we.
 */
import AppIcon from "@/components/common/AppIcon.vue";
import TeamAvatar from "@/components/common/TeamAvatar.vue";
import type { BankRow } from "./overview-metrics";

const props = defineProps<{ rows: BankRow[] }>();
defineEmits<{ review: [storeId: string] }>();

const total = props.rows.reduce((n, b) => n + b.proposed, 0);
</script>

<template>
  <div>
    <ul v-if="rows.length" class="roster-bank">
      <li v-for="row in rows" :key="row.id" class="roster-bank__row">
        <TeamAvatar :mono="row.mono" :color="row.color" />
        <span class="roster-bank__names">
          <span class="roster-bank__name">{{ row.name }}</span>
          <span class="roster-bank__team">
            {{ row.team }} · {{ row.captures }} capture{{ row.captures === 1 ? "" : "s" }}
          </span>
        </span>
        <span class="roster-bank__badge">
          <AppIcon name="bank-inbox" :size="12" />
          {{ row.proposed }} proposed
        </span>
        <button type="button" class="roster-bank__review" @click="$emit('review', row.id)">
          Review
        </button>
      </li>
    </ul>
    <p v-else class="roster-bank__empty">
      No captures waiting — team-gear orders with roster opt-in land here.
    </p>

    <p class="roster-bank__foot">
      <AppIcon name="bank-inbox" :size="14" />
      {{ total }} proposed player{{ total === 1 ? "" : "s" }} across {{ rows.length }} store{{
        rows.length === 1 ? "" : "s"
      }}
      — commit them in My Teams
    </p>
  </div>
</template>

<style lang="scss" scoped src="./RosterBankPanel.scss"></style>
