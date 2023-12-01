import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Albums from './components/Albums.vue'
import Photos from './components/Photos.vue'
import { createWebHistory, createRouter } from "vue-router";

const routes = [
    { path: '/photos', component: Photos },
    { path: '/albums', component: Albums },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
  });
createApp(App).use(router).mount('#app')
