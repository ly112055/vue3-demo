import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import router from "./routes/index.js";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { createPinia } from "pinia";
import piniaPlugins from "./pinia/piniaPlugins";

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPlugins);

app
	.use(router)
	.use(ElementPlus, { siez: "small", zIndex: 2000 })
	.use(pinia)
	.mount("#app");
