"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayIntersection = arrayIntersection;
exports.arrayDifference = arrayDifference;
exports.arraySymmetricDifference = arraySymmetricDifference;
exports.hasValue = hasValue;
exports.includesAll = includesAll;
/**
 * @param {T[]} a
 * @param {T[]} b
 * @returns {T[]} a ∩ b
 */
function arrayIntersection(a, b) {
    return a.filter(function (v) { return b.includes(v); });
}
/**
 * @param {T[]} a
 * @param {T[]} b
 * @returns {T[]} a - b
 */
function arrayDifference(a, b) {
    return a.filter(function (x) { return !b.includes(x); });
}
/**
 * @param {T[]} a
 * @param {T[]} b
 * @returns {T[]} a - b
 */
function arraySymmetricDifference(a, b) {
    return arrayDifference(a, b).concat(b.filter(function (x) { return !a.includes(x); }));
}
/**
 * @description Check if an array contains some of the searched items
 * @param {T[]} haystack
 * @param {T[]} needle
 * @returns {boolean}
 */
function hasValue(haystack, needle) {
    return needle.some(function (v) { return haystack.includes(v); });
}
/**
 * @description Check if an array contains all the searched items
 * @param {T[]} haystack
 * @param {T[]} needle
 * @returns {boolean}
 */
function includesAll(haystack, needle) {
    return !needle.map(function (t) { return haystack.indexOf(t); }).filter(function (i) { return i < 0; }).length;
}
