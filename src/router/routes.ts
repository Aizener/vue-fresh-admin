import { RouteRecordRaw } from 'vue-router';
import layoutRoutes from './layoutRoutes';

const routes: RouteRecordRaw[] = [
  {
    path: '/layout',
    name: 'Layout',
    redirect: '/',
    component: () => import('@/pages/layout/Layout.vue'),
    children: layoutRoutes
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/Login.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/NotFound.vue')
  }
];

export default routes;
