import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from '@/router';
import pinia from '@/store'
import useIcons from '@/utils/useIcons';
import useEcharts from '@/utils/useEcharts';
import 'element-plus/es/components/message/style/css';

const app = createApp(App);

app
  .use(pinia)
  .use(router)
  .use(useIcons)
  .use(useEcharts)
  .mount('#app');
