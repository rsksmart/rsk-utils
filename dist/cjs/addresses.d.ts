import { Network } from './networks.js';
/**
 * @description Generates the zero address. The zero address is a special address
 * consisting of 40 zeros (`0x0000000000000000000000000000000000000000`) and is commonly
 * used as a placeholder or null address in Ethereum transactions and smart contracts.
 *
 * @returns {string} - The zero address prefixed with "0x".
 */
export declare function zeroAddress(): string;
/**
 * @description A constant representing the Ethereum zero address (`0x0000000000000000000000000000000000000000`).
 */
export declare const ZERO_ADDRESS: string;
/**
 * @description Validates if a given string is a valid address. This function checks
 * that the address consists of 40 hexadecimal characters and optionally starts with "0x".
 *
 * Note: This does not validate checksums for mixed-case addresses. Use `isValidChecksumAddress`
 * for checksum validation.
 *
 * @param {string} address - The address to validate.
 * @returns {boolean} - Returns true if the string is a valid address, false otherwise.
 */
export declare function isAddress(address: string): boolean;
/**
 * @description Generates a checksummed address following EIP-1191.
 * This checksum calculation incorporates the provided chain ID for enhanced validation
 * of addresses in mixed-case (uppercase and lowercase) formats.
 *
 * @param {string} address - The address to be checksummed. The input address should be in lowercase format.
 * @param {number|string} chainId - The chain ID used as a prefix in the checksum calculation.
 * If no valid chain ID is provided, the checksum is calculated without a prefix.
 * @returns {string} - The checksummed Ethereum address, prefixed with "0x".
 */
export declare function toChecksumAddress(address: string, chainId: number | string): string;
/**
 * @description Validates whether an address has a correct checksum for the specified chain ID.
 * This function checks that the address format is valid and that the checksum matches the
 * requirements defined by EIP-1191, which incorporates the chain ID into the checksum calculation.
 *
 * @param {string} address - The address to validate.
 * @param {number|string} chainId - The chain ID used to calculate the checksum.
 * @returns {boolean} - Returns true if the address has a valid checksum for the given chain ID, false otherwise.
 */
export declare function isValidChecksumAddress(address: string, chainId: number | string): boolean;
/**
 * @description Determines if an address is valid. This function checks the address format
 * and optionally verifies the checksum based on the chain ID, implementing EIP-1191 for addresses
 * containing uppercase letters.
 *
 * @param {string} address - The address to validate.
 * @param {number|string} chainId - The chain ID used for checksum validation (required for mixed-case addresses).
 * @returns {boolean} - Returns true if the address is valid, false otherwise.
 */
export declare function isValidAddress(address: string, chainId: number | string): boolean;
/**
 * @description Searches for networks where the provided address matches the checksummed format for the network's chain ID.
 * This implements EIP-1191 to account for checksum validation based on the chain ID.
 * @param {string} address - The address to search for in checksummed format.
 * @param {Network[]} [networks] - An optional list of networks to search. If not provided, defaults to the imported networks from networks.json.
 * see: https://chainid.network/chains.json
 * @returns {Network[]} - An array of networks where the address matches the checksummed format for the network's chain ID.
 */
export declare function searchChecksummedNetworks(address: string, networks?: Network[]): Network[];
/**
 * @description Checks if a given address is the zero address
 * (`0x0000000000000000000000000000000000000000`).
 *
 * @param {string} address - The address to check.
 * @returns {boolean} - Returns true if the address is the zero address, false otherwise.
 */
export declare function isZeroAddress(address: string): boolean;
