<script setup lang="ts">
const router = useRouter();
const { menu } = defineProps<{
  menu: Menu,
}>();

const handleClickItem = async (item: MenuItem) => {
  if (item.isLink) {
    window.open(item.index);
  } else {
    router.push(item.index);
  }
}
</script>

<template>
  <template
    v-for="(item, idx) in menu"
  >
    <el-sub-menu
      v-if="item.children?.length"
      :index="item.index"
    >
      <template #title>
        <el-icon>
          <component :is="item.icon"></component>
        </el-icon>
        <span>{{ item.title }}</span>
      </template>
      <AsideMenu :menu="item.children"></AsideMenu>
    </el-sub-menu>
    <el-menu-item
      v-else
      :index="item.index"
      @click="handleClickItem(item)"
    >
      <el-icon>
        <component :is="item.icon"></component>
      </el-icon>
      <span>{{ item.title }}</span>
    </el-menu-item>
  </template>
</template>

<style lang="scss" scoped>
</style>
