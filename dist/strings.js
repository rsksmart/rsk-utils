"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.isHexString = isHexString;exports.add0x = add0x;exports.stripHexPrefix = stripHexPrefix;exports.remove0x = remove0x; /**
                                                                                                                                                                                                         * @description Check if a string is hex string
                                                                                                                                                                                                         * @param {String} str
                                                                                                                                                                                                         * @returns {Boolean}
                                                                                                                                                                                                         */
function isHexString(str) {
  str = stripHexPrefix(str);
  return /^[0-9a-f]+$/i.test(str);
}

/**
   * @description Add '0x' at start of hex strings, honoring prefix
   * @param {String} str
   * @returns {String}
   */
function add0x(str) {
  if (typeof str !== 'string') throw new TypeError('str is not a string');
  let s = str;
  let prefix = s[0] === '-' ? '-' : '';
  if (prefix) s = s.substring(prefix.length);
  if (isHexString(s) && s.substring(0, 2) !== '0x') {
    return `${prefix}0x${s}`;
  }
  return str;
}

/**
   * @description remove 0x from start of string
   * @param {String} str
   * @returns {String}
   */
function stripHexPrefix(str) {
  if (typeof str !== 'string') throw new TypeError('str is not a string');
  return str.substring(0, 2) === '0x' ? str.substring(2) : str;
}

/**
   * @description Remove '0x' from hex strings, honoring prefix
   * @param {Any} value
   * @returns {Any} if value is hex string, {String} without '0x'
   */
function remove0x(value) {
  if (typeof value !== 'string') return value;
  if (value === '0x') return '';
  let s = `${value}`;
  let prefix = s[0] === '-' ? '-' : '';
  if (prefix) s = s.substring(prefix.length);
  if (isHexString(s)) {
    if (s.substring(0, 2) === '0x') return prefix + s.substr(2);
  }
  return value;
}