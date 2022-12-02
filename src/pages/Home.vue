<script setup lang="ts">
const trend = $ref([
  { color: 'rgb(224, 144, 120)', data: [21, 16, 79, 52, 62, 79, 28] },
  { color: 'rgb(220, 217, 234)', data: [13, 48, 39, 57, 54, 31, 81] },
  { color: 'rgb(24, 223, 190)', data: [21, 33, 34, 53, 63, 72, 23] },
]);
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
    display: flex;
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
      margin-left: 30px;
    }
  }
}
</style>