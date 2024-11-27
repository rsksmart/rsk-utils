"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBuffer = toBuffer;
exports.bufferToHex = bufferToHex;
var strings_1 = require("./strings");
/**
 * @description Converts strings or numbers to buffer
 * @param {string|number|Buffer} value
 * @param {string} [encoding='hex']
 * @returns {Buffer}
 */
function toBuffer(value, encoding) {
    if (encoding === void 0) { encoding = 'hex'; }
    if (Buffer.isBuffer(value))
        return value;
    if (typeof value === 'number')
        value = value.toString();
    var strValue = (0, strings_1.remove0x)(value);
    if (!encoding && (0, strings_1.isHexString)(strValue))
        encoding = 'hex';
    return Buffer.from(strValue, encoding);
}
/**
 * @description Converts buffer to hex string
 * @param {Buffer} buffer
 * @returns {string}
 */
function bufferToHex(buffer) {
    return (0, strings_1.add0x)(buffer.toString('hex'));
}
