<script setup lang="ts">
const {
  title,
  content
} = defineProps<{
  title: string,
  content: string
}>();
</script>

<template>
  <div class="co-tips">
    <p class="title">{{ title }}</p>
    <div class="content">
      <template v-if="content">{{ content }}</template>
      <slot v-else></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.co-tips {
  width: 100%;
  padding: 10px;
  color: #333;
  font-size: 14px;
  margin: 15px 0;
  background: #d9ecff;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  padding-left: 20px;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 5px;
    height: 100%;
    background-color: #409eff;
  }
  
  .title {
    font-weight: bold;
  }
  .content {
    margin-top: 10px;
  }
}
</style>
