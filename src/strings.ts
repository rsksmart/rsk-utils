const HEX_PREFIX = '0x';

function isHexPrefix(str: string): boolean {
  return str === HEX_PREFIX;
}

function checkString(value: any): void {
  if (typeof value !== 'string') throw new TypeError('str is not a string');
}

/**
 * @description Checks if a string is hex string
 * @param {string} str
 * @returns {boolean}
 */
export function isHexString(str: string): boolean {
  str = stripHexPrefix(str);
  return /^[0-9a-f]+$/i.test(str);
}

/**
 * @description Add '0x' at start of hex strings, honoring prefix
 * @param {string} str
 * @returns {string}
 */
export function add0x(str: string): string {
  checkString(str);
  let s = str;
  let prefix = (s.startsWith('-')) ? '-' : '';
  if (prefix) s = s.substring(prefix.length);
  if (isHexString(s) && !s.startsWith(HEX_PREFIX)) {
    return `${prefix}${HEX_PREFIX}${s}`;
  }
  return str
}

/**
 * @description Checks if string is hex prefixed
 * @param {string} str
 * @returns {boolean}
 */
export function hasHexPrefix(str: string): boolean {
  checkString(str);
  return str.startsWith(HEX_PREFIX);
}

/**
 * @description remove 0x from start of string
 * @param {any} str
 * @returns {string}
 */
export function stripHexPrefix(str: any): string {
  if (typeof str !== 'string') throw new TypeError('str is not a string');
  return (hasHexPrefix(str)) ? str.substring(HEX_PREFIX.length) : str;
}

/**
 * @description Remove '0x' from hex strings, honoring prefix
 * @param {any} value
 * @returns {any} if value is hex string, {string} without '0x'
 */
export function remove0x(value: any): any {
  if (typeof value !== 'string') return value;
  if (isHexPrefix(value)) return '';
  let s = `${value}`;
  let prefix = (s.startsWith('-')) ? '-' : '';
  if (prefix) s = s.substring(prefix.length);
  if (isHexString(s)) {
    if (hasHexPrefix(s)) return prefix + stripHexPrefix(s);
  }
  return value;
}

/**
 * @description Checks if a string is a tx or block hash
 * @param {string} str
 * @returns {Boolean}'
 */
export function isTxOrBlockHash (str: string): boolean {
  return parseInt(str) > 0 && /^(0x)?[0-9a-f]{64}$/.test(str)
}
