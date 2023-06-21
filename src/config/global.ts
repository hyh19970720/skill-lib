/** 分类列表 */
export const categories: Array<Category> = [
  {
    txt: '前端',
    pn: 'FrontEnd',
    disabled: false,
  },
  {
    txt: 'Echarts',
    pn: 'Echarts',
    disabled: false,
  },
  {
    txt: '更多待续...',
    disabled: true,
  },
];

/** 组件列表 */
export const asideMenuList = {
  FrontEnd: [
    {
      txt: '整页滚动',
      path: 'fullpage-scroll',
    },
    {
      txt: '回到顶部',
      path: 'back-to-top',
    },
  ],
  Echarts: [
    {
      txt: '日历',
      path: 'calendar',
    },
  ],
};
