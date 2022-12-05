<script setup lang="ts">
import { useMainStore } from '@/store/main';
import { echarts } from '@/utils/useEcharts';

const mainStore = useMainStore();
const trend = $ref([
  { color: 'rgb(224, 144, 120)', data: [21, 16, 79, 52, 62, 79, 28] },
  { color: 'rgb(220, 217, 234)', data: [13, 48, 39, 57, 54, 31, 81] },
  { color: 'rgb(24, 223, 190)', data: [21, 33, 34, 53, 63, 72, 23] },
]);

const initLineCharts = () => {
  const charts = echarts.init(document.querySelector('#line-charts') as HTMLElement);
  const lineStyle = {
    shadowColor: 'rgba(0, 0, 0, .6)',
    shadowBlur: 30
  }
  const options: ECOption = {
    title: {
      text: '后台图表信息',
      textStyle: {
        color: 'rgb(75, 64, 147)'
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
  charts.setOption(options);
}
const initBarCharts = () => {
  const charts = echarts.init(document.querySelector('#pie-charts') as HTMLElement);
  const options = {
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        legend: {
          show: true,
        },
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
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
  charts.setOption(options);
}
onMounted(() => {
  initLineCharts();
  initBarCharts();
});
</script>

<template>
  <div class="card-list">
    <div class="card">
      <div class="card-head">
        <el-icon size="20px" color="#409eff"><HelpFilled /></el-icon>
        <span>动漫数量</span>
      </div>
      <div class="card-content">
        <ul>
          <li>
            <span>今日新增</span>
            <span>10</span>
          </li>
          <li>
            <span>累计已有</span>
            <span>100</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="card">
      <div class="card-head">
        <el-icon size="20px" color="orange"><HelpFilled /></el-icon>
        <span>动漫数量</span>
      </div>
      <div class="card-content">
        <ul>
          <li>
            <span>今日新增</span>
            <span>10</span>
          </li>
          <li>
            <span>累计已有</span>
            <span>100</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="card">
      <div class="card-head">
        <el-icon size="20px" color="green"><HelpFilled /></el-icon>
        <span>动漫数量</span>
      </div>
      <div class="card-content">
        <ul>
          <li>
            <span>今日新增</span>
            <span>10</span>
          </li>
          <li>
            <span>累计已有</span>
            <span>100</span>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="trend">
    <div class="trend-item" v-for="(item, idx) in trend">
      <div class="left">
        <p>最近浏览量趋势</p>
        <div>
          <p>201</p>
          <span>5<el-icon><TopRight /></el-icon></span>
        </div>
        <span>最近一周</span>
      </div>
      <div class="right">
        <Bar :color="item.color" :data="item.data" />
      </div>
    </div>
  </div>

  <div class="info">
    <div class="info-site">
      <div class="info-site--help">
        <div class="info-site--icon">
          <el-icon size="30px" color="rgb(107, 189, 217)"><QuestionFilled /></el-icon>
        </div>
        <p>帮助中心</p>
        <span>
          点击<span class="button">引导</span>将出现站点的使用帮助
        </span>
      </div>
      <div class="info-site--block">
        <div class="info-site--top">
          <p class="info-site--title">站点信息</p>
          <el-icon><InfoFilled color="rgb(75, 64, 147)" /></el-icon>
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
    </div>
    <div class="info-charts">
      <div id="line-charts" class="line-charts"></div>
      <div id="pie-charts" class="pie-charts"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-list {
  display: flex;
  justify-content: space-between;
  .card {
    flex: 1;
    padding: 15px;
    margin: 0 15px;
    border-radius: 5px;
    background: #fff;
    box-shadow: 0 0 5px #ddd;
    &:nth-child(1) {
      margin-left: 0;
      background: linear-gradient(145deg, rgb(252, 238, 209), rgb(211, 214, 252));
    }
    &:nth-child(2) {
      background: linear-gradient(145deg, rgb(255, 237, 206), rgb(254, 226, 235));
    }
    &:nth-child(3) {
      margin-right: 0;
      background: radial-gradient(ellipse farthest-corner at 100% 0%, rgb(233, 253, 232) 20%, rgb(228, 251, 223) 40%, rgb(202, 247, 211) 60%, rgb(222, 253, 190) 100%);
    }
    &-head {
      display: flex;
      justify-content: space-between;
      color: #333;
      font-size: 14px;
      align-items: center;
      padding-bottom: 10px;
    }
    &-content {
      padding-top: 15px;
      ul {
        li {
          color: #333;
          font-size: 14px;
          padding: 5px 0;
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
}

.trend {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  padding: 30px 0;
  border-top: 1px solid rgb(242, 241, 248);
  border-bottom: 1px solid rgb(242, 241, 248);
  &-item {
    flex: 1;
    display: flex;
    justify-content: space-between;
    transition: all .5s;
    padding: 30px;
    margin-right: 30px;
    @media screen and (max-width: 1400px) {
      flex-direction: column;
    }
    &:last-child {
      margin-right: 0;
    }
    &:hover {
      box-shadow: 0 0 5px #ccc;
      border-radius: 10px;
    }
    &:nth-child(1) {
      & > .left > div {
        p {
          color: rgb(224, 144, 120);
        }
        span {
          color: rgb(105, 138, 125);
          background-color: rgb(224, 250, 239);
        }
      }
    }
    &:nth-child(2) {
      & > .left > div {
        p {
          color: rgb(81, 69, 159);
        }
        span {
          color: rgb(81, 69, 159);
          background-color: rgb(220, 217, 234);
        }
      }
    }
    &:nth-child(3) {
      & > .left > div {
        p {
          color: rgb(24, 223, 190);
        }
        span {
          color: rgb(24, 223, 190);
          background-color: rgb(214, 251, 234);
        }
      }
    }
    .left {
      display: flex;
      flex-direction: column;
      & > p {
        color: #333;
        font-size: 14px;
      }
      & > div {
        display: flex;
        justify-content: space-between;
        font-weight: bold;
        margin: 10px 0;
        span {
          display: flex;
          align-items: center;
          font-size: 12px;
          padding: 2px 7px;
          border-radius: 5px;
          
        }
      }
      & > span {
        color: gray;
        font-size: 12px;
      }
    }
    .right {
      width: 210px;
      height: 100%;
      @media screen and (max-width: 1400px) {
        height: 80px;
        margin-top: 30px;
        display: flex;
      }
    }
  }
}

.info {
  display: flex;
  margin-top: 50px;
  min-height: 350px;
  align-items: flex-start;
  &-site {
    width: 350px;
    min-width: 350px;
    &--block {
      padding: 15px;
      box-shadow: 0 0 3px #ddd;
      border-radius: 5px;
      background-color: rgb(252, 251, 255);
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
      background-color: rgb(252, 251, 255);
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
      box-shadow: 0 0 5px #ddd;
    }

    &--top {
      display: flex;
      justify-content: space-between;
    }
    &--title {
      color: rgb(75, 64, 147);
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
  &-charts {
    flex: 1;
    display: flex;
    .line-charts, .pie-charts {
      flex: 1;
      padding: 15px;
      min-height: 350px;
      margin-left: 30px;
      border-radius: 5px;
      box-shadow: 0 0 5px #ddd;
    }
  }
}
</style>