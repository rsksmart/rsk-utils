import { remove0x, isHexString } from './strings'

/**
 * @description Converts strings or numbers to buffer
 * @param {string|number|buffer} value
 * @param {String} [encoding='hex']
 * @returns {Buffer}
 */
export function toBuffer (value, encoding = 'hex') {
  if (Buffer.isBuffer(value)) return value
  if (typeof value === 'number') value = value.toString()
  value = remove0x(value)
  if (!encoding && isHexString(value)) encoding = 'hex'
  return Buffer.from(value, encoding)
}
