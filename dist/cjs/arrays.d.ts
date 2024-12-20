/**
 * @description Computes the intersection of two arrays. The intersection is a new array containing
 * all elements that are present in both input arrays.
 *
 * @param {T[]} a - The first array.
 * @param {T[]} b - The second array.
 * @returns {T[]} - An array containing elements that are present in both `a` and `b`.
 */
export declare function arrayIntersection<T>(a: T[], b: T[]): T[];
/**
 * @description Computes the difference of two arrays. The difference is a new array containing
 * all elements that are present in the first array (`a`) but not in the second array (`b`).
 *
 * @param {T[]} a - The first array.
 * @param {T[]} b - The second array.
 * @returns {T[]} - An array containing elements that are in `a` but not in `b`.
 */
export declare function arrayDifference<T>(a: T[], b: T[]): T[];
/**
 * @description Computes the symmetric difference of two arrays. The symmetric difference is a new array
 * containing all elements that are in either of the input arrays (`a` or `b`) but not in their intersection.
 *
 * @param {T[]} a - The first array.
 * @param {T[]} b - The second array.
 * @returns {T[]} - An array containing elements that are in `a` or `b`, but not both.
 */
export declare function arraySymmetricDifference<T>(a: T[], b: T[]): T[];
/**
 * @description Checks if at least one element of the `needle` array is present in the `haystack` array.
 *
 * @param {T[]} haystack - The array to search within.
 * @param {T[]} needle - The array of items to search for.
 * @returns {boolean} - Returns true if any element of `needle` is found in `haystack`, false otherwise.
 */
export declare function hasValue<T>(haystack: T[], needle: T[]): boolean;
/**
 * @description Checks if all elements of the `needle` array are present in the `haystack` array.
 *
 * @param {T[]} haystack - The array to search within.
 * @param {T[]} needle - The array of items to search for.
 * @returns {boolean} - Returns true if all elements of `needle` are found in `haystack`, false otherwise.
 */
export declare function includesAll<T>(haystack: T[], needle: T[]): boolean;