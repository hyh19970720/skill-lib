import { AxiosError } from 'axios';
import { createInstance } from './instance';

/** 创建一个实例 */
const testHttp = createInstance({
    baseURL: import.meta.env.DEV ? '/dev-api' : '',
});

/** 设置请求拦截 */
testHttp.instance.interceptors.request.use(
    config => {
        return config;
    },
    (axiosError: AxiosError) => {
        return axiosError;
    },
);

/** 设置响应拦截 */
testHttp.instance.interceptors.response.use(
    response => {
        return response;
    },
    (axiosError: AxiosError) => {
        return axiosError;
    },
);

export { testHttp };
