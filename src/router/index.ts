import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@/layout/basic/Main.vue';
import BasicContainer from '@/layout/basic/BasicContainer.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'FrontEnd' },
      component: Layout,
      children: [
        /** 前端相关组件 */
        {
          path: 'front-end',
          name: 'FrontEnd',
          component: BasicContainer,
          redirect: { name: 'FullpageScroll' },
          children: [
            {
              path: 'fullpage-scroll',
              name: 'FullpageScroll',
              component: () => import('@/views/front-end/FullpageScroll.vue'),
            },
          ],
        },
        /** ecahrts 相关组件 */
        {
          path: 'echarts',
          name: 'Echarts',
          component: BasicContainer,
          redirect: { name: 'Calendar' },
          children: [
            {
              path: 'calendar',
              name: 'Calendar',
              component: () => import('@/views/echarts/Calendar.vue'),
            },
          ],
        },
        /** 404 错误页面 */
        {
          path: '404',
          name: 'Error404',
          component: () => import('@/views/404.vue'),
        },
      ],
    },
    {
      path: '/:catchAll(.*)',
      redirect: { name: 'Error404' },
    },
  ],
});

export default router;
