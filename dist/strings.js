"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHexString = isHexString;
exports.add0x = add0x;
exports.hasHexPrefix = hasHexPrefix;
exports.stripHexPrefix = stripHexPrefix;
exports.remove0x = remove0x;
exports.isTxOrBlockHash = isTxOrBlockHash;
var HEX_PREFIX = '0x';
function isHexPrefix(str) {
    return str === HEX_PREFIX;
}
function checkString(value) {
    if (typeof value !== 'string')
        throw new TypeError('str is not a string');
}
/**
 * @description Checks if a string is hex string
 * @param {string} str
 * @returns {boolean}
 */
function isHexString(str) {
    str = stripHexPrefix(str);
    return /^[0-9a-f]+$/i.test(str);
}
/**
 * @description Add '0x' at start of hex strings, honoring prefix
 * @param {string} str
 * @returns {string}
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
 * @description Checks if string is hex prefixed
 * @param {string} str
 * @returns {boolean}
 */
function hasHexPrefix(str) {
    checkString(str);
    return str.startsWith(HEX_PREFIX);
}
/**
 * @description remove 0x from start of string
 * @param {any} str
 * @returns {string}
 */
function stripHexPrefix(str) {
    if (typeof str !== 'string')
        throw new TypeError('str is not a string');
    return (hasHexPrefix(str)) ? str.substring(HEX_PREFIX.length) : str;
}
/**
 * @description Remove '0x' from hex strings, honoring prefix
 * @param {any} value
 * @returns {any} if value is hex string, {string} without '0x'
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
 * @description Checks if a string is a tx or block hash
 * @param {string} str
 * @returns {Boolean}'
 */
function isTxOrBlockHash(str) {
    return parseInt(str) > 0 && /^(0x)?[0-9a-f]{64}$/.test(str);
}
