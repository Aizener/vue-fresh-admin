<script setup lang="ts">
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import Clipboard from 'clipboard';
import { ElMessage } from 'element-plus';
import { Icon } from '@iconify/vue';

const IconifyDemos = $ref(['mdi:ab-testing', 'mdi:abacus', 'mdi:account-box', 'mdi:home-variant', 'mdi:qqchat', 'mdi:github', 'ic:round-apple', 'ic:outline-facebook', 'ic:baseline-ac-unit', 'ic:baseline-account-circle', 'mdi:google-chrome', 'ph:google-logo-fill', 'mdi:google-play', 'mdi:google-cloud']);
const getIconCodeText = (name: string) => {
  return `<el-icon><${name} /></el-icon>`;
}
const getIconifyCodeText = (name: string) => {
  return `<Icon icon="${name}" />`;
}

onMounted(() => {
  const clipboard = new Clipboard('.icon-item');
  clipboard.on('success', e => {
    ElMessage({
      message: `图标'${(e.trigger as HTMLElement).dataset.name}'复制成功！`,
      type: 'success',
      showClose: true
    });
  });
  clipboard.on('error', e => {
    ElMessage({
      message: `图标'${(e.trigger as HTMLElement).dataset.name}'复制失败！`,
      type: 'error',
      showClose: true
    });
  });
});

</script>

<template>
  <CoTips class="iconify-tip" title="使用Iconify组件">
    <div>
      得益于<a class="co-link" target="_blank" href="https://github.com/antfu/unplugin-icons">unplugin-icons</a>和<a class="co-link" target="_blank" href="https://github.com/antfu/unplugin-auto-import">unplugin-auto-import</a>插件，可以使用<a class="co-link" target="_blank" href="http://icon-sets.iconify.design/">Iconify的图标集</a>，因为数量太多，简单列出几个。
    </div>
  </CoTips>
  <div class="icon-list">
    <div
      class="icon-item"
      v-for="(icon, idx) in IconifyDemos"
      :key="idx"
      :data-name="icon"
      :data-clipboard-text="getIconifyCodeText(icon)"
    >
      <el-icon>
        <Icon :icon="icon" />
      </el-icon>
      <p class="icon-item--name">{{ icon }}</p>
    </div>
  </div>
  <CoTips title="使用ElementPlus的组件" content="因为使用了ElementPlus框架，所以在该管理系统中可以使用其提供的所有图标组件" />
  <div class="icon-list">
    <div
      class="icon-item"
      v-for="(icon, idx) in ElementPlusIconsVue"
      :key="idx"
      :data-name="icon.name"
      :data-clipboard-text="getIconCodeText(icon.name)"
    >
      <el-icon>
        <component :is="icon"></component>
      </el-icon>
      <p class="icon-item--name">{{ icon.name }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.iconify-tip {
  margin-top: 0;
}
.icon-list {
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
  box-shadow: var(--co-shadow-default);
  border-radius: 5px;
  .icon-item {
    color: gray;
    padding: 15px;
    margin: 10px;
    width: 84px;
    min-height: 84px;
    border-radius: 5px;
    box-shadow: var(--co-shadow-default);
    display: flex;
    flex-direction: column;
    align-items: center;
    user-select: none;
    position: relative;
    &:hover {
      color: #fff;
      background-color: var(--co-primary-color);;
      cursor: pointer;
    }
    &--name {
      width: 100%;
      font-size: 12px;
      margin-top: 10px;
      text-align: center;
      word-break: break-all;
    }
  }
}
</style>
