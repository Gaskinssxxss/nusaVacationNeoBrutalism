import { createApp } from "vue";
import App from "./App.vue";

import router from "./services/router";
import store from "./services/store";

import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import './style.css'

import rate from 'vue-rate'
import 'vue-rate/dist/vue-rate.css'

import VueNumberInput from '@chenfengyuan/vue-number-input';

import VueWriter from "vue-writer";

createApp(App)
    .use(router)
    .use(VueToast)
    .use(store)
    .use(rate)
    .use(VueWriter)
    .component(VueNumberInput.name, VueNumberInput)
    .mount("#app");
