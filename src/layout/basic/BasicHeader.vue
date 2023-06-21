<script lang="ts" setup>
import Categories from './components/Categories.vue';
</script>

<template>
    <header class="basic-header">
        <Categories />
    </header>
</template>

<style lang="scss" scoped>
.basic-header {
    display: flex;
    align-items: center;
    height: $layout-header;
    padding: 0 32px;
    border-bottom: 1px solid $c-divider-light;
    user-select: none;
}
</style>
