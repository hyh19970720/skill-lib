import { defineStore } from 'pinia';

export const useRouterStore = defineStore('routerStore', () => {
  const route = useRoute();

  /** 当前激活菜单的路由配置 */
  const activeMenuConfig = computed(() => route.matched[1]);

  return {
    activeMenuConfig,
  };
});
