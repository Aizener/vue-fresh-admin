<script setup lang="ts">
const trend = $ref([
  { color: 'rgb(224, 144, 120)', data: [21, 16, 79, 52, 62, 79, 28] },
  { color: 'rgb(220, 217, 234)', data: [13, 48, 39, 57, 54, 31, 81] },
  { color: 'rgb(24, 223, 190)', data: [21, 33, 34, 53, 63, 72, 23] },
]);
</script>

<template>
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
</style>
