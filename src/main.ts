import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import microApp from "@micro-zoe/micro-app";
const piniaInstance = createPinia();
createApp(App).use(piniaInstance).use(router).mount("#micro-app");
microApp.start({});
