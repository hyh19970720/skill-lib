<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { categories } from '@/config';
import { useRouterStore } from '@/stores/router';
import { AngleDown } from '@/components/icons';

const router = useRouter();
const { activeMenuConfig } = storeToRefs(useRouterStore());

/** 当前激活的菜单 */
const activeMenu = computed(() => activeMenuConfig.value.name);

/**
 * 切换菜单
 * @param pn - 路由名称
 */
const changeMenu = (pn?: string) => {
  router.push({ name: pn });
};
</script>

<template>
  <div class="categories">
    <section v-for="item in categories" :key="item.pn">
      <template v-if="item.children?.length">
        <ElDropdown :disabled="item.disabled">
          <span :class="['drop-down-text', { active: activeMenu === item.pn }, { disabled: item.disabled }]">
            {{ item.txt }} <AngleDown class="angle-down" />
          </span>
          <template #dropdown>
            <ElDropdownMenu>
              <ElDropdownItem v-for="it in item.children" :key="it.pn" :disabled="it.disabled">
                <span
                  :class="['drop-down-text', { active: activeMenu === item.pn }, { disabled: it.disabled }]"
                  @click="changeMenu(item.pn)"
                >
                  {{ it.txt }}
                </span>
              </ElDropdownItem>
            </ElDropdownMenu>
          </template>
        </ElDropdown>
      </template>
      <template v-else>
        <span
          :class="['drop-down-text', { active: activeMenu === item.pn }, { disabled: item.disabled }]"
          @click="changeMenu(item.pn)"
        >
          {{ item.txt }}
        </span>
      </template>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.categories {
  display: flex;
  align-items: center;
  margin-left: auto;
  section {
    display: flex;
    padding: 0 12px;
  }
  .drop-down-text {
    display: flex;
    align-items: center;
    padding: 6px 0;
    font-size: 16px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
    &.active {
      color: $c-text-active;
    }
    &.disabled {
      cursor: not-allowed;
      color: $c-text-disabled;
      &:hover {
        opacity: 1;
      }
    }
    .angle-down {
      width: 12px;
      height: 12px;
      margin-left: 6px;
    }
  }
}
</style>
