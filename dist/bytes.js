"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.toBuffer = toBuffer;var _strings = require("./strings");







function toBuffer(value, encoding = 'hex') {
  if (Buffer.isBuffer(value)) return value;
  if (typeof value === 'number') value = value.toString();
  value = (0, _strings.remove0x)(value);
  if (!encoding && (0, _strings.isHexString)(value)) encoding = 'hex';
  return Buffer.from(value, encoding);
}