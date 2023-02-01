<script setup lang="ts">
import useTheme from '@/utils/theme';
import { get } from '@/utils/request';
const theme = useTheme();


onMounted(async () => {
  const res = await get<AxiosResponseType<VersionType>>('https://mock.apifox.cn/m2/2236977-0-default/59778682');
  console.log(res);
})
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
