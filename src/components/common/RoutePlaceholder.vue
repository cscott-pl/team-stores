<script setup lang="ts">
/**
 * Temporary stand-in for every route until its screen is converted.
 *
 * It exists so the route table is navigable and reviewable before any screen
 * work starts — the structure from docs/architecture/workspace-screen-inventory.md
 * made real. Each screen replaces its placeholder one at a time.
 *
 * Delete this component when the last route has a real page.
 */
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const meta = computed(() => ({
  title: (route.meta.title as string) ?? String(route.name ?? "Unnamed route"),
  screen: route.meta.screen as string | undefined,
  spec: route.meta.spec as string | undefined,
  note: route.meta.note as string | undefined,
}));

const params = computed(() => Object.entries(route.params));

/** Every named route, for click-through verification of the table. */
const allRoutes = computed(() =>
  router
    .getRoutes()
    .filter((r) => r.name && !r.path.includes(":") && r.path !== "/:pathMatch(.*)*")
    .map((r) => ({ name: String(r.name), path: r.path }))
    .sort((a, b) => a.path.localeCompare(b.path)),
);
</script>

<template>
  <main class="route-placeholder">
    <p class="route-placeholder__eyebrow">Not yet converted</p>
    <h1 class="route-placeholder__title">{{ meta.title }}</h1>

    <dl class="route-placeholder__meta">
      <div class="route-placeholder__row">
        <dt>Path</dt>
        <dd><code>{{ route.path }}</code></dd>
      </div>
      <div class="route-placeholder__row">
        <dt>Route name</dt>
        <dd><code>{{ String(route.name) }}</code></dd>
      </div>
      <div v-if="meta.screen" class="route-placeholder__row">
        <dt>Prototype screen</dt>
        <dd><code>{{ meta.screen }}</code></dd>
      </div>
      <div v-if="meta.spec" class="route-placeholder__row">
        <dt>Spec</dt>
        <dd>{{ meta.spec }}</dd>
      </div>
      <div v-for="[key, value] in params" :key="key" class="route-placeholder__row">
        <dt>{{ key }}</dt>
        <dd><code>{{ value }}</code></dd>
      </div>
    </dl>

    <p v-if="meta.note" class="route-placeholder__note">{{ meta.note }}</p>

    <nav class="route-placeholder__nav" aria-label="All routes">
      <h2 class="route-placeholder__nav-title">Route table</h2>
      <ul class="route-placeholder__list">
        <li v-for="r in allRoutes" :key="r.name">
          <RouterLink :to="r.path">{{ r.path }}</RouterLink>
        </li>
      </ul>
    </nav>
  </main>
</template>

<style lang="scss" scoped src="./RoutePlaceholder.scss"></style>
