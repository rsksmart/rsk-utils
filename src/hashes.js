
import keccak from 'keccak'

/**
 * @description Creates Keccak sha256 hash
 * @param {String|Number|Array|Buffer} input
 * @param {String} [format='hex']
 * @returns {Buffer}
 */
export function keccak256 (input, format = 'hex') {
  return keccak('keccak256').update(input).digest(format)
}
