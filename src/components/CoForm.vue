<script setup lang="ts">
import { FormInstance, FormRules } from 'element-plus';
const {
  form,
  model,
  rules,
} = defineProps<{
  form: Record<string, any>,
  model: Record<string, any>,
  rules: FormRules
}>();

const formRef = $ref();

const getLabelWidth = (item: any) => {
  return item.labelWidth ? item.labelWidth : '100px';
}
const getPlaceholderTitle = (item: any) => {
  let msg = '', { type, label } = item;
  switch(type) {
    case 'input':
      msg = '输入';
      break;
    case 'select':
      msg = '选择';
      break;
  }
  return `请${msg}${label}`
}

const validate = () => {
  console.log(formRef)
}

const handleSubmit = async () => {
  const isValid = await (formRef as FormInstance).validate().catch(() => false);
  console.log(isValid)
}
const handleCancel = () => {

}

defineExpose([
  validate
]);
</script>

<template>
  <el-form
    class="co-form"
    ref="formRef"
    :model="model"
    :rules="rules"
  >
    <el-form-item
      v-for="(item, idx) in form"
      :key="idx"
      :prop="item.prop"
      :label="item.label"
      :label-width="getLabelWidth(item)"
    >
      <template v-if="item.type === 'input'">
        <slot :name="item.prop">
          <el-input
            :placeholder="item.placeholder ? item.placeholder : getPlaceholderTitle(item)"
            v-model="model[item.prop]"
          ></el-input>
        </slot>
      </template>
    </el-form-item>
    <el-form-item>
      <slot name="form-oerpate">
        <div class="operate">
          <el-button @click="handleCancel">取消</el-button>
          <el-button type="primary" @click="handleSubmit">提交</el-button>
        </div>
      </slot>
    </el-form-item>
  </el-form>
</template>

<style lang="scss" scoped>
.co-form {
  .operate {
    width: 100%;
    text-align: right;
  }
}
</style>