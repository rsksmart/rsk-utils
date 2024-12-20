/**
 * @description Decodes a Base64-encoded string into its binary representation.
 * Equivalent to the `atob` function in browsers, but implemented using Node.js Buffer.
 *
 * @param {string} str - The Base64-encoded string to decode.
 * @returns {string} - The decoded string in binary format.
 */
export declare function atob(str: string): string;
/**
 * @description Encodes a binary string into Base64 format.
 * Equivalent to the `btoa` function in browsers, but implemented using Node.js Buffer.
 *
 * @param {string} base64 - The binary string to encode.
 * @returns {string} - The Base64-encoded string.
 */
export declare function btoa(base64: string): string;
/**
 * @description Encodes a JavaScript value into a Base64-encoded JSON string.
 * This is useful for serializing objects or data structures for transmission or storage.
 *
 * @param {any} value - The JavaScript value to encode (e.g., an object, array, or primitive).
 * @returns {string} - The Base64-encoded JSON string.
 */
export declare function jsonEncode(value: any): string;
/**
 * @description Decodes a Base64-encoded JSON string into a JavaScript value.
 * This function reverses the process of `jsonEncode`, converting the Base64 string back into its original object or data structure.
 *
 * @param {string} value - The Base64-encoded JSON string to decode.
 * @returns {any} - The decoded JavaScript value (e.g., an object, array, or primitive).
 */
export declare function jsonDecode(value: string): any;
/**
 * @description Converts a Base64-encoded string into a hexadecimal string.
 * Each byte of the Base64-decoded data is converted into a 2-character hex value.
 *
 * @param {string} base64 - The Base64-encoded string to convert.
 * @returns {string} - A hexadecimal string prefixed with `"0x"`.
 */
export declare function base64toHex(base64: string): string;
