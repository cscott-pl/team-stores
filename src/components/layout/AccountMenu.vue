<script setup lang="ts">
/**
 * Header account menu.
 *
 * Spec — Team Stores Workspace (Sep 01, 2026), Epic D:
 *  · exactly My Account, Customizer, Orders, Workspace Settings, Logout, in
 *    that order — verified against the prototype, which matches exactly
 *  · click OPENS, it does not navigate
 *  · hover also opens
 *  · outside click, Escape, or focus leaving closes it with no navigation
 *  · "Non-pointer equivalents… hover is an additional affordance, never the
 *    only one. Keyboard focus order, Escape handling, and the touch equivalent
 *    of hover are owned here."
 *
 * That last clause is why this component adds arrow-key navigation the
 * prototype does not have: the spec assigns keyboard operability to this
 * surface, and CLAUDE.md requires it. Invisible to a pointer user.
 *
 * Customizer opens in a new tab (the rep's primary brand); everything else
 * navigates in-app.
 */
import { nextTick, onBeforeUnmount, ref } from "vue";
import AppIcon from "@/components/common/AppIcon.vue";
import type { IconName } from "@/components/common/icons";

defineProps<{ name: string }>();
const emit = defineEmits<{ select: [id: MenuItemId] }>();

type MenuItemId = "account" | "customizer" | "orders" | "wsettings" | "logout";

const items: { id: MenuItemId; label: string; icon: IconName }[] = [
  { id: "account", label: "My Account", icon: "user" },
  { id: "customizer", label: "Customizer", icon: "store" },
  { id: "orders", label: "Orders", icon: "bag" },
  { id: "wsettings", label: "Workspace Settings", icon: "settings" },
  { id: "logout", label: "Logout", icon: "logout" },
];

const open = ref(false);
const root = ref<HTMLElement | null>(null);
const trigger = ref<HTMLButtonElement | null>(null);
const itemRefs = ref<HTMLButtonElement[]>([]);
let closeTimer: ReturnType<typeof setTimeout> | undefined;

function openMenu() {
  clearTimeout(closeTimer);
  open.value = true;
}
function closeMenu(refocus = false) {
  clearTimeout(closeTimer);
  open.value = false;
  if (refocus) trigger.value?.focus();
}
/** Hover-out has the prototype's 120ms grace so the pointer can cross the gap. */
function scheduleClose() {
  clearTimeout(closeTimer);
  closeTimer = setTimeout(() => (open.value = false), 120);
}

function onFocusOut(event: FocusEvent) {
  if (!root.value?.contains(event.relatedTarget as Node | null)) closeMenu();
}

async function focusItem(index: number) {
  openMenu();
  await nextTick();
  const list = itemRefs.value.filter(Boolean);
  if (list.length) list[(index + list.length) % list.length]?.focus();
}

function onTriggerKey(event: KeyboardEvent) {
  if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    void focusItem(0);
  } else if (event.key === "ArrowUp") {
    event.preventDefault();
    void focusItem(-1);
  }
}

function onItemKey(event: KeyboardEvent, index: number) {
  if (event.key === "ArrowDown") {
    event.preventDefault();
    void focusItem(index + 1);
  } else if (event.key === "ArrowUp") {
    event.preventDefault();
    void focusItem(index - 1);
  } else if (event.key === "Escape") {
    event.preventDefault();
    closeMenu(true);
  } else if (event.key === "Home") {
    event.preventDefault();
    void focusItem(0);
  } else if (event.key === "End") {
    event.preventDefault();
    void focusItem(-1);
  }
}

function pick(id: MenuItemId) {
  closeMenu();
  emit("select", id);
}

onBeforeUnmount(() => clearTimeout(closeTimer));
</script>

<template>
  <div
    ref="root"
    class="account-menu"
    @mouseenter="openMenu"
    @mouseleave="scheduleClose"
    @focusout="onFocusOut"
    @keydown.esc="closeMenu(true)"
  >
    <button
      ref="trigger"
      type="button"
      class="account-menu__trigger"
      aria-haspopup="menu"
      :aria-expanded="open"
      @click="open ? closeMenu() : openMenu()"
      @keydown="onTriggerKey"
    >
      <span class="account-menu__name">{{ name || "MY ACCOUNT" }}</span>
      <AppIcon name="user" :size="22" :stroke="1.7" />
    </button>

    <Transition name="account-menu">
      <div v-if="open" class="account-menu__list" role="menu" aria-label="Account">
        <button
          v-for="(item, i) in items"
          :key="item.id"
          ref="itemRefs"
          type="button"
          role="menuitem"
          class="account-menu__item"
          @click="pick(item.id)"
          @keydown="onItemKey($event, i)"
        >
          <AppIcon :name="item.icon" :size="19" :stroke="1.8" />
          <span>{{ item.label }}</span>
        </button>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped src="./AccountMenu.scss"></style>
