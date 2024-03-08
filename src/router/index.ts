import {
  createRouter,
  RouteRecordRaw,
  Router,
  createWebHistory,
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/HomePage.vue"),
    meta: {
      title: "首页",
    },
  },
  {
    path: "/notesChild",
    name: "notesChild",
    component: () => import("@/components/MicroChildApp.vue"),
    meta: {
      title: "sf-notes",
      url: "http://localhost:8000/notes",
      defaultPage: "/qrCode",
    },
  },
  {
    path: "/vue3Child",
    name: "vue3Child",
    component: () => import("@/components/MicroChildApp.vue"),
    meta: {
      title: "sf-vue3",
      url: "http://localhost:5173",
    },
  },
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
