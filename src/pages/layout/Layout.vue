<script setup lang="ts">
import Aside from './Aside.vue';
import Header from './Header.vue';
import TabRouter from './TabRouter.vue';
import Drawer from './Drawer.vue';
import { useMainStore } from '@/store/main';

const mainStore = useMainStore();
</script>

<template>
  <el-container>
    <template v-if="mainStore.isMobile">
      <div class="page-top">
        <el-header>
          <Header />
        </el-header>
        <Aside />
        <TabRouter id="tab-router" />
      </div>
      <el-main>
        <div id="main">
          <router-view v-slot="{ Component }">
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </router-view>
        </div>
      </el-main>
    </template>
    <template v-else>
      <el-aside id="aside">
        <Aside />
      </el-aside>
      <el-container>
        <el-header id="header"><Header /></el-header>
        <el-main>
          <TabRouter id="tab-router" />
          <div id="main">
            <router-view v-slot="{ Component }">
              <keep-alive>
                <component :is="Component" />
              </keep-alive>
            </router-view>
          </div>
        </el-main>
      </el-container>
    </template>
  </el-container>
  <Drawer />
</template>

<style lang="scss" scoped>
.el-container {
  width: 100%;
  height: 100%;
  .el-aside {
    width: auto;
  }
  .el-header {
    border-bottom: none;
    border-bottom: 1px solid #eee;
    background-color: var(--co-menu-bg);
  }
  .el-main {
    padding-top: 50px;
    position: relative;
  }
}
</style>
