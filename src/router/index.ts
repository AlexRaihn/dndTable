import { createRouter, createWebHistory, type RouteRecord } from "vue-router";
import auth from "./auth";
import publicPages from "./publicPages";
import privatePages from "./PrivatePages/privatePages";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...publicPages, ...auth, ...privatePages],
});

router.beforeEach((to) => {
  if (to.meta.guest) return true;

  if (localStorage.getItem("token")) return true;

  return { name: "SignIn" };
});

export default router;
