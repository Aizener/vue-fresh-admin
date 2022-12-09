import { defineStore } from 'pinia';

export const useRouterStore = defineStore('router', {
  state: (): RouterStore => {
    return {
      routes: [],
      currentRoute: null
    }
  },
  actions: {
    updateValue<K extends keyof RouterStore, T extends RouterStore[K]>(key: K , value: T) {
      this.$state[key] = value;
    }
  }
});
