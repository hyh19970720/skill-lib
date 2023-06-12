import CryptoJS from 'crypto-js';

/** 加密秘钥 */
const CRYPTO_SECRET_KEYS = import.meta.env.VITE_CACHE_SECRET_KEYS;

/**
 * 加密数据
 * @param data - 数据
 * @returns
 */
export function encrypt(data: any) {
    const dataJson = JSON.stringify(data);
    return CryptoJS.AES.encrypt(dataJson, CRYPTO_SECRET_KEYS).toString();
}

/**
 * 解密数据
 * @param ciphertext - 密文
 * @returns
 */
export function decrypto(ciphertext: string) {
    const bytes = CryptoJS.AES.decrypt(ciphertext, CRYPTO_SECRET_KEYS);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    if (originalText) {
        return originalText;
    }
    return null;
}
