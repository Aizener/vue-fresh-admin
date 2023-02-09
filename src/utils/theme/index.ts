import { useMainStore } from '@/store/main';
import { useCssVar } from '@vueuse/core';
import Color from 'color';

let themeCSS = $ref({});
const htmlDom = document.getElementsByTagName('html')[0];
const elColorPrimary = useCssVar('--el-color-primary', htmlDom);
const elColorPrimaryLight3 = useCssVar('--el-color-primary-light-3', htmlDom);
const elColorPrimaryDark2 = useCssVar('--el-color-primary-dark-2', htmlDom);

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
    elColorPrimaryLight3.value = newVal;
    const color = Color(newVal);
    elColorPrimaryDark2.value = color.darken(0.5).string(); 
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
