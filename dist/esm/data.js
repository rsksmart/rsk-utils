import { remove0x } from './strings.js';
/**
 * @description Calculates the sum of all numeric digits in a given value.
 * The value is first converted to a string, then split into individual characters,
 * which are mapped to numbers and summed.
 *
 * @param {any} value - The input value whose digits will be summed. The value is converted to a string if it is not already one.
 * @returns {number} - The sum of all numeric digits in the input value.
 */
export const sumDigits = (value) => `${value}`.split('').map(Number).reduce((a, b) => a + b, 0);
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
export function isNullData(value) {
    const test = (value && remove0x(value));
    if (test === '' || sumDigits(test) === 0)
        return true;
    return !test;
}
//# sourceMappingURL=data.js.map