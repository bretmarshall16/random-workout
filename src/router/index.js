import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";
import AutoCompleteCaller from "../components/AutoCompleteCaller";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/test",
    name: "test",
    component: AutoCompleteCaller,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
