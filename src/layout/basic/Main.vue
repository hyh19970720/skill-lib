<script lang="ts" setup>
import BasicHeader from './BasicHeader.vue';
</script>

<template>
  <div class="layout">
    <BasicHeader />
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.layout {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
