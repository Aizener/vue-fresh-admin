<script setup lang="ts">
const tableData = $ref<Array<unknown>>([]);
const showHeader = $ref(['name', 'title', 'content']);
const headers = $ref([
  { prop: 'name', label: '名称', width: '200px' },
  { prop: 'title', label: '标题', width: '200px' },
  { prop: 'content', label: '内容', width: '200px' },
  { prop: 'operate', label: '操作', width: '200px' }
]);
const getHeader = computed(() => {
  return headers.filter(item => showHeader.includes(item.prop));
});
const tableHeader = $ref(getHeader);

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
    const range = (tableCondition.page - 1) * 10;
    for (let i = range ; i < range + tableCondition.size; i ++) {
      tableData.push({ name: '名称' + i, title: '标题' + i, content: '内容' + i, operate: '操作' + i });
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
  <div class="tables">
    <div class="operate">
      <el-checkbox-group v-model="showHeader">
        <el-checkbox
          v-for="(item, idx) in headers"
          :label="item.prop"
          :idx="idx"
        >{{ item.label }}</el-checkbox>
      </el-checkbox-group>
    </div>
    <div class="content">
      <CoTable
        v-model:tableData="tableData"
        v-model:tableHeader="tableHeader"
        v-model:tableCondition="tableCondition"
        @search="handleSearch"
      >
        <template #header="scope">
          <span v-if="scope.prop === 'name'">{{ scope.label }}:)</span>
        </template>
        <template #default="scope">
          <span v-if="scope.prop === 'operate'">
            <span>操作1</span>
            <span>操作2</span>
          </span>
        </template>
      </CoTable>
    </div>
  </div>
</template>

<style lang="scss">
.tables {
  height: 100%;
  display: flex;
  flex-direction: column;
  .operate {
    margin-bottom: 15px;
  }
  .content {
    flex: 1;
  }
}
</style>
