import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Albums from './components/Albums.vue'
import Photos from './components/Photos.vue'
import Users from './components/Users.vue'
import { createWebHistory, createRouter } from "vue-router";

const routes = [
    { path: '/photos', component: Photos },
    { path: '/albums', component: Albums },
    { path: '/users', component: Users },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
  });
createApp(App).use(router).mount('#app')
