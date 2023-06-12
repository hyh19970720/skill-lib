import { createHtmlPlugin } from 'vite-plugin-html';

/**
 * 创建 html，注入参数
 * @param viteEnv - vite 环境变量
 * @returns
 */
export default (viteEnv: ImportMetaEnv) => {
    return createHtmlPlugin({
        // 最小化
        minify: true,
        // 注入参数
        inject: {
            data: {
                appName: viteEnv.VITE_APP_NAME,
                appTitle: viteEnv.VITE_APP_TITLE,
            },
        },
    });
};
