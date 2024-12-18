import { remove0x, isHexString, add0x } from './strings'

/**
 * @description Converts a value (string, number, or Buffer) into a Buffer object. 
 * Handles hexadecimal strings and numbers by automatically stripping the `"0x"` prefix and applying the appropriate encoding.
 * 
 * @param {string | number | Buffer} value - The value to be converted to a Buffer. It can be a string, number, or an existing Buffer.
 * @param {BufferEncoding} [encoding='hex'] - The encoding format for the input string (e.g., `'hex'`, `'utf8'`). Defaults to `'hex'` for hexadecimal strings.
 * @returns {Buffer} - The resulting Buffer representation of the input value.
 * @throws {Error} - Throws an error if the input value cannot be converted to a Buffer.
 */
export function toBuffer(value: string | number | Buffer, encoding: BufferEncoding = 'hex'): Buffer {
  if (Buffer.isBuffer(value)) return value;
  if (typeof value === 'number') value = value.toString();
  let strValue = remove0x(value);
  if (!encoding && isHexString(strValue)) encoding = 'hex';
  return Buffer.from(strValue, encoding);
}

/**
 * @description Converts a Buffer into a hexadecimal string prefixed with `"0x"`. 
 * Useful for representing binary data in a human-readable hexadecimal format.
 * 
 * @param {Buffer} buffer - The Buffer to be converted into a hex string.
 * @returns {string} - The resulting hexadecimal string with a `"0x"` prefix.
 */
export function bufferToHex (buffer: Buffer): string {
  return add0x(buffer.toString('hex'))
}