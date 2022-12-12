<script setup lang="ts">
import Prism from 'prismjs';

const {
  lang,
  code
} = defineProps<{
  lang: string,
  code: Record<string, any>
}>();

watch(code, async () => {
  console.log(111)
  await nextTick();
  Prism.highlightAll();
}, { immediate: true });
</script>

<template>
  <pre><code :class="`language-${lang}`">{{ code }}</code></pre>
</template>

<style lang="scss" scoped>

</style>