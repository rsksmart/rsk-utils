"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.toBuffer = toBuffer;exports.bufferToHex = bufferToHex;var _strings = require("./strings");

/**
                                                                                                                                                                               * @description Converts strings or numbers to buffer
                                                                                                                                                                               * @param {string|number|buffer} value
                                                                                                                                                                               * @param {String} [encoding='hex']
                                                                                                                                                                               * @returns {Buffer}
                                                                                                                                                                               */
function toBuffer(value, encoding = 'hex') {
  if (Buffer.isBuffer(value)) return value;
  if (typeof value === 'number') value = value.toString();
  value = (0, _strings.remove0x)(value);
  if (!encoding && (0, _strings.isHexString)(value)) encoding = 'hex';
  return Buffer.from(value, encoding);
}

/**
   * @description Converts buffer to hex string
   * @param {Buffer} buffer
   * @returns {String}
   */
function bufferToHex(buffer) {
  return (0, _strings.add0x)(buffer.toString('hex'));
}