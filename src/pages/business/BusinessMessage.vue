<script setup lang="ts">
const tableHeader = $ref([
  { prop: 'name', label: '名称', width: '200px' },
  { prop: 'title', label: '标题', width: '200px' },
  { prop: 'content', label: '内容', width: '200px' },
]);
const tableData = $ref([
  { name: 'name1', title: 'title1', content: 'content1' },
  { name: 'name2', title: 'title2', content: 'content2' },
  { name: 'name3', title: 'title3', content: 'content3' },
]);
const tableCondition = $ref({
  page: 1,
  size: 10,
  total: 112,
  seoForm: {
    name: {
      type: 'input',
      value: '',
      placeholder: '请输入名称搜索'
    },
    title: {
      type: 'select',
      value: '1',
      placeholder: '请选择标题类型',
      option: [
        { label: '值1', value: '1' },
        { label: '值2', value: '2' }
      ]
    },
    name2: {
      type: 'input',
      value: '',
      placeholder: '请输入名称搜索'
    },
  }
})
</script>

<template>
  <CommonTable :tableData="tableData" :tableHeader="tableHeader" :tableCondition="tableCondition"></CommonTable>
</template>

<style lang="scss">

</style>
