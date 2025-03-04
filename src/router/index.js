import { createRouter, createWebHistory } from "vue-router";
import About from '@/views/About.vue'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Nutrition from '@/views/Nutrition.vue'
import Profile from "@/views/Profile.vue";
import Register from "@/views/Register.vue";
import Routines from "@/views/Routines.vue";
import Social from "@/views/Social.vue";
import RetrievePassword from "@/views/RetrievePassword.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/login', component: Login },
    { path: '/nutrition', component: Nutrition },
    { path: '/profile', component: Profile },
    { path: '/register', component: Register },
    { path: '/routines', component: Routines },
    { path: '/social', component: Social },
    { path: '/retrieve-password', component: RetrievePassword}
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;