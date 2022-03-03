import { createRouter, createWebHistory } from "vue-router";
import store from "../store";

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("../views/LoginView.vue"),
    meta: { libre: true },
  },
  {
    path: "/productos",
    name: "Productos",
    component: () => import("../views/ProductosView.vue"),
    meta: { acceso: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(store.state);
  window.scrollTo(0, 0);
  if (to.matched.some((record) => record.meta.libre)) {
    next();
  } else {
    if (to.matched.some((record) => record.meta.acceso)) {
      if (store.state.token) {
        next();
      }
    } else {
      next({
        name: "Login",
      });
    }
  }
});

export default router;
