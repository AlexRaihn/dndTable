import type { RouteRecordRaw } from "vue-router";

const auth: RouteRecordRaw[] = [
  {
    path: "/auth",
    component: () => import("@/views/Auth/AuthPage.vue"),
    name: "AuthPage",
    redirect: {
      name: "SignIn",
    },
    meta: {
      guest: true,
    },
    children: [
      {
        path: "in",
        name: "SignIn",
        component: () => import("@/views/Auth/SignIn.vue"),
        meta: {
          guest: true,
        },
      },
      {
        path: "up",
        name: "SignUp",
        component: () => import("@/views/Auth/SignUp.vue"),
        meta: {
          guest: true,
        },
      },
    ],
  },
];

export default auth;
