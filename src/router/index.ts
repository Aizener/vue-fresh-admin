import { createRouter, createWebHashHistory, RouteLocationNormalized } from 'vue-router'
import routes from './routes';
import { useRouterStore } from '@/store/router';

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

const addTabRoute = (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
  const routerStore = useRouterStore();
  routerStore.updateValue('currentRoute', to);
  const { matched } = to;
  if (!(matched.length > 1 && matched[0].path === '/layout')) {
    return;
  }
  const _routes: TabRoute[] = [...routerStore.routes];
  const idx = _routes.findIndex(item => item.path === to.path);
  if (idx > -1) {
    _routes.splice(idx, 1);
  }
  _routes.push({ name: (to.meta ? to.meta.title : to.name) as string, path: to.path });
  routerStore.updateValue('routes', _routes);
}

router.beforeEach((to, from, next) => {
  addTabRoute(to, from);
  next();
});

export default router;
