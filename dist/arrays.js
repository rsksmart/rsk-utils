"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.arrayIntersection = arrayIntersection;exports.arrayDifference = arrayDifference;exports.arraySymmetricDifference = arraySymmetricDifference;exports.hasValue = hasValue;exports.includesAll = includesAll;
/**
                                                                                                                                                                                                                                                                                               * @param {Array} a
                                                                                                                                                                                                                                                                                               * @param {Array} b
                                                                                                                                                                                                                                                                                               * @returns {Array} a ∩ b
                                                                                                                                                                                                                                                                                               */
function arrayIntersection(a, b) {
  return a.filter(v => b.includes(v));
}
/**
   * @param {Array} a
   * @param {Array} b
   * @returns {Array} a - b
   */
function arrayDifference(a, b) {
  return a.filter(x => !b.includes(x));
}
/**
   * @param {Array} a
   * @param {Array} b
   * @returns {Array} a - b
   */
function arraySymmetricDifference(a, b) {
  return arrayDifference(a, b).concat(b.filter(x => !a.includes(x)));
}
/**
   * @description Check if an array contains some of the searched items
   * @param {Array} haystack
   * @param {Array} needle
   * @returns {Boolean}
   */
function hasValue(haystack, needle) {
  return arrayIntersection(haystack, needle).length > 0;
}

/**
   * @description Check if an array contains all the searched items
   * @export
   * @param {Array} haystack
   * @param {Array} needle
   * @returns {Boolean}
   */
function includesAll(haystack, needle) {
  return !needle.map(t => haystack.indexOf(t)).filter(i => i < 0).length;
}