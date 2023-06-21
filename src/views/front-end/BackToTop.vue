<script lang="ts" setup>
import { FloatBadge, CodeBackground, DownloadGround } from '@/components';

const scrollWrapper = ref();

/** 代码 */
const code = {
  html: `<div class="wrapper">
    <div class="page">1</div>
    <div class="page">2</div>
    <div class="page">3</div>
    <!-- 重复代码省略 -->
    <div class="page">98</div>
    <div class="page">99</div>
    <div class="page">100</div>
</div>
<div class="backBtn" onclick="back()">返回顶部</div>`,
  css: `.wrapper {
    /* 宽高撑满视口 */
    height: 100vh;
    width: 100%;
    overflow-y: auto;
    background-color: darkgray;
}
.inner {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    padding: 20px 0;
    border-bottom: 1px solid #ccc;
}
.backBtn {
    /* 按钮属性 */
    position: fixed;
    right: 80px;
    bottom: 80px;
    padding: 16px;
    border-radius: 40px;
    background-color: beige;
    user-select: none;
    cursor: pointer;
    outline: 2px solid yellowgreen;
}`,
  javascript: `function back() {
    // 获取容器对象
    let wrapper = document.getElementById('wrapper');
    // 使用原生支持的滚动属性，滚动到顶部，滚动行为设置为smooth
    wrapper.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}`,
};

const back = () => {
  scrollWrapper.value.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
</script>

<template>
  <div class="back-to-top">
    <FloatBadge>
      <template #principle>
        <pre class="principle-text">
        <p>使用HTML元素原生支持的<i>Element.scrollTo</i>属性来实现丝滑返回顶部效果。</p>
        <p>首先获取到<i>容器元素</i>（可以通过JS原生获取方法，也可以使用各类框架的伴生方法）。</p>
        <p>在<i>返回顶部</i>按钮被点击时，调用<i>容器元素</i>自带的<i>scrollTo</i>方法，该方法支持传入一个配置项对象。配置设置<i>top: 0</i>，表示滚动到距离顶部为0的距离；接着配置<i>behavior: 'smooth'</i>，表示滚动行为为丝滑滚动（另外两个参数可以自行尝试）。</p>
        <p>最后给返回顶部按钮添加事件即可实现丝滑滚动回到顶部效果。</p>
      </pre>
      </template>
      <template #code>
        <CodeBackground v-bind="code"></CodeBackground>
      </template>
      <template #download>
        <DownloadGround html="backToTop"></DownloadGround>
      </template>
    </FloatBadge>
    <ul class="scroll-wrapper" ref="scrollWrapper">
      <li v-for="item in 100" :key="item">{{ item }}</li>
    </ul>
    <div class="backBtn" @click="back">返回顶部</div>
  </div>
</template>

<style lang="scss" scoped>
.back-to-top {
  transform: scale(1);
  .scroll-wrapper {
    height: 100%;
    width: 100%;
    overflow-y: auto;
    background-color: wheat;
    > li {
      text-align: center;
      font-size: 20px;
      font-weight: bold;
      padding: 20px 0;
      border-bottom: 1px solid #ccc;
    }
  }
  .backBtn {
    position: fixed;
    right: 80px;
    bottom: 80px;
    padding: 16px;
    border-radius: 40px;
    background-color: beige;
    user-select: none;
    cursor: pointer;
    outline: 2px solid yellowgreen;
  }
}
</style>
