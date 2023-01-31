<script setup lang="ts">
import { useMainStore } from '@/store/main';
import { echarts } from '@/utils/useEcharts';
import pkg from '_/package.json';
import { useDebounceFn } from '@vueuse/core'
import { EChartsType } from 'echarts/core';
import Driver from 'driver.js';
import 'driver.js/dist/driver.min.css';

const today = $ref(new Date());
const dateList = Array<DayType>(
  { month: 12, day: 5, title: '今天' }
);
const mainStore = useMainStore();

const getDateTitle = (date: Date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const target = dateList.find(item => item.month === month && item.day === day);
  if (target) {
    return target.title;
  }
}

let lineCharts: EChartsType, barCharts: EChartsType;
const resizeCharts = useDebounceFn(() => {
  lineCharts.dispose();
  barCharts.dispose();
  setTimeout(() => {
    initLineCharts();
    initBarCharts();
  }, 500);
}, 500)

watch(() => mainStore.collapse, async () => {
  resizeCharts();
});

const initLineCharts = () => {
  lineCharts = echarts.init(document.querySelector('#line-charts') as HTMLElement);
  const lineStyle = {
    shadowColor: 'rgba(0, 0, 0, .6)',
    shadowBlur: 30
  }
  const options: ECOption = {
    title: {
      text: '后台图表信息',
      textStyle: {
        color: 'var(--co-primary-color);'
      }
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    legend: {
      show: true,
    },
    tooltip: {
      show: true,
      trigger: 'axis'
    },
    series: [
      { data: [820, 932, 901, 934, 1290, 1330, 1320], type: 'line', smooth: true, name: '图例1', lineStyle  },
      { data: [720, 932, 801, 534, 1290, 1530, 1120], type: 'line', smooth: true, name: '图例2', lineStyle },
      { data: [710, 932, 601, 634, 1290, 1130, 1420], type: 'line', smooth: true, name: '图例3', lineStyle },
    ]
  };
  lineCharts.setOption(options);
}
const initBarCharts = () => {
  barCharts = echarts.init(document.querySelector('#pie-charts') as HTMLElement);
  const options: ECOption = {
    legend: {
      top: 'bottom',
      padding: 0
    },
    series: [
      {
        name: '后台图表信息',
        type: 'pie',
        bottom: '20%',
        radius: ['10%', '60%'],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 5
        },
        data: [
          { value: 40, name: 'rose 1' },
          { value: 38, name: 'rose 2' },
          { value: 32, name: 'rose 3' },
          { value: 30, name: 'rose 4' },
          { value: 28, name: 'rose 5' },
          { value: 26, name: 'rose 6' },
          { value: 22, name: 'rose 7' },
          { value: 18, name: 'rose 8' }
        ]
      }
    ]
  };
  barCharts.setOption(options);
}

const initHelper = async () => {
  const driver = new Driver({
    className: 'c-driver',
    doneBtnText: '我知道了',
    closeBtnText: '关闭',
    nextBtnText: '下一步',
    prevBtnText: '上一步'
  });
  // Define the steps for introduction
  driver.defineSteps([
    {
      element: '#aside',
      popover: {
        className: 'step1',
        title: '侧边栏',
        description: '侧边栏主要用于切换页面所用',
        position: 'right'
      }
    },
    {
      element: '#header',
      popover: {
        title: '顶部栏',
        description: '顶部栏用于显示用户或者部分系统设置',
        position: 'bottom'
      }
    },
    {
      element: '#tab-router',
      popover: {
        title: '标签栏',
        description: '标签栏主要用于记录选择过的菜单',
        position: 'bottom'
      }
    }
  ]);
  setTimeout(() => {
    driver.start();
  });
}
onMounted(() => {
  initLineCharts();
  initBarCharts();
});
</script>

<template>
  <div class="info">
    <div class="info-site">
      <div class="info-site--help">
        <div class="info-site--icon">
          <el-icon size="30px" color="rgb(107, 189, 217)"><QuestionFilled /></el-icon>
        </div>
        <p>帮助中心</p>
        <span>
          点击<span class="button" @click="initHelper">引导</span>将出现站点的使用帮助
        </span>
      </div>
      <div class="info-site--block">
        <div class="info-site--top">
          <p class="info-site--title">站点信息</p>
          <el-icon><InfoFilled color="var(--co-primary-color)" /></el-icon>
        </div>
        <ul class="info-site--list">
          <li class="info-site--item">
            <p>前端框架</p>
            <p>vue3</p>
          </li>
          <li class="info-site--item">
            <p>前端UI</p>
            <p>element-plus</p>
          </li>
          <li class="info-site--item">
            <p>图表库</p>
            <p>echarts</p>
          </li>
          <li class="info-site--item">
            <p>后端框架</p>
            <p>nest.js</p>
          </li>
          <li class="info-site--item">
            <p>数据库</p>
            <p>mysql</p>
          </li>
          <li class="info-site--item">
            <p>当前版本</p>
            <p>{{ mainStore.version }}</p>
          </li>
        </ul>
      </div>
      <div class="info-site--block">
        <div class="info-site--top">
          <p class="info-site--title">依赖库(dependencies)</p>
          <el-icon><InfoFilled color="var(--co-primary-color)" /></el-icon>
        </div>
        <ul class="info-site--list">
          <li
            class="info-site--item"
            v-for="(value, key) in pkg.dependencies"
            :key="key"
          >
            <p>{{ key }}</p>
            <p>{{ value }}</p>
          </li>
        </ul>
      </div>
      <div class="info-site--block">
        <div class="info-site--top">
          <p class="info-site--title">依赖库(devDependencies)</p>
          <el-icon><InfoFilled color="var(--co-primary-color)" /></el-icon>
        </div>
        <ul class="info-site--list">
          <li
            class="info-site--item"
            v-for="(value, key) in pkg.devDependencies"
            :key="key"
          >
            <p>{{ key }}</p>
            <p>{{ value }}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="info-primary">
      <div class="info-charts">
        <div id="line-charts" class="line-charts"></div>
        <div id="pie-charts" class="pie-charts"></div>
      </div>
      <div class="info-date">
        <el-calendar v-model="today">
          <template #date-cell="{ data }">
            <p :class="data.isSelected ? 'is-selected' : ''">
              {{ data.day.split('-').slice(1).join('-') }}
              {{ data.isSelected ? '✔️' : '' }}
            </p>
              
            <p class="info-date--content">{{ getDateTitle(data.date) }}</p>
          </template>
        </el-calendar>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.info {
  display: flex;
  margin-top: 50px;
  align-items: flex-start;
  &-site {
    width: 350px;
    min-width: 350px;
    &--block {
      padding: 15px;
      box-shadow: 0 0 3px #ddd;
      border-radius: 5px;
      background-color: var(--co-bg-color-block);
      margin-top: 15px;
      &:first-child {
        margin: 0;
      }
    }

    &--help {
      height: 120px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border-radius: 5px;
      box-shadow: 0 0 3px #ddd;
      background-color: var(--co-bg-color-block);
      position: relative;
      p {
        color: #333;
        font-size: 20px;
        font-weight: bold;
      }
      span {
        color: gray;
        font-size: 16px;
        margin-top: 8px;
        &.button {
          color: #409eff;
          margin: 0 3px;
          font-weight: bold;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    &--icon {
      position: absolute;
      left: 50%;
      top: 0;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: translate(-50%, -50%);
      background-color: #fff;
      border-radius: 50%;
      box-shadow: var(--co-shadow-default);
    }

    &--top {
      display: flex;
      justify-content: space-between;
    }
    &--title {
      color: var(--co-primary-color);;
      font-size: 14px;
      font-weight: bold;
    }
    &--list {
      flex-direction: column;
      margin-top: 15px;
    }
    &--item {
      display: flex;
      justify-content: space-between;
      margin-top: 8px;
      p {
        color: gray;
        font-size: 15px;
      }
    }
  }
  &-primary {
    flex: 1;
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    .info-charts {
      display: flex;
    }
    .line-charts, .pie-charts {
      flex: 1;
      padding: 15px;
      min-height: 350px;
      margin-left: 30px;
      border-radius: 5px;
      box-shadow: var(--co-shadow-default);
    }
    .line-charts {
      flex: 3;
      margin-left: 0;
    }
    .pie-charts {
      flex: 2;
    }
    .info-date {
      margin-top: 30px;
      box-shadow: var(--co-shadow-default);
      border-radius: 5px;
      padding: 20px 15px 0 15px;
      &--content {
        color: var(--co-primary-color);;
        font-size: 14px;
        font-weight: bold;
        height: calc(100% - 21px);
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
      }
    }
  }
}

</style>
