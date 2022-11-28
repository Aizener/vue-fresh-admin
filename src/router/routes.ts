import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/layout',
    redirect: '/',
    component: () => import('@/pages/layout/Layout.vue'),
    children: [
      {
        path: '/',
        component: () => import('@/pages/Home.vue')
      }
    ]
  }
];

export default routes;
