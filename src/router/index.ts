import { createRouter, createWebHashHistory, RouteLocationNormalized, RouteRecordRaw } from 'vue-router'
import routes from './routes';
import { useMainStore } from '@/store/main';
import { useRouterStore } from '@/store/router';

const modules = import.meta.glob('../pages/**/*.vue');

const _createRouter = (routes: RouteRecordRaw[]) => {
  return createRouter({
    history: createWebHashHistory(),
    routes
  });
}

let router = _createRouter(routes);

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

const generateRoutes = (menus: RouteItem[]) => {
  const routes = menus.map((menu: RouteItem) => {
    const route: RouteRecordRaw = {
      path: menu.path,
      name: menu.name,
      meta: menu.meta,
      component: modules[`../${menu.component}`],
      children: []
    }
    if (menu.children) {
      route.children = generateRoutes(menu.children);
    }
    return route;
  });
  return routes;
}

export const initRoutes = async () => {
  await nextTick();
  const mainStore = useMainStore();
  const { menus } = mainStore.permission;
  if (!menus.length) {
    return;
  }
  const routes = menus.map((menu: RouteItem) => {
    const route: RouteRecordRaw = {
      path: menu.path,
      name: menu.name,
      meta: menu.meta,
      component: modules[`../${menu.component}`],
      children: menu.children ? generateRoutes(menu.children) : []
    }
    router.addRoute('Layout', route);
    return route;
  });
  router.addRoute({
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/NotFound.vue')
  });
  router = _createRouter(routes);
  router.options.routes = router.getRoutes();
  return routes;
}

initRoutes();

let _isInitRoute = false;
router.beforeEach(async (to, from, next) => {
  const mainStore = useMainStore();
  if (mainStore.user) {
    if (to.path === '/login') {
      next('/');
    } else {
      addTabRoute(to, from);
      if (_isInitRoute) {
        next();
      } else {
        await nextTick();
        _isInitRoute = true;
        next({ ...to, replace: true });
      }
    }
  } else {
    if (to.path === '/login') {
      next();
    } else {
      next('/login');
    }
  }
});

export default router;
