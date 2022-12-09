import { RouteRecordRaw } from 'vue-router';
import { Icons } from '@/utils/useIcons';

const layoutRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/home/Home.vue'),
    meta: {
      title: '仪表盘',
      icon: markRaw(Icons['Odometer'])
    }
  },
  {
    path: '/business',
    name: 'Business',
    meta: {
      title: '业务管理',
      icon: markRaw(Icons['Odometer'])
    },
    children: [
      {
        path: '/business/nesting1.vue',
        name: 'Nesting1Business',
        component: () => import('@/pages/business/nesting/nesting1.vue'),
        meta: {
          title: '嵌套路由',
          icon: markRaw(Icons['Setting']),
        },
        children: [
          {
            path: '/business/nesting1-1.vue',
            name: 'Nesting11Business',
            component: () => import('@/pages/business/nesting/nesting1-1.vue'),
            meta: {
              title: '嵌套路由1-1',
              icon: markRaw(Icons['Setting']),
            },
            children: [
              {
                path: '/business/nesting1-1-1.vue',
                name: 'Nesting111Business',
                component: () => import('@/pages/business/nesting/nesting1-1-1.vue'),
                meta: {
                  title: '嵌套路由1-1-1',
                  icon: markRaw(Icons['Setting'])
                }
              }
            ]
          },
          {
            path: '/business/nesting1-2.vue',
            name: 'Nesting12Business',
            component: () => import('@/pages/business/nesting/nesting1-2.vue'),
            meta: {
              title: '嵌套路由1-2',
              icon: markRaw(Icons['Setting'])
            }
          }
        ]
      },
      {
        path: '/business/business_message',
        name: 'BusinessMessage',
        component: () => import('@/pages/business/BusinessMessage.vue'),
        meta: {
          title: '评论管理',
          icon: markRaw(Icons['Setting'])
        }
      },
      {
        path: '/business/international',
        name: 'International',
        component: () => import('@/pages/business/International.vue'),
        meta: {
          title: '国际化',
          icon: markRaw(Icons['Setting'])
        }
      }
    ]
  },
  {
    path: '/assets',
    name: 'Assets',
    meta: {
      title: '资源管理',
      icon: markRaw(Icons['Odometer'])
    },
    children: [
      {
        path: '/assets/assets_icon',
        name: 'IconAssets',
        component: () => import('@/pages/assets/IconAssets.vue'),
        meta: {
          title: '图标组件',
          icon: markRaw(Icons['Setting'])
        }
      }
    ]
  },
  {
    path: '/analysis',
    name: 'Analysis',
    meta: {
      title: '数据分析',
      icon: markRaw(Icons['Odometer'])
    },
    children: [
      {
        path: '/assets/assets_manage',
        name: 'PlatformSettings',
        component: () => import('@/pages/system/PlatformSettings.vue'),
        meta: {
          title: '平台设置',
          icon: markRaw(Icons['Setting'])
        }
      }
    ]
  },
  {
    path: '/system',
    name: 'System',
    meta: {
      title: '系统设置',
      icon: markRaw(Icons['SwitchButton'])
    },
    redirect: '/system',
    children: [
      {
        path: '/system/platform_settings',
        name: 'PlatformSettings',
        component: () => import('@/pages/system/PlatformSettings.vue'),
        meta: {
          title: '平台设置',
          icon: markRaw(Icons['Setting'])
        }
      },
      {
        path: '/system/role_settings',
        name: 'RoleSettings',
        component: () => import('@/pages/system/RoleSettings.vue'),
        meta: {
          title: '角色设置',
          icon: markRaw(Icons['User'])
        }
      }
    ]
  }
];

export default layoutRoutes;
