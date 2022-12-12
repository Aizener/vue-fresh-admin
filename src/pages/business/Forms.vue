<script setup lang="ts">
import Prism from 'prismjs';
const form = $ref([
  { type: 'input', prop: 'name', label: '名称' },
  { type: 'input', prop: 'title', label: '标题' },
  { type: 'select', prop: 'addr', label: '地址', option: [
    { label: '家里', value: 0 },
    { label: '公司', value: 1 },
    { label: '驿站', value: 2 },
  ] },
  { type: 'checkbox', prop: 'service', label: '服务', option: [
    { label: '保险', value: 0 },
    { label: '包送', value: 1 },
    { label: '包赔', value: 2 }
  ] },
  { type: 'radio', prop: 'type', label: '快递', option: [
    { label: '顺丰', value: 0 },
    { label: '韵达', value: 1 },
    { label: '邮政', value: 2 }
  ] },
  { type: 'switch', prop: 'appointment', label: '预约' },
  { type: 'daterange', prop: 'date', label: '时间' }
]);
const model = $ref({
  name: '',
  title: '',
  addr: 0,
  service: [1],
  type: 0,
  appointment: false,
  data: ''
});
const rules = $ref({
  name: [{ required: true, message: '请输入名称', trigger: ['blur', 'change'] }],
  title: [{ required: true, message: '请输入标题', trigger: ['blur', 'change'] }]
});
const html = Prism.highlight(JSON.stringify(model), Prism.languages.json, 'json');
</script>

<template>
  <div class="forms">
    <div class="operate">
      <p class="title">对应的JSON对象</p>
      <pre><code class="language-json" v-html="html"></code></pre>
    </div>
    <div class="content">
      <CoForm :form="form" :model="model" :rules="rules" :column="true">
      </CoForm>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.forms {
  display: flex;
  .operate {
    flex: 1;
    pre {
      width: 300px;
      height: 300px;
      white-space: pre-wrap;
      code {
      width: 300px;
      height: 300px;
        white-space: pre-wrap
      }
    }
  }
  .content {
    flex: 2;
  }
}
</style>