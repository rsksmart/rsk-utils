"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.isNullData = isNullData;exports.sumDigits = void 0;var _strings = require("./strings");

const sumDigits = value => `${value}`.split('').map(Number).reduce((a, b) => a + b, 0);exports.sumDigits = sumDigits;

function isNullData(value) {
  const test = value && (0, _strings.remove0x)(value);
  if (test === '' || sumDigits(test) === 0) return true;
  return !test;
}