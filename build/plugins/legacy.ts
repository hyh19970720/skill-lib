import legacy from '@vitejs/plugin-legacy';

/**
 * 向下兼容传统浏览器
 */
export default () => {
    return legacy({
        targets: ['Chrome >= 79', 'ie >= 11'],
        // 添加额外（除core-js以外）的polyfill
        additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
        // 是否编译传统代码，会编译一份支持传统浏览器（非esm）的代码
        renderLegacyChunks: true,
    });
};
