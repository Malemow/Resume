import { createRouter, createWebHistory } from "vue-router"
import HomeView from "@/views/HomeView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/about",
            name: "about",
            component: () => import("@/views/AboutView.vue"),
        },
        {
            name: "error",
            path: "/:code?",
            component: () => import("@/views/ErrorView.vue"),
            props: true,
        },
    ],
})

export default router
