import { useMainStore } from '@/store/main';
import { useCssVar } from '@vueuse/core';

let themeCSS = $ref({});
const elColorPrimary = useCssVar('--el-color-primary', document.getElementsByTagName('html')[0]);

const getTheme = (color: string) => {
  return {
    '--co-primary-color': color,
    '--co-shadow-default': '0 0 5px #ddd',
    '--co-bg-color-block': 'var(--el-bg-color)',
  }
}

const useTheme = () => {
  const mainStore = useMainStore();

  watch(() => mainStore.theme, async newVal => {
    elColorPrimary.value = newVal;
    themeCSS = getTheme(newVal) as Record<string, unknown>;
  }, { immediate: true });

  watch(() => mainStore.viewType, newVal => {
    if (newVal === 'dark') {
      document.getElementsByTagName('html')[0].classList.add('dark');
    } else {
      document.getElementsByTagName('html')[0].classList.remove('dark');
    }
  }, { immediate: true });
  
  return $$(themeCSS);
}

export default useTheme;
