import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: (): MainState => {
    return {
      version: '0.0.1',
      collapse: false
    }
  },
  actions: {
    updateValue<K extends keyof MainState, T extends MainState[K]>(key: K , value: T) {
      this.$state[key] = value;
    }
  },
  persist: {
    // paths: []
  }
});
