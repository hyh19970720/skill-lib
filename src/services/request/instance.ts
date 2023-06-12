import axios, { AxiosRequestConfig } from 'axios';

/**
 * 创建axios请求实例
 * @param axiosConfig - axios配置
 * @returns
 */
export function createInstance(axiosConfig?: AxiosRequestConfig) {
    const instance = axios.create(axiosConfig);

    /**
     * get 请求
     * @param url - 请求地址
     * @param config - 请求的axios配置
     * @returns
     */
    function get(url: string, config?: AxiosRequestConfig) {
        return instance.get(url, config);
    }

    /**
     * post 请求
     * @param url - 请求地址
     * @param data - 请求的body的data参数
     * @param config - 请求的axios配置
     * @returns
     */
    function post(url: string, data?: any, config?: AxiosRequestConfig) {
        return instance.post(url, data, config);
    }

    /**
     * put 请求
     * @param url - 请求地址
     * @param data - 请求的body的data参数
     * @param config - 请求的axios配置
     * @returns
     */
    function put(url: string, data?: any, config?: AxiosRequestConfig) {
        return instance.put(url, data, config);
    }

    /**
     * delete 请求
     * @param url - 请求地址
     * @param config - 请求的axios配置
     * @returns
     */
    function handleDelete(url: string, config?: AxiosRequestConfig) {
        return instance.delete(url, config);
    }

    return {
        instance,
        get,
        post,
        put,
        delete: handleDelete,
    };
}
