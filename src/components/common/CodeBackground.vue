<script lang="ts" setup>
import 'codemirror/mode/htmlembedded/htmlembedded.js';
import 'codemirror/mode/css/css.js';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/css/css.js';
import 'codemirror/theme/seti.css';
import Codemirror from 'codemirror-editor-vue3';
import type { CmComponentRef } from 'codemirror-editor-vue3';
import type { Editor, EditorConfiguration } from 'codemirror';

withDefaults(defineProps<{ html?: string; css?: string; javascript?: string }>(), {
  html: ``,
  css: ``,
  javascript: ``,
});

/** html 编辑器实例 */
const cmHtml = ref<CmComponentRef>();
/** css 编辑器实例 */
const cmCSS = ref<CmComponentRef>();
/** js 编辑器实例 */
const cmJavascript = ref<CmComponentRef>();

/** 编辑器配置项 */
const cmOptions: EditorConfiguration = {
  indentUnit: 4,
  tabSize: 4,
  smartIndent: true,
  lineNumbers: false,
  theme: 'seti',
  readOnly: true,
};

const codeChange = (code: string, instance: Editor, type: 'html' | 'css' | 'javascript') => {
  console.log('✨[code]', code);
};

onUnmounted(() => {
  cmHtml.value?.destroy();
  cmCSS.value?.destroy();
  cmJavascript.value?.destroy();
});
</script>

<template>
  <div class="code-background">
    <span style="left: 22px">HTML</span>
    <span style="left: calc(33% + 22px)">CSS</span>
    <span style="left: calc(66% + 22px)">JavaScript</span>
    <Codemirror
      :value="html"
      :options="{ ...cmOptions, mode: 'htmlembedded' }"
      ref="cmHtml"
      @change="(code, instance) => codeChange(code, instance, 'html')"
    />
    <Codemirror
      :value="css"
      :options="{ ...cmOptions, mode: 'css' }"
      ref="cmCSS"
      @change="(code, instance) => codeChange(code, instance, 'css')"
    />
    <Codemirror
      :value="javascript"
      :options="{ ...cmOptions, mode: 'text/javascript' }"
      ref="cmJavascript"
      @change="(code, instance) => codeChange(code, instance, 'javascript')"
    />
  </div>
</template>

<style lang="scss" scoped>
.code-background {
  position: relative;
  display: flex;
  width: 100%;
  height: 60vh;
  padding: 36px 16px 16px;
  border-radius: $s-border-radius-m;
  background-color: rgb(40, 40, 40);
  > span {
    position: absolute;
    top: 8px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
  }
  > div {
    flex: 1;
    font-size: 16px;
    border-radius: $s-border-radius-s;
    &:not(:first-of-type) {
      margin-left: 12px;
    }
  }
}
</style>
