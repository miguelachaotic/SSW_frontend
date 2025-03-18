import {createApp, ref} from 'vue'
import App from './App.vue'
import router from "@/router/index.js";


const app = createApp(App);

app.provide('authenticated', ref(false));

app.use(router);
app.mount('#app');
