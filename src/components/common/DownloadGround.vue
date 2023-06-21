<script lang="ts" setup>
import { HTMLIcon } from '../icons';
import { Props } from './test';

defineProps<Props>();

const download = (fileName: string) => {
  let url = `http://localhost:9527/lib/${fileName}`;
  let link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  link.style.display = 'none';
  link.click();
};
</script>

<template>
  <div class="download-ground">
    <header class="dowunload-desc">选择文件，点击下载。</header>
    <ul class="download-list">
      <li v-if="html" @click="download(html + '.html')">
        <HTMLIcon class="svg-icon" />
        {{ html }}.html
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.download-ground {
  width: 100%;
  .dowunload-desc {
    font-size: 16px;
    padding-bottom: 20px;
  }
  .download-list {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    padding: 0 10%;
    > li {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 16px;
      font-size: 18px;
      border-radius: $s-border-radius-s;
      cursor: pointer;
      user-select: none;
      transition: all 0.2s ease-in-out;
      &:hover {
        background-color: $c-hover-bg;
        transform: scale(1.1);
      }
      .svg-icon {
        width: 100px;
        height: 100px;
        margin-bottom: 16px;
      }
    }
  }
}
</style>
