/**
 * @description Checks if a given string is a valid hexadecimal string.
 * Hexadecimal strings may optionally start with the `"0x"` prefix.
 *
 * @param {string} str - The string to validate as a hexadecimal string.
 * @returns {boolean} - Returns true if the string is valid hexadecimal, false otherwise.
 */
export declare function isHexString(str: string): boolean;
/**
 * @description Adds the `"0x"` prefix to a valid hexadecimal string, if not already present.
 * Honors negative prefixes (e.g., `"-0x"` for negative hex values).
 *
 * @param {string} str - The string to which the `"0x"` prefix will be added.
 * @returns {string} - The hexadecimal string with the `"0x"` prefix.
 * @throws {TypeError} - Throws an error if the input is not a string.
 */
export declare function add0x(str: string): string;
/**
 * @description Checks if a string starts with the `"0x"` prefix, indicating a hexadecimal string.
 *
 * @param {string} str - The string to check for the `"0x"` prefix.
 * @returns {boolean} - Returns true if the string starts with `"0x"`, false otherwise.
 * @throws {TypeError} - Throws an error if the input is not a string.
 */
export declare function hasHexPrefix(str: string): boolean;
/**
 * @description Removes the `"0x"` prefix from a hexadecimal string, if present.
 *
 * @param {any} str - The string to strip of its `"0x"` prefix.
 * @returns {string} - The string without the `"0x"` prefix.
 * @throws {TypeError} - Throws an error if the input is not a string.
 */
export declare function stripHexPrefix(str: any): string;
/**
 * @description Removes the `"0x"` prefix from a valid hexadecimal string, if present.
 * Honors negative prefixes (e.g., `"-0x"` for negative hex values).
 *
 * @param {any} value - The value to process. If it is not a string, the value is returned unchanged.
 * @returns {any} - If the value is a hex string, returns the string without the `"0x"` prefix. Otherwise, returns the input value unchanged.
 */
export declare function remove0x(value: any): any;
/**
 * @description Checks if a string is a valid transaction hash or block hash.
 * A valid hash is a 64-character hexadecimal string, optionally prefixed with `"0x"`,
 * and must represent a number greater than zero.
 *
 * @param {string} str - The string to validate as a transaction or block hash.
 * @returns {boolean} - Returns true if the string is a valid transaction or block hash, false otherwise.
 */
export declare function isTxOrBlockHash(str: string): boolean;
