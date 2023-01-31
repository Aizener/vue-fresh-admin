<script setup lang="ts">

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
    <div class="card">
      <div class="card-head">
        <el-icon size="20px" color="rgb(81, 69, 159)"><HelpFilled /></el-icon>
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
    box-shadow: var(--co-shadow-default);
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
    &:nth-child(4) {
      background: linear-gradient(145deg, rgb(150, 208, 218), rgb(196, 226, 213), rgb(196, 226, 213));
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
</style>
