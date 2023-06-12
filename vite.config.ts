import { defineConfig, loadEnv } from 'vite';
import { setupVitePlugins, setupViteProxy, getPrimaryPath } from './build';
import proxyConfig from './proxy.config';

// 官方文档 https://vitejs.dev/config/
export default defineConfig(config => {
    const viteEnv = loadEnv(config.mode, process.cwd()) as unknown as ImportMetaEnv;

    return {
        base: viteEnv.VITE_BASE_URL,
        plugins: setupVitePlugins(viteEnv),
        resolve: {
            // 配置别名
            alias: {
                '@': getPrimaryPath(),
            },
        },
        css: {
            // 预处理器配置项
            preprocessorOptions: {
                scss: {
                    additionalData: `
                        @import "./src/styles/variable.scss";
                        @import "./src/styles/mixin.scss";
                    `,
                },
            },
        },
        server: {
            // 是否开启host服务，如果开启，可以通过ip访问服务
            host: false,
            // 本地服务端口号
            port: 9527,
            // 严格执行端口号，如果被占用则抛出异常
            strictPort: true,
            // 是否自动打开浏览器
            open: false,
            // 本地代理
            proxy: setupViteProxy(proxyConfig),
        },
    };
});
