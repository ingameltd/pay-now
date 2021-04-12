import crypto from 'crypto';

/**
 * Stringify an object with 4 spaces
 *
 * @export
 * @param {object} obj
 * @returns
 */
export function jsonStringify (obj: object) {
    return JSON.stringify(obj, null, 4)
}

/**
 * Calculate HMAC
 *
 * @export
 * @param {string} key
 * @param {string} data
 * @returns {string}
 */
export function calculateHmac (key: string, data: string): string {
    return crypto
        .createHmac('sha256', key)
        .update(data, 'utf8')
        .digest('base64')
}