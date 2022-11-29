<script setup lang="ts">
import Aside from './Aside.vue';
import Header from './Header.vue';
</script>

<template>
  <el-container>
    <el-aside>
      <Aside />
    </el-aside>
    <el-container>
      <el-header><Header /></el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.el-container {
  width: 100%;
  height: 100%;
  .el-aside {
    width: auto;
  }
  .el-header {
    border-bottom: 1px solid #eee;
  }
}
</style>
