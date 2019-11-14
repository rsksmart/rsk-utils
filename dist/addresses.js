"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.isAddress = isAddress;exports.toChecksumAddress = toChecksumAddress;exports.isValidChecksumAddress = isValidChecksumAddress;var _hashes = require("./hashes");
var _strings = require("./strings");






function isAddress(address) {
  return /^(0x)?[0-9a-fA-F]{40}$/.test(address);
}
/**
   * @description Implements EIP-1191 Address Checksum
   * @param {String} address
   * @param {Integer|String} chainId
   * @returns {String} checksummed address
   */
function toChecksumAddress(address, chainId) {
  address = (0, _strings.stripHexPrefix)(address).toLowerCase();
  chainId = parseInt(chainId);
  const prefix = !isNaN(chainId) ? `${chainId.toString()}0x` : '';
  const hash = (0, _hashes.keccak256)(`${prefix}${address}`).toString('hex');
  return '0x' + address.split('').
  map((b, i) => parseInt(hash[i], 16) >= 8 ? b.toUpperCase() : b).
  join('');
}
/**
   * @description Validates address checksum
   * @param {String} address
   * @param {Integer|String} chainId
   * @returns {Boolean}
   */
function isValidChecksumAddress(address, chainId) {
  return isAddress(address) && toChecksumAddress(address, chainId) === address;
}