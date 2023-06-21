<script lang="ts" setup>
import { Code, Principle, Download } from '../icons';

/** 工具图标列表 */
const badgeList = {
  principle: {
    component: Principle,
  },
  code: {
    component: Code,
  },
  download: {
    component: Download,
  },
};

/** 模态框是否展示 */
const dialogConfig = reactive({
  code: {
    visible: false,
    title: '代码实例',
  },
  principle: {
    visible: false,
    title: '原理解析',
    width: '40%',
  },
  download: {
    visible: false,
    title: '示例下载',
    width: '40%',
  },
});

/**
 * 处理按钮点击事件
 * @param badge - 模态框名称
 * @param status - 模态框状态
 */
const handleBadgeClick = (badge: keyof typeof badgeList, status: boolean) => {
  dialogConfig[badge].visible = status;
};
</script>

<template>
  <div class="float-badge">
    <ul class="badge-list">
      <template v-for="(item, key) in badgeList" :key="key">
        <li v-if="$slots[key]" @click="handleBadgeClick(key, true)">
          <component class="svg-icon" :is="item.component" />
        </li>
      </template>
    </ul>

    <ElDialog v-for="(val, key, index) in dialogConfig" :key="index" v-model="dialogConfig[key].visible" v-bind="val">
      <slot :name="key"></slot>
    </ElDialog>
  </div>
</template>

<style lang="scss" scoped>
.float-badge {
  .badge-list {
    position: absolute;
    top: 36px;
    right: 36px;
    padding: 6px;
    border-radius: 30px;
    backdrop-filter: blur(30px);
    background-color: #ffffff80;
    user-select: none;
    > li {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2px 0;
      cursor: pointer;
      transition: transform 0.2s linear;
      &:hover {
        transform: scale(1.2);
      }
      .svg-icon {
        flex-shrink: 0;
        width: 40px;
        height: 40px;
      }
    }
  }
}
</style>
