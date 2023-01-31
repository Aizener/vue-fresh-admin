<script setup lang="ts">
import useTheme from '@/utils/theme';
const theme = useTheme();
</script>

<template>
  <div
    id="container"
    class="container"
    :style="theme"
  >
    <router-view></router-view>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100vh;
}
</style>
