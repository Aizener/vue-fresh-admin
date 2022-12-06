<script setup lang="ts">
const tableHeader = $ref([
  { prop: 'name', label: '名称', width: '200px' },
  { prop: 'title', label: '标题', width: '200px' },
  { prop: 'content', label: '内容', width: '200px' },
]);
let tableData = $ref<Array<unknown>>([]);

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
});

const getData = async () => {
  return new Promise(resolve => setTimeout(() => {
    const range = tableCondition.page * 10;
    for (let i = range ; i < range + tableCondition.size; i ++) {
      tableData.push({ name: 'name' + i, title: 'title' + i, content: 'content' + i });
    }
    resolve(1)
  }, 500));
}

const handleSearch = async (done: () => void) => {
  await getData();
  done();
}
</script>

<template>
  <CommonTable
    v-model:tableData="tableData"
    v-model:tableHeader="tableHeader"
    v-model:tableCondition="tableCondition"
    @search="handleSearch"
  ></CommonTable>
</template>

<style lang="scss">

</style>
