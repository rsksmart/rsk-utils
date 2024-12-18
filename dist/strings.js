"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHexString = isHexString;
exports.add0x = add0x;
exports.hasHexPrefix = hasHexPrefix;
exports.stripHexPrefix = stripHexPrefix;
exports.remove0x = remove0x;
exports.isTxOrBlockHash = isTxOrBlockHash;
var HEX_PREFIX = '0x';
/**
 * @description Checks if a given string is the hex prefix (`"0x"`).
 *
 * @param {string} str - The string to check.
 * @returns {boolean} - Returns true if the string is exactly `"0x"`, false otherwise.
 */
function isHexPrefix(str) {
    return str === HEX_PREFIX;
}
/**
 * @description Validates that a value is of type string. Throws an error if the value is not a string.
 *
 * @param {any} value - The value to validate.
 * @throws {TypeError} - Throws an error if the value is not a string.
 */
function checkString(value) {
    if (typeof value !== 'string')
        throw new TypeError('str is not a string');
}
/**
 * @description Checks if a given string is a valid hexadecimal string.
 * Hexadecimal strings may optionally start with the `"0x"` prefix.
 *
 * @param {string} str - The string to validate as a hexadecimal string.
 * @returns {boolean} - Returns true if the string is valid hexadecimal, false otherwise.
 */
function isHexString(str) {
    str = stripHexPrefix(str);
    return /^[0-9a-f]+$/i.test(str);
}
/**
 * @description Adds the `"0x"` prefix to a valid hexadecimal string, if not already present.
 * Honors negative prefixes (e.g., `"-0x"` for negative hex values).
 *
 * @param {string} str - The string to which the `"0x"` prefix will be added.
 * @returns {string} - The hexadecimal string with the `"0x"` prefix.
 * @throws {TypeError} - Throws an error if the input is not a string.
 */
function add0x(str) {
    checkString(str);
    var s = str;
    var prefix = (s.startsWith('-')) ? '-' : '';
    if (prefix)
        s = s.substring(prefix.length);
    if (isHexString(s) && !s.startsWith(HEX_PREFIX)) {
        return "".concat(prefix).concat(HEX_PREFIX).concat(s);
    }
    return str;
}
/**
 * @description Checks if a string starts with the `"0x"` prefix, indicating a hexadecimal string.
 *
 * @param {string} str - The string to check for the `"0x"` prefix.
 * @returns {boolean} - Returns true if the string starts with `"0x"`, false otherwise.
 * @throws {TypeError} - Throws an error if the input is not a string.
 */
function hasHexPrefix(str) {
    checkString(str);
    return str.startsWith(HEX_PREFIX);
}
/**
 * @description Removes the `"0x"` prefix from a hexadecimal string, if present.
 *
 * @param {any} str - The string to strip of its `"0x"` prefix.
 * @returns {string} - The string without the `"0x"` prefix.
 * @throws {TypeError} - Throws an error if the input is not a string.
 */
function stripHexPrefix(str) {
    if (typeof str !== 'string')
        throw new TypeError('str is not a string');
    return hasHexPrefix(str) ? str.substring(HEX_PREFIX.length) : str;
}
/**
 * @description Removes the `"0x"` prefix from a valid hexadecimal string, if present.
 * Honors negative prefixes (e.g., `"-0x"` for negative hex values).
 *
 * @param {any} value - The value to process. If it is not a string, the value is returned unchanged.
 * @returns {any} - If the value is a hex string, returns the string without the `"0x"` prefix. Otherwise, returns the input value unchanged.
 */
function remove0x(value) {
    if (typeof value !== 'string')
        return value;
    if (isHexPrefix(value))
        return '';
    var s = "".concat(value);
    var prefix = (s.startsWith('-')) ? '-' : '';
    if (prefix)
        s = s.substring(prefix.length);
    if (isHexString(s)) {
        if (hasHexPrefix(s))
            return prefix + stripHexPrefix(s);
    }
    return value;
}
/**
 * @description Checks if a string is a valid transaction hash or block hash.
 * A valid hash is a 64-character hexadecimal string, optionally prefixed with `"0x"`,
 * and must represent a number greater than zero.
 *
 * @param {string} str - The string to validate as a transaction or block hash.
 * @returns {boolean} - Returns true if the string is a valid transaction or block hash, false otherwise.
 */
function isTxOrBlockHash(str) {
    return parseInt(str) > 0 && /^(0x)?[0-9a-f]{64}$/.test(str);
}
