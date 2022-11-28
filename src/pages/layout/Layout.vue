<script setup lang="ts">
import { useMainStore } from '@/store/main';

const mainStore = useMainStore();
console.log('mainStore', mainStore);
</script>

<template>
  <el-container>
    <el-aside width="200px">{{ mainStore.version }}</el-aside>
    <el-container>
      <el-header>Header</el-header>
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
}
</style>
