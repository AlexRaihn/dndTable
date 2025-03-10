import type { RouteRecordRaw } from "vue-router";

const publicPages: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/Public/HomeView.vue'),
        meta: {
          guest: true
        }
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('@/views/Public/AboutView.vue'),
        meta: {
          guest: true
        }
      },
]

export default publicPages