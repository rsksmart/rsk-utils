"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.isHexString = isHexString;exports.add0x = add0x;exports.hasHexPrefix = hasHexPrefix;exports.stripHexPrefix = stripHexPrefix;exports.remove0x = remove0x;const HEX_PREFIX = '0x';

function isHexPrefix(str) {
  return str === HEX_PREFIX;
}

function checkString(value) {
  if (typeof value !== 'string') throw new TypeError('str is not a string');
}

/**
   * @description Checks if a string is hex string
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
  checkString(str);
  let s = str;
  let prefix = s[0] === '-' ? '-' : '';
  if (prefix) s = s.substring(prefix.length);
  if (isHexString(s) && s.substring(0, 2) !== HEX_PREFIX) {
    return `${prefix}${HEX_PREFIX}${s}`;
  }
  return str;
}

/**
   * @description Checks if string is hex prefixed
   * @param {String} str
   * @returns {Boolean}
   */
function hasHexPrefix(str) {
  checkString(str);
  return str.substring(0, HEX_PREFIX.length) === HEX_PREFIX;
}

/**
   * @description remove 0x from start of string
   * @param {String} str
   * @returns {String}
   */
function stripHexPrefix(str) {
  if (typeof str !== 'string') throw new TypeError('str is not a string');
  return hasHexPrefix(str) ? str.substring(HEX_PREFIX.length) : str;
}

/**
   * @description Remove '0x' from hex strings, honoring prefix
   * @param {Any} value
   * @returns {Any} if value is hex string, {String} without '0x'
   */
function remove0x(value) {
  if (typeof value !== 'string') return value;
  if (isHexPrefix(value)) return '';
  let s = `${value}`;
  let prefix = s[0] === '-' ? '-' : '';
  if (prefix) s = s.substring(prefix.length);
  if (isHexString(s)) {
    if (hasHexPrefix(s)) return prefix + stripHexPrefix(s);
  }
  return value;
}