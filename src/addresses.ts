import { keccak256 } from './hashes'
import { stripHexPrefix, add0x } from './strings'
import { bufferToHex } from './bytes'
import nets from './networks.json'

export interface Network {
    name: string,
    chainId: number,
    shortName: string
    chain: string,
    network: string,
    networkId: number,
    nativeCurrency: {
      name: string,
      symbol: string,
      decimals: number,
    },
    rpc: string[],
    faucets: string[],
    infoURL: string,
    explorers: string[]
}

/**
 * @description Returns the zero address
 * @returns {string}
 */
export function zeroAddress (): string {
  return add0x(bufferToHex(Buffer.allocUnsafe(20).fill(0)))
}

export const ZERO_ADDRESS: string = zeroAddress()

/**
 * @description Check if a string is an address
 * @param {string} address
 * @returns {boolean}
 */
export function isAddress (address: string): boolean {
  return /^(0x)?[0-9a-fA-F]{40}$/.test(address)
}

/**
 * @description Implements EIP-1191 Address Checksum
 * @param {string} address
 * @param {number|string} chainId
 * @returns {string} checksummed address
 */
export function toChecksumAddress (address: string, chainId: number | string): string {
  address = stripHexPrefix(address).toLowerCase()
  if (typeof chainId === 'string') chainId = parseInt(chainId)
  const prefix = (!isNaN(chainId)) ? `${chainId.toString()}0x` : ''
  const hash = keccak256(`${prefix}${address}`).toString()
  return '0x' + address.split('')
    .map((b, i) => (parseInt(hash[i], 16) >= 8) ? b.toUpperCase() : b)
    .join('')
}

/**
 * @description Validates address checksum
 * @param {string} address
 * @param {number|string} chainId
 * @returns {boolean}
 */
export function isValidChecksumAddress (address: string, chainId: number | string): boolean {
    return isAddress(address) && toChecksumAddress(address, chainId) === address
  }


/**
 * @description Checks if an address is valid.
 * @param {string} address
 * @param {number|string} chainId
 * @returns {boolean}
 */
export function isValidAddress (address: string, chainId: number | string): boolean {
    if (typeof address !== 'string') return false
    if (address.match(/[A-F]/)) {
      return isValidChecksumAddress(address, chainId)
    }
    return isAddress(address)
  }
  
/**
 * @description Search checksummed networks
 * @param {string} address
 * @param {Network[]} [networks], chainId list
 * see: https://chainid.network/chains.json
 * @returns {number[]}
 */
export function searchChecksummedNetworks (address: string, networks?: Network[]): Network[] {
    networks = networks || nets
    return Object.values(networks)
        .filter(net => toChecksumAddress(address, net.chainId) === address)
}

/**
 * @description Checks if is zero address.
 * @param {string} address
 * @returns {boolean}
 */
export function isZeroAddress (address: string): boolean {
    return address === ZERO_ADDRESS
}
