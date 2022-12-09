<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { Icon } from '@iconify/vue';
import { useMainStore } from '@/store/main';

const i18n = useI18n();
const lang = $ref(i18n.locale.value);
const mainStore = useMainStore();
const switchLocale = (type: string) => {
  i18n.locale.value = type;
  mainStore.updateValue('locale', type);
}
</script>

<template>
  <div class="international">
    <p class="title">Vue I18n</p>
    <p class="subtitle">{{ $t('vueI18n.title') }}</p>
    <el-card class="locale-list">
      <template #header>
        <div class="card-header">
          <span>{{ $t('switchLocale') }}</span>
          <Icon class="icon" icon="fluent-mdl2:locale-language" />
        </div>
      </template>
      <el-radio-group v-model="lang" @change="switchLocale">
        <el-radio label="en" size="large" border>English</el-radio>
        <el-radio label="zhCn" size="large" border>中文</el-radio>
      </el-radio-group>
    </el-card>
    <el-divider />
    <div class="list">
      <h2>{{ $t('vueI18n.intro') }}</h2>
      <div class="feature">
        <div class="item">
          <p>{{ $t('vueI18n.feat1Title') }}</p>
          <span>{{ $t('vueI18n.feat1Intro') }}</span>
        </div>
        <div class="item">
          <p>{{ $t('vueI18n.feat2Title') }}</p>
          <span>{{ $t('vueI18n.feat2Intro') }}</span>
        </div>
        <div class="item">
          <p>{{ $t('vueI18n.feat3Title') }}</p>
          <span>{{ $t('vueI18n.feat3Intro') }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.international {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 52px;
}
.title {
  color: #42d392;
  font-size: 64px;
  font-family: fantasy;
  text-shadow: 1px 1px 5px #42d392;
}
.subtitle {
  color: #666;
  font-size: 14px;
  font-weight: bold;
}
.locale-list {
  min-width: 500px;
  margin-top: 30px;
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon {
      color: #42d392;
      font-size: 24px;
    }
  }
}
.list {
  color: #333;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  h2 {
    width: 60%;
    font-size: 16px;
  }
  .feature {
    display: flex;
    margin-top: 30px;
    .item {
      flex: 1;
      margin: 0 10px;
      padding: 30px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-shadow: 0 0 5px #ccc;
      border-radius: 5px;
      p {
        margin-bottom: 15px;
        font-weight: bold;
      }
      span {
        color: gray;
        font-size: 14px;
      }
    }
  }
}
</style>
