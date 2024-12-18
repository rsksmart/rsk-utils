"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZERO_ADDRESS = void 0;
exports.zeroAddress = zeroAddress;
exports.isAddress = isAddress;
exports.toChecksumAddress = toChecksumAddress;
exports.isValidChecksumAddress = isValidChecksumAddress;
exports.isValidAddress = isValidAddress;
exports.searchChecksummedNetworks = searchChecksummedNetworks;
exports.isZeroAddress = isZeroAddress;
var hashes_1 = require("./hashes");
var strings_1 = require("./strings");
var bytes_1 = require("./bytes");
var networks_json_1 = __importDefault(require("./networks.json"));
var networks = networks_json_1.default;
/**
 * @description Generates the zero address. The zero address is a special address
 * consisting of 40 zeros (`0x0000000000000000000000000000000000000000`) and is commonly
 * used as a placeholder or null address in Ethereum transactions and smart contracts.
 *
 * @returns {string} - The zero address prefixed with "0x".
 */
function zeroAddress() {
    return (0, strings_1.add0x)((0, bytes_1.bufferToHex)(Buffer.allocUnsafe(20).fill(0)));
}
/**
 * @description A constant representing the Ethereum zero address (`0x0000000000000000000000000000000000000000`).
 */
exports.ZERO_ADDRESS = zeroAddress();
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
function isAddress(address) {
    return /^(0x)?[0-9a-fA-F]{40}$/.test(address);
}
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
function toChecksumAddress(address, chainId) {
    address = (0, strings_1.stripHexPrefix)(address).toLowerCase();
    if (typeof chainId === 'string')
        chainId = parseInt(chainId);
    var prefix = (!isNaN(chainId)) ? "".concat(chainId.toString(), "0x") : '';
    var hash = (0, hashes_1.keccak256)("".concat(prefix).concat(address)).toString();
    return '0x' + address.split('')
        .map(function (b, i) { return (parseInt(hash[i], 16) >= 8) ? b.toUpperCase() : b; })
        .join('');
}
/**
 * @description Validates whether an address has a correct checksum for the specified chain ID.
 * This function checks that the address format is valid and that the checksum matches the
 * requirements defined by EIP-1191, which incorporates the chain ID into the checksum calculation.
 *
 * @param {string} address - The address to validate.
 * @param {number|string} chainId - The chain ID used to calculate the checksum.
 * @returns {boolean} - Returns true if the address has a valid checksum for the given chain ID, false otherwise.
 */
function isValidChecksumAddress(address, chainId) {
    return isAddress(address) && toChecksumAddress(address, chainId) === address;
}
/**
 * @description Determines if an address is valid. This function checks the address format
 * and optionally verifies the checksum based on the chain ID, implementing EIP-1191 for addresses
 * containing uppercase letters.
 *
 * @param {string} address - The address to validate.
 * @param {number|string} chainId - The chain ID used for checksum validation (required for mixed-case addresses).
 * @returns {boolean} - Returns true if the address is valid, false otherwise.
 */
function isValidAddress(address, chainId) {
    if (typeof address !== 'string')
        return false;
    if (address.match(/[A-F]/)) {
        return isValidChecksumAddress(address, chainId);
    }
    return isAddress(address);
}
/**
 * @description Searches for networks where the provided address matches the checksummed format for the network's chain ID.
 * This implements EIP-1191 to account for checksum validation based on the chain ID.
 *
 * @param {string} address - The address to search for in checksummed format.
 * @param {Network[]} [networks] - An optional list of networks to search. If not provided, defaults to the imported networks from networks.json.
 * @returns {Network[]} - An array of networks where the address matches the checksummed format for the network's chain ID.
 */
function searchChecksummedNetworks(address, networks) {
    networks = networks || networks_json_1.default;
    return Object.values(networks)
        .filter(function (net) { return toChecksumAddress(address, net.chainId) === address; });
}
/**
 * @description Checks if a given address is the zero address
 * (`0x0000000000000000000000000000000000000000`).
 *
 * @param {string} address - The address to check.
 * @returns {boolean} - Returns true if the address is the zero address, false otherwise.
 */
function isZeroAddress(address) {
    return address === exports.ZERO_ADDRESS;
}
