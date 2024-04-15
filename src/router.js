import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import ProjectPage from "./pages/ProjectPage.vue";
import ProjectDetailPage from "./pages/ProjectDetailPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/project",
      name: "project",
      component: ProjectPage,
    },
    {
      path: "/project/:id",
      name: "project.detail",
      component: ProjectDetailPage,
    },
  ],
});
export { router };
