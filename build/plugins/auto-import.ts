import autoImport from 'unplugin-auto-import/vite';
import component from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { getPrimaryPath } from '../utils';

/**
 * 自动导入模块，在使用时无需在进行手动import导入模块
 */
export default () => {
    return [
        autoImport({
            // 自动解析的模块
            resolvers: [ElementPlusResolver()],
            // 自动引入的模块
            imports: ['vue', 'vue-router'],
            // 声明文件输出目录
            dts: getPrimaryPath() + '/typings/auto-imports.d.ts',
        }),
        component({
            // 自动解析的模块
            resolvers: [ElementPlusResolver()],
            // 声明文件输出目录
            dts: getPrimaryPath() + '/typings/components.d.ts',
        }),
    ];
};
