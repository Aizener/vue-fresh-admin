<script setup lang="ts">
import { useRouterStore } from '@/store/router';
import { storeToRefs } from 'pinia';

const router = useRouter();
const route = useRoute();
const routerStore = useRouterStore();
const { routes } = storeToRefs(routerStore);

const handleTurn = (route: TabRoute) => {
  router.replace(route.path);
}
const handleRemove = (route: TabRoute, idx: number) => {
  const _routes = [...routerStore.routes];
  _routes.splice(idx, 1);
  routerStore.updateValue('routes', _routes);
  // 如果移除的是当前最新显示的页面，则需要返回到上一级
  if (_routes.length === idx) {
    router.go(-1);
  }
}
</script>

<template>
  <div class="router-tab">
    <transition-group name="move">
      <div
        class="router-tab--item"
        :class="{ active: route.path === item.path }"
        v-for="(item, idx) in routes"
        :key="item.path"
        @click="handleTurn(item)"
      >
        <span>{{ item.name }}</span>
        <el-icon @click.stop="handleRemove(item, idx)"><CircleClose /></el-icon>
      </div>
    </transition-group>
  </div>
</template>

<style lang="scss" scoped>
@mixin active-style {
  color: #fff;
  border-color: transparent;
  background-color: var(--co-primary-color);
}
.router-tab {
  position: absolute;
  left: 0; top: 0;
  width: 100%;
  display: flex;
  padding: 5px 10px;
  border-bottom: 1px solid #eee;
  user-select: none;
  overflow-x: hidden;
  &::-webkit-scrollbar{
    height: 7px;
  }
  &:hover {
    overflow-x: auto;
  }
  &--item {
    color: gray;
    font-size: 12px;
    height: 24px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 3px;
    margin-right: 15px;
    flex-shrink: 0;
    cursor: pointer;
    &.active {
      @include active-style;
    }
    &:last-child {
      margin-right: 0;
    }
    &:hover {
      @include active-style;
    }
    span {
      margin-right: 5px;
    }
  }
}

.move-enter-from, .move-enter-leave {
  opacity: 0;
  transform: translateY(10px);
}
.move-enter-active, .move-leave-active, .move-move {
  transition: transform .3s;
}
.move-leave-active {
  opacity: 0;
  position: absolute;
}
</style>
