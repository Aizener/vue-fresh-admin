<script setup lang="ts">
import { useMainStore } from '@/store/main';
import { useRouterStore } from '@/store/router';
import { storeToRefs } from 'pinia';
import { RouteRecordRaw } from 'vue-router';
import AsideMenu from './AsideMenu.vue';

const mainStore = useMainStore();
const routerStore = useRouterStore();
const menuRoutes = mainStore.layoutRoutes;
const { currentRoute } = storeToRefs(routerStore);
const getMenu = (routes: RouteRecordRaw[], pPath = ''): Menu => {
  return routes.map(item => {
    return {
      index: item.meta?.isLink ? item.path : `${pPath}${pPath ? '/' : ''}${item.path}`,
      title: item.meta?.title,
      isLink: item.meta?.isLink,
      path: item.path,
      icon: item.meta?.icon,
      children: item.children ? getMenu(item.children, `${pPath ? `${pPath}/${item.path}` : item.path}`) : []
    } as MenuItem;
  });
}
const menu = $ref<Menu>(menuRoutes ? getMenu(menuRoutes) : []);
</script>

<template>
  <div class="aside">
    <el-menu
      text-color="#666"
      active-text-color="var(--co-primary-color)"
      :default-active="currentRoute.path"
      :collapse="mainStore.collapse"
      :mode="mainStore.isMobile ? 'horizontal' : 'vertical'"
      menu-trigger="click"
    >
      <AsideMenu :menu="menu"></AsideMenu>
    </el-menu>
  </div>
</template>

<style lang="scss" scoped>
.aside {
  height: 100%;
  .el-menu {
    width: 240px;
    height: 100%;
    border-right-color: #eee;
    background-color: var(--co-menu-bg);
    &.el-menu--collapse {
      width: auto;
    }
  }
}
</style>
