<script setup lang="ts">
import { useMainStore } from '@/store/main';
import { storeToRefs } from 'pinia';

const mainStore = useMainStore();
const { showDrawer } = storeToRefs(mainStore); 
const handleBeforeClose = (done: Function) => {
  done();
}
const viewType = $ref(mainStore.viewType);
const theme = $ref(mainStore.theme);

const handleChangeViewType = (val: 'default' | 'dark') => {
  mainStore.updateValue('viewType', val);
  if (val === 'dark') {
    document.getElementsByTagName('html')[0].classList.add('dark');
  } else {
    document.getElementsByTagName('html')[0].classList.remove('dark');
  }
}

const handleChangeThemeType = (val: string) => {
  mainStore.updateValue('theme', val);
}
</script>

<template>
  <el-drawer
    v-model="showDrawer"
    title="设置"
    direction="rtl"
    :before-close="handleBeforeClose"
  >
    <div class="row view">
      <span class="theme-title">显示模式</span>
      <el-radio-group class="row-content" v-model="viewType" @change="handleChangeViewType">
        <el-radio label="default" border>默认模式</el-radio>
        <el-radio label="dark" border>深色模式</el-radio>
      </el-radio-group>
    </div>
    <div class="row theme">
      <span class="theme-title">主题色</span>
      <div class="row-content">
        <el-color-picker v-model="theme" @change="handleChangeThemeType" />
      </div>
    </div>
  </el-drawer>
</template>

<style lang="scss" scoped>
.row {
  margin-bottom: 20px;
  display: flex;
}
.view {
  flex-direction: column;
  .row-content {
    margin-top: 15px;
  }
}
.theme {
  display: flex;
  align-items: center;
  .row-content {
    margin-left: 15px;
  }
}
</style>