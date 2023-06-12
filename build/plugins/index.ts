import vue from '@vitejs/plugin-vue';
import printUrls from 'vite-plugin-print-urls';
import compression from 'vite-plugin-compression';
import html from './html';
import autoImport from './auto-import';
import legacy from './legacy';

/**
 * 配置 vite 插件
 * @param viteEnv - vite 环境变量
 * @returns
 */
export const setupVitePlugins = (viteEnv: ImportMetaEnv) => {
    let plugins = [vue(), printUrls(), html(viteEnv), autoImport()];

    if (viteEnv.VITE_LEGACY === 'Y') {
        plugins.push(legacy());
    }

    if (viteEnv.VITE_COMPRESSION === 'Y') {
        plugins.push(compression());
    }

    return plugins;
};
