/**
 * @description Calculates the sum of all numeric digits in a given value.
 * The value is first converted to a string, then split into individual characters,
 * which are mapped to numbers and summed.
 *
 * @param {any} value - The input value whose digits will be summed. The value is converted to a string if it is not already one.
 * @returns {number} - The sum of all numeric digits in the input value.
 */
export declare const sumDigits: (value: any) => number;
/**
 * @description Checks if a given value is considered "null data" based on specific criteria.
 * A value is considered "null data" if:
 * - It is empty after removing the `"0x"` prefix.
 * - The sum of its numeric digits is zero.
 * - It is falsy (e.g., null, undefined, or an empty string).
 *
 * @param {any} value - The value to check. If it is a string, the `"0x"` prefix is removed before evaluation.
 * @returns {boolean} - Returns true if the value is considered "null data," false otherwise.
 */
export declare function isNullData(value: any): boolean;
