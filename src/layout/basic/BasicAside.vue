<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { asideMenuList } from '@/config';
import { useRouterStore } from '@/stores/router';

const route = useRoute();
const router = useRouter();
const { activeMenuConfig } = storeToRefs(useRouterStore());

/** 默认选中的侧边栏菜单 */
const defaultActive = computed(() => route.fullPath.split('/')[2]);
/** 侧边栏菜单列表 */
const list = computed(() =>
  route.name ? asideMenuList[activeMenuConfig.value.name as keyof typeof asideMenuList] : [],
);

/**
 * 点击侧边栏切换页面
 * @param path 页面路由
 * @param pathList 路由列表
 */
const handleSelect = (path: string, pathList: Array<string>) => {
  let p = `${activeMenuConfig.value.path}/${pathList.join('/')}`;
  router.push(p);
};
</script>

<template>
  <ElMenu class="basic-aside" :default-active="defaultActive" @select="handleSelect">
    <ElMenuItem v-for="item in list" :key="item.path" :index="item.path">{{ item.txt }}</ElMenuItem>
  </ElMenu>
</template>

<style lang="scss" scoped>
.basic-aside {
  width: $layout-aside;
  height: 100%;
  user-select: none;
}
</style>
