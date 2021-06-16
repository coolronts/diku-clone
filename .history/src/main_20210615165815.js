import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router/index";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

createApp(App).use(router).mount("#app");