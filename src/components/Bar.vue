<script setup lang="ts">
import { CSSProperties } from "@vue/runtime-dom";

const { color, data } = defineProps<{
  color: string,
  data: Array<number>
}>();
const max = Math.max(...data);
const activeIndexs = $ref(data.map((item: number, idx: number) => item === max && idx).filter((item: number | boolean) => item));
const range = $ref(max);
const _data = $ref<{ style: CSSProperties }[]>(Array(data.length).fill({ style: {} }));

onMounted(() => {
  data.forEach((item, idx) => {
    _data.splice(idx, 1, { style: {
      backgroundColor: activeIndexs.includes(idx) ? color : 'rgb(229, 236, 245)',
      height: `${Math.ceil(item / range * 100)}%`
    }});
  });
});
</script>

<template>
  <div class="bar">
    <div
      class="bar-item"
      v-for="(item, idx) in _data"
      :key="idx"
      :style="item.style"
    ></div>
  </div>
</template>

<style lang="scss">
.bar {
  display: flex;
  align-items: flex-end;
  height: 100%;
  &-item {
    width: 30px;
    height: 0%;
    transition: height .5s;
    margin-right: 15px;
    border-radius: 5px;
    box-shadow: var(--co-shadow-default);
    background-color: rgb(229, 236, 245);
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
