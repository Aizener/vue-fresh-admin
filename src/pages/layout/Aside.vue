<script setup lang="ts">
import { RouteRecordRaw } from 'vue-router';
import AsideMenu from './AsideMenu.vue';

const route = useRoute();
const router = useRouter();
const routes = router.getRoutes();
const menuRoutes = routes.find(route => route.name === 'Layout')?.children;

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
      :unique-opened="true"
      :router="true"
      :default-active="activeMenu"
    >
      <AsideMenu :menu="menu"></AsideMenu>
    </el-menu>
  </div>
</template>

<style lang="scss">
.aside {
  width: 100%;
  height: 100%;
  .el-menu {
    height: 100%;
  }
}
</style>
