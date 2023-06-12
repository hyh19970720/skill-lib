import type { ProxyOptions } from 'vite';

/**
 * 配置本地网络代理
 * @param proxyConfig - 本地代理配置
 */
export const setupViteProxy = (proxyConfig: Array<ServiceEnvConfig>) => {
    const proxy = proxyConfig.reduce(
        (acc, cur) =>
            Object.assign(acc, {
                [cur.urlPattern]: {
                    target: cur.url,
                    changeOrigin: true,
                    rewrite: path => path.replace(new RegExp(cur.urlPattern), cur.urlRewrite ?? ''),
                } as ProxyOptions,
            }),
        {} as Record<string, ProxyOptions>,
    );

    return proxy;
};
