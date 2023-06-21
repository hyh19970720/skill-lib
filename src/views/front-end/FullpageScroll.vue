<script lang="ts" setup>
import { FloatBadge, CodeBackground, DownloadGround } from '@/components';

/** 代码 */
const code = {
  html: `<div class="wrapper">
    <div class="page">1</div>
    <div class="page">2</div>
    <div class="page">3</div>
    <div class="page">4</div>
    <div class="page">5</div>
</div>`,
  css: `.wrapper {
    /* 宽高撑满视口 */
    height: 100vh;
    width: 100%;
    /* 添加关键属性 */
    scroll-snap-type: y mandatory;
    overflow-y: auto;
}
.page {
    /* 文字居中 */
    display: flex;
    align-items: center;
    justify-content: center;
    /* 宽高撑满视口 */
    height: 100%;
    width: 100%;
    /* 内容调整 */
    font-size: 50px;
    font-weight: bold;
    border: 2px solid #333;
    background-color: aliceblue;
    /* 添加关键属性 */
    scroll-snap-align: center;
}`,
};

/**
 * 生成随机颜色
 */
const randomColor = () => {
  let color = '#';
  for (let i = 0; i < 3; i++) {
    let num = Math.floor(Math.random() * 256).toString(16);
    color += num;
  }
  if (color.length < 7) {
    let dis = 7 - color.length;
    for (let i = 0; i < dis; i++) {
      color += 0;
    }
  }
  return color;
};
</script>

<template>
  <div class="fullpage-scroll">
    <FloatBadge>
      <template #principle>
        <pre class="principle-text">
        <p>使用CSS提供的<i>scroll-snap-type</i>和<i>scroll-snap-align</i>属性实现整页滚动。</p>
        <p>给父元素添加<i>scroll-snap-type: y mandatory;</i>属性，表示y轴强制整页滚动；给父元素添加<i>scroll-snap-type: x mandatory;</i>属性，表示x轴强制整页滚动。</p>
        <p>同时需要给子元素添加<i>scroll-snap-align</i>属性，来决定子元素整页滚动对齐方向，<i>start</i>代表对齐父元素开始位置，<i>center</i>代表中心对齐，<i>end</i>代表对齐父元素结束位置。</p>
      </pre>
      </template>
      <template #code>
        <CodeBackground :html="code.html" :css="code.css"></CodeBackground>
      </template>
      <template #download>
        <DownloadGround html="fullpageScroll"></DownloadGround>
      </template>
    </FloatBadge>
    <ul class="scroll-wrapper">
      <li v-for="i in 5" :key="i" :style="{ backgroundColor: randomColor() }">{{ i }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.fullpage-scroll {
  .scroll-wrapper {
    height: 100%;
    width: 100%;
    overflow-y: auto;
    scroll-snap-type: y mandatory;
    > li {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      font-size: 50px;
      color: #fff;
      scroll-snap-align: center;
    }
  }
}
</style>
