<script setup lang="ts">
const form = $ref([
  { type: 'input', prop: 'name', label: '名称' },
  { type: 'input', prop: 'title', label: '标题' },
]);
const model = $ref({
  name: '',
  title: ''
});
const rules = $ref({
  name: [{ required: true, message: '请输入名称', trigger: ['blur', 'change'] }]
});
</script>

<template>
  <div class="forms">
    <div class="operate">
    {{ model }}
    </div>
    <div class="content">
      <CoForm :form="form" :model="model" :rules="rules">
      </CoForm>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.forms {
  display: flex;
  .operate {
    flex: 1;
  }
  .content {
    flex: 1;
  }
}
</style>