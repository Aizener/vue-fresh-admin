import { createApp } from 'vue';
import './style.scss';
import './mobile.scss';
import App from './App.vue';
import router from '@/router';
import pinia from '@/store'
import useIcons from '@/utils/useIcons';
import useEcharts from '@/utils/useEcharts';
import useLocale from '@/utils/useLocale';
import 'element-plus/es/components/message/style/css';
import 'element-plus/theme-chalk/dark/css-vars.css';

const app = createApp(App);

app
  .use(pinia)
  .use(router)
  .use(useIcons)
  .use(useEcharts)
  .use(useLocale)
  .mount('#app');
