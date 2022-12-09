import { App } from 'vue';
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { createI18n } from 'vue-i18n';
import enMessages from './locale/en';
import zhMessages from './locale/zh';

const i18n = createI18n({
  locale: 'zhCn',
  legacy: false,
  allowComposition: true,
  messages: {
    en: enMessages,
    zhCn: zhMessages
  }
});

const useLocale = {
  install: (app: App) => {
    app.use(i18n);
    app.use(ElementPlus, {
      locale: zhCn,
    });
  }
}

export default useLocale;