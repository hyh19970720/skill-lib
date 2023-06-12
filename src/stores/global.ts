import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('globalStore', () => {
    /** 用户信息 */
    const userInfo = reactive({
        userName: '测试',
        userId: 'test',
    });

    /**
     * 更新用户信息
     * @param info - 用户信息
     */
    function updateUserInfo(info: typeof userInfo) {
        for (let k in userInfo) {
            let key = k as keyof typeof userInfo;
            userInfo[key] = info[key];
        }
    }

    return {
        userInfo,
        updateUserInfo,
    };
});
