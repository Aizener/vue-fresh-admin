import { App } from 'vue';
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { createI18n } from 'vue-i18n';
import enMessages from './locale/en';
import zhMessages from './locale/zh';
import { useMainStore } from '@/store/main';

const useLocale = {
  install: (app: App) => {
    const mainStore = useMainStore();
    const i18n = createI18n({
      locale: mainStore.locale,
      legacy: false,
      allowComposition: true,
      messages: {
        en: enMessages,
        zhCn: zhMessages
      }
    });

    app.use(i18n);
    app.use(ElementPlus, {
      locale: zhCn,
    });
  }
}

export default useLocale;