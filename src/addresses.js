import { keccak256 } from './hashes'
import { stripHexPrefix } from './strings'
import nets from './networks.json'

/**
 * @description Check if a string is an address
 * @param {String} address
 * @returns {Boolean}
 */
export function isAddress (address) {
  return /^(0x)?[0-9a-fA-F]{40}$/.test(address)
}
/**
 * @description Implements EIP-1191 Address Checksum
 * @param {String} address
 * @param {Integer|String} chainId
 * @returns {String} checksummed address
 */
export function toChecksumAddress (address, chainId) {
  address = stripHexPrefix(address).toLowerCase()
  chainId = parseInt(chainId)
  const prefix = (!isNaN(chainId)) ? `${chainId.toString()}0x` : ''
  const hash = keccak256(`${prefix}${address}`).toString('hex')
  return '0x' + address.split('')
    .map((b, i) => (parseInt(hash[i], 16) >= 8) ? b.toUpperCase() : b)
    .join('')
}
/**
 * @description Validates address checksum
 * @param {String} address
 * @param {Integer|String} chainId
 * @returns {Boolean}
 */
export function isValidChecksumAddress (address, chainId) {
  return isAddress(address) && toChecksumAddress(address, chainId) === address
}

/**
 * @description Checks if an address is valid.
 * @param {String} address
 * @param {Integer|String} chainId
 * @returns {Boolean}
 */
export function isValidAddress (address, chainId) {
  if (typeof address !== 'string') return false
  if (address.match(/[A-F]/)) {
    return isValidChecksumAddress(address, chainId)
  }
  return isAddress(address)
}

/**
 * @description Search network info of checksummed address
 * @param {String} address
 * @param {Array} [networks], chainId list
 * see: https://chainid.network/chains.json
 * @returns {Array}
 */
export function searchChecksummedNetworks (address, networks) {
  networks = networks || nets
  return networks.filter(net => toChecksumAddress(address, net.chainId) === address)
}
