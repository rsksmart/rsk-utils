"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.zeroAddress = zeroAddress;exports.isAddress = isAddress;exports.toChecksumAddress = toChecksumAddress;exports.isValidChecksumAddress = isValidChecksumAddress;exports.isValidAddress = isValidAddress;exports.searchChecksummedNetworks = searchChecksummedNetworks;exports.isZeroAddress = isZeroAddress;exports.ZERO_ADDRESS = void 0;var _hashes = require("./hashes");
var _strings = require("./strings");
var _bytes = require("./bytes");
var _networks = _interopRequireDefault(require("./networks.json"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                                  * @description Returns the zero address
                                                                                                                                                                  * @returns {String}
                                                                                                                                                                  */
function zeroAddress() {
  return (0, _strings.add0x)((0, _bytes.bufferToHex)(Buffer.allocUnsafe(20).fill(0)));
}

const ZERO_ADDRESS = zeroAddress();

/**
                                     * @description Check if a string is an address
                                     * @param {String} address
                                     * @returns {Boolean}
                                     */exports.ZERO_ADDRESS = ZERO_ADDRESS;
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

/**
   * @description Checks if an address is valid.
   * @param {String} address
   * @param {Integer|String} chainId
   * @returns {Boolean}
   */
function isValidAddress(address, chainId) {
  if (typeof address !== 'string') return false;
  if (address.match(/[A-F]/)) {
    return isValidChecksumAddress(address, chainId);
  }
  return isAddress(address);
}

/**
   * @description Search network info of checksummed address
   * @param {String} address
   * @param {Array} [networks], chainId list
   * see: https://chainid.network/chains.json
   * @returns {Array}
   */
function searchChecksummedNetworks(address, networks) {
  networks = networks || _networks.default;
  return networks.filter(net => toChecksumAddress(address, net.chainId) === address);
}

/**
   * @description Checks if is zero address.
   * @param {String} address
   * @param {Integer|String} chainId
   * @returns {Boolean}
   */
function isZeroAddress(address) {
  return address === ZERO_ADDRESS;
}