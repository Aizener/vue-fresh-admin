<script setup lang="ts">
const props = defineProps<{
  color: string,
  data: Array<number>
}>();
const { color, data } = $$(props);
const max = Math.max(...data);
const activeIndexs = $ref(data.map((item: number, idx: number) => item === max && idx).filter((item: number) => item));
const range = $ref(max);
</script>

<template>
  <div class="bar">
    <div
      class="bar-item"
      v-for="(item, idx) in data"
      :key="idx"
      :style="{
        backgroundColor: activeIndexs.includes(idx) ? color : 'rgb(229, 236, 245)',
        height: `${Math.ceil(item / range * 100)}%`
      }"
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
    margin-right: 15px;
    border-radius: 5px;
    box-shadow: 0 0 5px #eee;
    background-color: rgb(229, 236, 245);
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
