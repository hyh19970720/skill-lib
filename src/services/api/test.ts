import { testHttp } from '@/services/request';

/**
 * 请求
 * @param params
 * @returns
 */
export const testRequest = (params: any) => testHttp.get('', { params });
