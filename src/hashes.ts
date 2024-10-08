import createHash from 'keccak'

/**
 * @description Creates Keccak sha256 hash
 * @param {string | Buffer} input
 * @param {string} [format='hex']
 * @returns {string}
 */
export function keccak256 (input: string | Buffer, format: BufferEncoding = 'hex'): string {
  return createHash('keccak256').update(input).digest(format);
}