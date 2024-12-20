/**
 * @description Generates a Keccak-256 hash of the provided input. Keccak-256 is a cryptographic
 * hashing algorithm widely used in Ethereum, including for generating addresses and signatures.
 *
 * @param {string | Buffer} input - The data to be hashed. Can be a string or a Buffer.
 * @param {BufferEncoding} [format='hex'] - The desired output format of the hash. Defaults to `'hex'`.
 * @returns {string} - The resulting hash as a string in the specified format.
 */
export declare function keccak256(input: string | Buffer, format?: BufferEncoding): string;
