<script setup lang="ts">
import { useMainStore } from '@/store/main';

const mainStore = useMainStore();
const handleToggleAside = () => {
  mainStore.updateValue('collapse', !mainStore.collapse);
}
</script>

<template>
  <div class="header">
    <el-icon size="24px" class="header-left" @click="handleToggleAside">
      <Expand v-show="!mainStore.collapse" />
      <Fold v-show="mainStore.collapse" />
    </el-icon>
  </div>
</template>

<style lang="scss" scoped>
.header {
  height: 100%;
  display: flex;
  align-items: center;
  &-left {
    cursor: pointer;
    user-select: none;
  }
}
</style>