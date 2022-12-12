<script setup lang="ts">
import { FormInstance, FormRules } from 'element-plus';
const {
  form,
  model,
  rules,
  column = false,
} = defineProps<{
  form: Record<string, any>,
  model: Record<string, any>,
  rules: FormRules,
  column?: boolean
}>();

const formRef = $ref<FormInstance>();
const emit = defineEmits(['submit', 'cancel']);

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
    case 'date':
      msg = '选择';
      break;
  }
  return `请${msg}${label}`
}

const getShowStatus = (item: any) => {
  if (item.show === undefined) {
    return true;
  }
  return item.show(model);
}

const validate = async () => {
  const isValid = await formRef!.validate().catch(() => false);
  return isValid;
}
const validateField = async (field: string) => {
  const isValid = await formRef!.validateField(field).catch(() => false);
  return isValid;
}
const scrollToField = async (field: string) => {
  formRef!.scrollToField(field);
}
const resetFields = async () => {
  formRef!.resetFields();
}
const clearValidate = async () => {
  formRef!.clearValidate();
}

const handleSubmit = async () => {
  const isValid = await validate();
  emit('submit', isValid);
}
const handleCancel = () => {
  emit('cancel');
}

defineExpose({
  validate,
  validateField,
  resetFields,
  scrollToField,
  clearValidate
});
</script>

<template>
  <el-form
    class="co-form"
    :class="{ column: column }"
    ref="formRef"
    :model="model"
    :rules="rules"
  >
    <template
      v-for="(item, idx) in form"
    >
      <div
        class="row"
        :key="idx"
        v-if="getShowStatus(item)"
      >
        <el-form-item
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
          <template v-else-if="item.type === 'select'">
            <slot :name="item.prop">
              <el-select
                v-model="model[item.prop]"
                :placeholder="item.placeholder ? item.placeholder : getPlaceholderTitle(item)"
              >
                <el-option
                  v-for="(opt, idx) in item.option"
                  :idx="idx"
                  :label="opt.label"
                  :value="opt.value"
                ></el-option>
              </el-select>
            </slot>
          </template>
          <template v-else-if="item.type === 'radio'">
            <slot :name="item.prop">
              <el-radio-group
                v-model="model[item.prop]"
                :placeholder="item.placeholder ? item.placeholder : getPlaceholderTitle(item)"
              >
              
                <el-radio
                  v-for="(opt, idx) in item.option"
                  :idx="idx"
                  :label="opt.value"
                >{{ opt.label }}</el-radio>
              </el-radio-group>
            </slot>
          </template>
          <template v-else-if="item.type === 'checkbox'">
            <slot :name="item.prop">
              <el-checkbox-group
                v-model="model[item.prop]"
                :placeholder="item.placeholder ? item.placeholder : getPlaceholderTitle(item)"
              >
              
                <el-checkbox
                  v-for="(opt, idx) in item.option"
                  :idx="idx"
                  :label="opt.value"
                >{{ opt.label }}</el-checkbox>
              </el-checkbox-group>
            </slot>
          </template>
          <template v-else-if="item.type === 'switch'">
            <slot :name="item.prop">
              <el-switch v-model="model[item.prop]" />
            </slot>
          </template>
          <template v-else-if="(item.type === 'date' || item.type === 'daterange')">
            <slot :name="item.prop">
              <el-date-picker
                v-model="model[item.prop]"
                :type="item.type"
                :placeholder="item.placeholder ? item.placeholder : getPlaceholderTitle(item)"
                :start-placeholder="`请选择开始${item.label}`"
                :end-placeholder="`请选择结束${item.label}`"
              />
            </slot>
          </template>
        </el-form-item>
      </div>
    </template>
    <slot name="form-oerpate">
      <div class="operate">
        <el-button @click="handleCancel">取消</el-button>
        <el-button type="primary" @click="handleSubmit">提交</el-button>
      </div>
    </slot>
  </el-form>
</template>

<style lang="scss" scoped>
.co-form {
  &.column {
    display: flex;
    flex-wrap: wrap;
    .row {
      width: 50%;
    }
  }
  .operate {
    width: 100%;
    padding-top: 15px;
    text-align: right;
  }
}
</style>