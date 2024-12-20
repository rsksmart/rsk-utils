"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.atob = atob;
exports.btoa = btoa;
exports.jsonEncode = jsonEncode;
exports.jsonDecode = jsonDecode;
exports.base64toHex = base64toHex;
/**
 * @description Decodes a Base64-encoded string into its binary representation.
 * Equivalent to the `atob` function in browsers, but implemented using Node.js Buffer.
 *
 * @param {string} str - The Base64-encoded string to decode.
 * @returns {string} - The decoded string in binary format.
 */
function atob(str) {
    return Buffer.from(str, 'base64').toString('binary');
}
/**
 * @description Encodes a binary string into Base64 format.
 * Equivalent to the `btoa` function in browsers, but implemented using Node.js Buffer.
 *
 * @param {string} base64 - The binary string to encode.
 * @returns {string} - The Base64-encoded string.
 */
function btoa(base64) {
    return Buffer.from(base64, 'binary').toString('base64');
}
/**
 * @description Encodes a JavaScript value into a Base64-encoded JSON string.
 * This is useful for serializing objects or data structures for transmission or storage.
 *
 * @param {any} value - The JavaScript value to encode (e.g., an object, array, or primitive).
 * @returns {string} - The Base64-encoded JSON string.
 */
function jsonEncode(value) {
    return btoa(JSON.stringify(value));
}
/**
 * @description Decodes a Base64-encoded JSON string into a JavaScript value.
 * This function reverses the process of `jsonEncode`, converting the Base64 string back into its original object or data structure.
 *
 * @param {string} value - The Base64-encoded JSON string to decode.
 * @returns {any} - The decoded JavaScript value (e.g., an object, array, or primitive).
 */
function jsonDecode(value) {
    return JSON.parse(atob(value));
}
/**
 * @description Converts a Base64-encoded string into a hexadecimal string.
 * Each byte of the Base64-decoded data is converted into a 2-character hex value.
 *
 * @param {string} base64 - The Base64-encoded string to convert.
 * @returns {string} - A hexadecimal string prefixed with `"0x"`.
 */
function base64toHex(base64) {
    let raw = atob(base64);
    return '0x' + [...new Array(raw.length)].map((c, i) => {
        let h = raw.charCodeAt(i).toString(16);
        return (h.length === 2) ? h : `0${h}`;
    }).join('').toLowerCase();
}
//# sourceMappingURL=encoding.js.map