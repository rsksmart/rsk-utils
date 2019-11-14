"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.keccak256 = keccak256;
var _keccak = _interopRequireDefault(require("keccak"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                       * @description Creates Keccak sha256 hash
                                                                                                                                                       * @param {String|Number|Array|Buffer} input
                                                                                                                                                       * @param {String} [format='hex']
                                                                                                                                                       * @returns {Buffer}
                                                                                                                                                       */
function keccak256(input, format = 'hex') {
  return (0, _keccak.default)('keccak256').update(input).digest(format);
}