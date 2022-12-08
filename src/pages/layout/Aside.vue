<script setup lang="ts">
import { useMainStore } from '@/store/main';
import { RouteRecordRaw } from 'vue-router';
import AsideMenu from './AsideMenu.vue';

const route = useRoute();
const router = useRouter();
const routes = router.getRoutes();
const menuRoutes = routes.find(route => route.name === 'Layout')?.children;
const mainStore = useMainStore();

const activeMenu = $ref<string>(route.path);
const getMenu = (routes: RouteRecordRaw[]): Menu => {
  return routes.map(item => ({
    index: item.path,
    title: item.meta?.title,
    path: item.path,
    icon: item.meta?.icon,
    children: item.children ? getMenu(item.children) : []
  } as MenuItem));
}
const menu = $ref<Menu>(menuRoutes ? getMenu(menuRoutes) : []);
</script>

<template>
  <div class="aside">
    <el-menu
      text-color="#666"
      active-text-color="var(--co-primary-color)"
      :router="true"
      :default-active="activeMenu"
      :collapse="mainStore.collapse"
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
    background-color: rgb(246, 247, 255);
    &.el-menu--collapse {
      width: auto;
    }
  }
}
</style>
