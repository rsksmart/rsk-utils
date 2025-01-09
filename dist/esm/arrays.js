/**
 * @description Validates if the provided argument is an array.
 * @param {any} value - The value to validate.
 * @throws {TypeError} - If the value is not an array.
 */
export function validateArray(value, paramName) {
    if (!Array.isArray(value)) {
        throw new TypeError(`Expected '${paramName}' to be an array, but received ${typeof value}.`);
    }
}
/**
 * @description Computes the intersection of two arrays. The intersection is a new array containing
 * all elements that are present in both input arrays.
 *
 * @param {T[]} a - The first array.
 * @param {T[]} b - The second array.
 * @returns {T[]} - An array containing elements that are present in both `a` and `b`.
 * @throws {TypeError} - If either `a` or `b` is not an array.
 */
export function arrayIntersection(a, b) {
    validateArray(a, "a");
    validateArray(b, "b");
    return a.filter(v => b.includes(v));
}
/**
 * @description Computes the difference of two arrays. The difference is a new array containing
 * all elements that are present in the first array (`a`) but not in the second array (`b`).
 *
 * @param {T[]} a - The first array.
 * @param {T[]} b - The second array.
 * @returns {T[]} - An array containing elements that are in `a` but not in `b`.
 * @throws {TypeError} - If either `a` or `b` is not an array.
 */
export function arrayDifference(a, b) {
    validateArray(a, "a");
    validateArray(b, "b");
    return a.filter(x => !b.includes(x));
}
/**
 * @description Computes the symmetric difference of two arrays. The symmetric difference is a new array
 * containing all elements that are in either of the input arrays (`a` or `b`) but not in their intersection.
 *
 * @param {T[]} a - The first array.
 * @param {T[]} b - The second array.
 * @returns {T[]} - An array containing elements that are in `a` or `b`, but not both.
 * @throws {TypeError} - If either `a` or `b` is not an array.
 */
export function arraySymmetricDifference(a, b) {
    validateArray(a, "a");
    validateArray(b, "b");
    return arrayDifference(a, b).concat(b.filter(x => !a.includes(x)));
}
/**
 * @description Checks if at least one element of the `needle` array is present in the `haystack` array.
 *
 * @param {T[]} haystack - The array to search within.
 * @param {T[]} needle - The array of items to search for.
 * @returns {boolean} - Returns true if any element of `needle` is found in `haystack`, false otherwise.
 * @throws {TypeError} - If either `haystack` or `needle` is not an array.
 */
export function hasValue(haystack, needle) {
    validateArray(haystack, "haystack");
    validateArray(needle, "needle");
    return needle.some(v => haystack.includes(v));
}
/**
 * @description Checks if all elements of the `needle` array are present in the `haystack` array.
 *
 * @param {T[]} haystack - The array to search within.
 * @param {T[]} needle - The array of items to search for.
 * @returns {boolean} - Returns true if all elements of `needle` are found in `haystack`, false otherwise.
 * @throws {TypeError} - If either `haystack` or `needle` is not an array.
 */
export function includesAll(haystack, needle) {
    validateArray(haystack, "haystack");
    validateArray(needle, "needle");
    return !needle.some((t) => !haystack.includes(t));
}
//# sourceMappingURL=arrays.js.map