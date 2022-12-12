<script setup lang="ts">
import { Rule } from 'async-validator';
import { FormInstance } from 'element-plus';

const form = $ref([
  { type: 'input', prop: 'name', label: '名称' },
  { type: 'input', prop: 'title', label: '标题' },
  { type: 'select', prop: 'addr', label: '地址', option: [
    { label: '家里', value: '家里' },
    { label: '公司', value: '公司' },
    { label: '驿站', value: '驿站' },
  ] },
  { type: 'checkbox', prop: 'service', label: '服务', option: [
    { label: '保险', value: '保险' },
    { label: '包送', value: '包送' },
    { label: '包赔', value: '包赔' }
  ] },
  { type: 'radio', prop: 'type', label: '快递', option: [
    { label: '顺丰', value: '顺丰' },
    { label: '韵达', value: '韵达' },
    { label: '邮政', value: '邮政' }
  ] },
  { type: 'switch', prop: 'appointment', label: '预约' },
  { type: 'daterange', prop: 'date', label: '时间', show: (model: any) => model.appointment }
]);
const model = $ref<Record<string, unknown>>({
  name: '',
  title: '',
  addr: '家里',
  service: ['保险'],
  type: '顺丰',
  appointment: false,
  date: [] 
});
const rules = $ref({
  name: [{ required: true, message: '请输入名称', trigger: ['blur', 'change'] }],
  title: [{ required: true, message: '请输入标题', trigger: ['blur', 'change'] }]
});

let dialogVisible = $ref(false), addFormRef = $ref<FormInstance>();
const addModel = $ref({
  prop: '',
  label: '',
  type: '',
  value: ''
});
const addForm = $ref([
  { type: 'input', prop: 'prop', label: '字段Prop'  },
  { type: 'input', prop: 'label', label: '字段名称'  },
  { type: 'select', prop: 'type', label: '字段类型', option: [
    { label: '输入框', value: 'input' },
    { label: '开关', value: 'switch' },
    { label: '日期', value: 'date' }
  ]  },
  { type: 'input', prop: 'value', label: '字段默认值'  },
]);
const addRules = $ref({
  prop: [{ required: true, validator: (rule: Rule, value: any, callback: (msg?: string) => void) => {
    if (String(value).trim() === '') {
      callback('请输入字段Prop');
    } else if (Object.keys(model).includes(value)) {
      callback('已存在当前字段名称');
    } else {
      callback();
    }
  }, trigger: ['blur', 'change'] }],
  label: [{ required: true, message: '请输入字段名称', trigger: ['blur', 'change'] }],
  type: [{ required: true, message: '请输入字段类型', trigger: ['blur', 'change'] }],
});
const handleClose = (done: () => void) => {
  done();
}
const handleSubmitAddForm = (isValid: boolean) => {
  if (isValid) {
    const { type, prop, label, value } = addModel;
    form.push({
      type,
      prop,
      label
    });
    model[prop] = value;
    addFormRef!.resetFields();
    dialogVisible = false;
  }
}
</script>

<template>
  <div class="forms">
    <div class="operate">
      <CoTips title="表单值" content="对应的JSON对象"></CoTips>
      <CoCode lang="json" :code="model"></CoCode>
    </div>
    <div class="content">
      <div class="add">
        <el-button type="primary" @click="dialogVisible = true">新增字段</el-button>
      </div>
      <CoForm :form="form" :model="model" :rules="rules" :column="true"></CoForm>
    </div>
    <el-dialog
      v-model="dialogVisible"
      title="新增字段"
      width="350px"
      :before-close="handleClose"
    >
      <CoForm
        ref="addFormRef"
        :form="addForm"
        :model="addModel"
        :rules="addRules"
        @submit="handleSubmitAddForm"
        @cancel="dialogVisible = false"
      ></CoForm>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>
.forms {
  display: flex;
  .operate {
    flex: 1;
    border-right: 1px solid #eee;
    padding-right: 15px;
    pre {
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
    .add {
      margin-bottom: 15px;
      padding-bottom: 10px;
      text-align: right;
      border-bottom: 1px solid #eee;
    }
  }
}

:deep(.el-dialog__body) {
  padding-top: 15px;
}
</style>