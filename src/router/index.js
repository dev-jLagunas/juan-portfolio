import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ContactMeView from "@/views/ContactMeView.vue";
import WorksView from "@/views/WorksView.vue";
import AboutView from "@/views/AboutView.vue";
import ProjectDetails from "@/views/ProjectDetailsView.vue";

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
      path: "/works/:id",
      component: ProjectDetails,
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
