import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import { router } from "./router";
import { loadRuntimeConfig } from "./config/runtime-config";

import "./styles/global.scss";

const app = createApp(App);

// Brand/tenant identity is resolved at runtime, never at build time.
app.provide("runtimeConfig", loadRuntimeConfig());

app.use(createPinia());
app.use(router);
app.mount("#app");
