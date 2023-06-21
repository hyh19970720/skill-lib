<script lang="ts" setup>
import BasicAside from './BasicAside.vue';
</script>

<template>
  <div class="basic-container">
    <BasicAside />
    <RouterView class="page-container" />
  </div>
</template>

<style lang="scss" scoped>
.basic-container {
  display: flex;
  height: calc(100vh - $layout-header);
  width: 100%;
  .page-container {
    position: relative;
    width: calc(100% - $layout-aside);
  }
}
</style>
