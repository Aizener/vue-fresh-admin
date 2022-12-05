import { App } from 'vue';
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const useLocale = {
  install: (app: App) => {
    app.use(ElementPlus, {
      locale: zhCn,
    });
  }
}

export default useLocale;