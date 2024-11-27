"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.keccak256 = keccak256;
var keccak_1 = __importDefault(require("keccak"));
/**
 * @description Creates Keccak sha256 hash
 * @param {string | Buffer} input
 * @param {string} [format='hex']
 * @returns {string}
 */
function keccak256(input, format) {
    if (format === void 0) { format = 'hex'; }
    return (0, keccak_1.default)('keccak256').update(input).digest(format);
}
