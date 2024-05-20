import { createRouter, createWebHistory } from "vue-router";
import AboutMeView from "@/views/AboutMeView.vue";
import ContactMeView from "@/views/ContactMeView.vue";
import WorksView from "@/views/WorksView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: AboutMeView,
    },
    {
      path: "/works",
      component: WorksView,
    },
    {
      path: "/contact",
      component: ContactMeView,
    },
  ],
});

export default router;
