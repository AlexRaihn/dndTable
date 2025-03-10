import type { RouteRecordRaw } from "vue-router";

const privatePages: RouteRecordRaw[] = [
  {
    path: "/private",
    name: "PrivateIndex",
    meta: {
      guest: false,
    },
    redirect: {
      name: "TablePageIndex",
    },
    children: [
      {
        path: "table",
        name: "TablePageIndex",
        component: () =>
          import("@/views/Private/TablePages/TablePageIndex.vue"),
        meta: {
          guest: false,
        },
      },
    ],
  },
];

export default privatePages;
