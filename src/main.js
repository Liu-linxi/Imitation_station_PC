import { createApp } from 'vue'
// 引入 Normalize.css
import 'normalize.css'
import '@/assets/css/reset.css'

import router from "./router";
import pinia from "./store";
import App from './App.vue'


const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount("#app");