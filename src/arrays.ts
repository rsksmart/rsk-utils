/**
 * @param {T[]} a
 * @param {T[]} b
 * @returns {T[]} a ∩ b
 */
export function arrayIntersection<T>(a: T[], b: T[]): T[] {
  return a.filter(v => b.includes(v));
}

/**
 * @param {T[]} a
 * @param {T[]} b
 * @returns {T[]} a - b
 */
export function arrayDifference<T>(a: T[], b: T[]): T[] {
  return a.filter(x => !b.includes(x));
}

/**
 * @param {T[]} a
 * @param {T[]} b
 * @returns {T[]} a - b
 */
export function arraySymmetricDifference<T>(a: T[], b: T[]): T[] {
  return arrayDifference(a, b).concat(b.filter(x => !a.includes(x)));
}

/**
 * @description Check if an array contains some of the searched items
 * @param {T[]} haystack
 * @param {T[]} needle
 * @returns {boolean}
 */
export function hasValue<T>(haystack: T[], needle: T[]): boolean {
  return needle.some(v => haystack.includes(v));
}

/**
 * @description Check if an array contains all the searched items
 * @param {T[]} haystack
 * @param {T[]} needle
 * @returns {boolean}
 */
export function includesAll<T>(haystack: T[], needle: T[]): boolean {
  return !needle.map(t => haystack.indexOf(t)).filter(i => i < 0).length;
}