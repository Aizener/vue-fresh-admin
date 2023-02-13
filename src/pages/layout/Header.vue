<script setup lang="ts">
import router from '@/router';
import { useMainStore } from '@/store/main';

const mainStore = useMainStore();
const handleToggleAside = () => {
  mainStore.updateValue('collapse', !mainStore.collapse);
}
const handleShowDrawer = () => {
  mainStore.updateValue('showDrawer', true);
}
const handleLogout = async () => {
  await mainStore.logout();
  router.push('/login');
}
</script>

<template>
  <div class="header">
    <el-icon size="24px" class="header-left" @click="handleToggleAside">
      <Fold color="#333" v-show="!mainStore.collapse" />
      <Expand color="#333" v-show="mainStore.collapse" />
    </el-icon>
    <div class="header-right">
      <div class="info">
        <div class="avatar">
          <el-icon><User /></el-icon>
        </div>
        
        <el-popover
          placement="bottom"
          trigger="hover"
        >
          <template #reference>
            <span>管理员</span>
          </template>
          <template #default>
            <div class="user-menu--item" @click="handleLogout">
              <span>退出登录</span>
              <el-icon><Promotion /></el-icon>
            </div>
          </template>
        </el-popover>
      </div>
      <div class="info" @click="handleShowDrawer">
        <el-icon><Grid /></el-icon>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user-menu--item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid #999;
  }
}
.header {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &-left {
    cursor: pointer;
    user-select: none;
  }
  &-right {
    display: flex;
    align-items: center;
    .info {
      display: flex;
      align-items: center;
      background-color: var(--co-bg-color-block);
      border: 1px solid #eee;
      padding: 8px 10px;
      border-radius: 5px;
      margin: 0 5px;
      cursor: pointer;
      .avatar {
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      span {
        color: #333;
        font-size: 12px;
        margin-left: 8px;
      }
    }
  }
}
</style>