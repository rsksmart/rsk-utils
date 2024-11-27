"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumDigits = void 0;
exports.isNullData = isNullData;
var strings_1 = require("./strings");
var sumDigits = function (value) { return "".concat(value).split('').map(Number).reduce(function (a, b) { return a + b; }, 0); };
exports.sumDigits = sumDigits;
function isNullData(value) {
    var test = (value && (0, strings_1.remove0x)(value));
    if (test === '' || (0, exports.sumDigits)(test) === 0)
        return true;
    return !test;
}
