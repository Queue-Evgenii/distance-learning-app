import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () =>
      import(/* webpackChunkName: "not-found" */ "@/views/NotFoundView.vue"),
  },
  {
    path: "/home",
    name: "home",
    meta: { layout: true },
    component: () =>
      import(/* webpackChunkName: "home" */ "@/views/HomeView.vue"),
  },
  {
    path: "/auth",
    name: "auth",
    component: () =>
      import(/* webpackChunkName: "auth" */ "@/views/AuthView.vue"),
  },
  {
    path: "/my",
    meta: { layout: true },
    children: [
      {
        path: "courses",
        component: () =>
          import(/* webpackChunkName: "courses" */ "@/views/CoursesView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
