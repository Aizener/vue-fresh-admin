import { RouteRecordRaw } from 'vue-router';
import { Icons } from '@/utils/useIcons';

const routes: RouteRecordRaw[] = [
  {
    path: '/layout',
    name: 'Layout',
    redirect: '/',
    component: () => import('@/pages/layout/Layout.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/pages/Home.vue'),
        meta: {
          title: '首页',
          icon: Icons['Odometer']
        }
      },
      {
        path: '/system',
        name: 'System',
        meta: {
          title: '系统设置',
          icon: Icons['SwitchButton']
        },
        redirect: '/system',
        children: [
          {
            path: '/system/platform_settings',
            name: 'PlatformSettings',
            component: () => import('@/pages/system/PlatformSettings.vue'),
            meta: {
              title: '平台设置',
              icon: Icons['Setting']
            }
          },
          {
            path: '/system/role_settings',
            name: 'RoleSettings',
            component: () => import('@/pages/system/RoleSettings.vue'),
            meta: {
              title: '角色设置',
              icon: Icons['User']
            }
          }
        ]
      }
    ]
  }
];

export default routes;
