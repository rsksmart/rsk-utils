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
/**
 * @description Returns the zero address
 * @returns {string}
 */
function zeroAddress() {
    return (0, strings_1.add0x)((0, bytes_1.bufferToHex)(Buffer.allocUnsafe(20).fill(0)));
}
exports.ZERO_ADDRESS = zeroAddress();
/**
 * @description Check if a string is an address
 * @param {string} address
 * @returns {boolean}
 */
function isAddress(address) {
    return /^(0x)?[0-9a-fA-F]{40}$/.test(address);
}
/**
 * @description Implements EIP-1191 Address Checksum
 * @param {string} address
 * @param {number|string} chainId
 * @returns {string} checksummed address
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
 * @description Validates address checksum
 * @param {string} address
 * @param {number|string} chainId
 * @returns {boolean}
 */
function isValidChecksumAddress(address, chainId) {
    return isAddress(address) && toChecksumAddress(address, chainId) === address;
}
/**
 * @description Checks if an address is valid.
 * @param {string} address
 * @param {number|string} chainId
 * @returns {boolean}
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
 * @description Search checksummed networks
 * @param {string} address
 * @param {Network[]} [networks], chainId list
 * see: https://chainid.network/chains.json
 * @returns {number[]}
 */
function searchChecksummedNetworks(address, networks) {
    networks = networks || networks_json_1.default;
    return Object.values(networks)
        .filter(function (net) { return toChecksumAddress(address, net.chainId) === address; });
}
/**
 * @description Checks if is zero address.
 * @param {string} address
 * @returns {boolean}
 */
function isZeroAddress(address) {
    return address === exports.ZERO_ADDRESS;
}
