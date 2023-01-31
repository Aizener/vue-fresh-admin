<script setup lang="ts">
import Aside from './Aside.vue';
import Header from './Header.vue';
import TabRouter from './TabRouter.vue';
import Drawer from './Drawer.vue';
</script>

<template>
  <el-container>
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
