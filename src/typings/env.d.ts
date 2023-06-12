// 后台服务的环境配置
interface ServiceEnvConfig {
    /** 请求地址 */
    url: string;
    /** 匹配路径的正则字符串, 用于拦截地址转发代理(任意以 /开头 + 字符串, 单个/不起作用) */
    urlPattern: string;
    /** 替换字符串 */
    urlRewrite?: string;
}

// Vite全局变量
interface ImportMetaEnv {
    /** 项目基本地址 */
    readonly VITE_BASE_URL: string;
    /** 项目名称 */
    readonly VITE_APP_NAME: string;
    /** 项目标题 */
    readonly VITE_APP_TITLE: string;
    /** 本地缓存的加密秘钥 */
    readonly VITE_CACHE_SECRET_KEYS: string;

    /** 向下兼容传统浏览器 */
    readonly VITE_LEGACY: 'Y' | 'N';
    /** 开启gzip压缩 */
    readonly VITE_COMPRESSION: 'Y' | 'N';
}
