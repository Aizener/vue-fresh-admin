import { initRoutes } from '@/router';
import { defineStore } from 'pinia';

const baseMenu: RouteItem[] = [
  {
    path: '/',
    name: 'Home',
    component: 'pages/home/Home.vue',
    meta: { title: '仪表盘', icon: 'Odometer' }
  },
  {
    path: '/business',
    name: 'Business',
    meta: { title: '业务管理', icon: 'Odometer' },
    children: [
      {
        path: 'nesting1',
        name: 'Nesting1Business',
        component: 'pages/business/nesting/nesting1.vue',
        meta: { title: '嵌套路由', icon: 'Setting' },
        children: [
          {
            path: 'nesting1-1',
            name: 'Nesting11Business',
            component: 'pages/business/nesting/nesting1-1.vue',
            meta: { title: '嵌套路由1-1', icon: 'Setting' },
            children: [
              {
                path: 'nesting1-1-1',
                name: 'Nesting111Business',
                component: 'pages/business/nesting/nesting1-1-1.vue',
                meta: { title: '嵌套路由1-1-1', icon: 'Setting' },
              }
            ]
          },
          {
            path: 'nesting1-2',
            name: 'Nesting12Business',
            component: 'pages/business/nesting/nesting1-2.vue',
            meta: { title: '嵌套路由1-2', icon: 'Setting' }
          }
        ]
      },
      {
        path: 'tables',
        name: 'Tables',
        component: 'pages/business/Tables.vue',
        meta: { title: '动态表格', icon: 'Setting' }
      },
      {
        path: 'forms',
        name: 'Forms',
        component: 'pages/business/Forms.vue',
        meta: { title: '动态表单', icon: 'Setting' }
      },
      {
        path: 'international',
        name: 'International',
        component: 'pages/business/International.vue',
        meta: { title: '国际化', icon: 'Setting' }
      },
      {
        path: 'notfound',
        name: 'NotFoundComp',
        component: 'pages/business/NotFound.vue',
        meta: { title: '404页面', icon: 'Setting' }
      }
    ]
  },
  {
    path: '/assets',
    name: 'Assets',
    meta: { title: '资源管理', icon: 'Odometer' },
    children: [
      {
        path: 'assets_icon',
        name: 'IconAssets',
        component: 'pages/assets/IconAssets.vue',
        meta: { title: '图标组件', icon: 'Setting' }
      }
    ]
  }
];

export const useMainStore = defineStore('main', {
  state: (): MainState => {
    return {
      version: '0.0.1',
      collapse: false,
      locale: 'zhCn',
      showDrawer: false,
      theme: 'rgb(75, 64, 147)',
      viewType: 'default',
      user: null,
      permission: { menus: [] },
      layoutRoutes: []
    }
  },
  actions: {
    updateValue<K extends keyof MainState, T extends MainState[K]>(key: K , value: T) {
      this.$state[key] = value;
    },
    async login(user: any) {
      this.updateValue('user', {
        type: user.username,
        username: user.username,
        password: user.password
      });
      this.updateValue('permission', {
        menus: user.username === 'test' ? baseMenu : [...baseMenu, { path: '/system', name: 'System', meta: { title: '系统设置', icon: 'SwitchButton' }}]
      });
      const routes = await initRoutes();
      this.updateValue('layoutRoutes', routes);
    },
    async logout() {
      this.updateValue('user', null);
      this.updateValue('permission', { menus: [] });
      this.updateValue('layoutRoutes', []);
      await initRoutes();
    }
  },
  persist: {
    paths: ['version', 'collapse', 'locale', 'theme', 'viewType', 'user', 'permission', 'layoutRoutes']
  }
});
