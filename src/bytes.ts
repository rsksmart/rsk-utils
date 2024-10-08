import { remove0x, isHexString, add0x } from './strings'

/**
 * @description Converts strings or numbers to buffer
 * @param {string|number|Buffer} value
 * @param {string} [encoding='hex']
 * @returns {Buffer}
 */
export function toBuffer (value: string | number | Buffer, encoding: BufferEncoding = 'hex'): Buffer {
  if (Buffer.isBuffer(value)) return value
  if (typeof value === 'number') value = value.toString()
  let strValue = remove0x(value)
  if (!encoding && isHexString(strValue)) encoding = 'hex'
  return Buffer.from(strValue, encoding)
}

/**
 * @description Converts buffer to hex string
 * @param {Buffer} buffer
 * @returns {string}
 */
export function bufferToHex (buffer: Buffer): string {
  return add0x(buffer.toString('hex'))
}