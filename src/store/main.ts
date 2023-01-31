import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: (): MainState => {
    return {
      version: '0.0.1',
      collapse: false,
      locale: 'zhCn',
      showDrawer: false,
      theme: 'rgb(75, 64, 147)',
      viewType: 'default'
    }
  },
  actions: {
    updateValue<K extends keyof MainState, T extends MainState[K]>(key: K , value: T) {
      this.$state[key] = value;
    }
  },
  persist: {
    paths: ['version', 'collapse', 'locale', 'theme', 'viewType']
  }
});
