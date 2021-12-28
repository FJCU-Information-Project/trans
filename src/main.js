import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/css/reset.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import axios from "axios";
import VueAxios from "vue-axios";

createApp(App)
  .use(ElementPlus)
  .use(store)
  .use(router)
  .use(VueAxios, axios)
  .mount("#app");