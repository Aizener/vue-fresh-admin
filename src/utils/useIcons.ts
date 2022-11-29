import { App } from 'vue';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const useIcons = {
  install: (app: App) => {
    // 如果您正在使用CDN引入，请删除下面一行。
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  }
}

export const Icons = ElementPlusIconsVue;
export default useIcons;
