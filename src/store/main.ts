import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => {
    const version = '0.0.1';
    return {
      version
    }
  },
  persist: {
    paths: ['version']
  }
});
