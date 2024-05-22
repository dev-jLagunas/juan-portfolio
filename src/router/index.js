import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ContactMeView from "@/views/ContactMeView.vue";
import WorksView from "@/views/WorksView.vue";
import AboutView from "@/views/AboutView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/about",
      component: AboutView,
    },
    {
      path: "/works",
      component: WorksView,
    },
    {
      path: "/contact",
      component: ContactMeView,
    },
    {
      path: "/:pathMatch(.*)",
      redirect: "/",
    },
  ],
});

export default router;
