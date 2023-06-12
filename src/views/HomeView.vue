<script lang="ts" setup>
import { useGlobalStore } from '@/stores/global';
import { encrypt, decrypto } from '@/utils';
import { testRequest } from '@/services/api/test';

const { userInfo } = useGlobalStore();

const ciphertext = ref(encrypt(userInfo.userId));
const plaintext = computed(() => decrypto(ciphertext.value));

async function init() {
    const res = await testRequest({});
    console.log('✨[res]', res);
}
init();
</script>

<template>
    <div class="home-view">
        <p>用户名称: {{ userInfo.userName }}</p>
        <p>用户id明文: {{ plaintext }}</p>
        <p>用户id密文: {{ ciphertext }}</p>
    </div>
</template>

<style lang="scss" scoped>
.home-view {
    font-size: 18px;
    font-weight: 700;
}
</style>
