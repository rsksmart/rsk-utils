import createHash from 'keccak';
/**
 * @description Generates a Keccak-256 hash of the provided input. Keccak-256 is a cryptographic
 * hashing algorithm widely used in Ethereum, including for generating addresses and signatures.
 *
 * @param {string | Buffer} input - The data to be hashed. Can be a string or a Buffer.
 * @param {BufferEncoding} [format='hex'] - The desired output format of the hash. Defaults to `'hex'`.
 * @returns {string} - The resulting hash as a string in the specified format.
 */
export function keccak256(input, format = 'hex') {
    if (typeof input !== 'string' && !Buffer.isBuffer(input)) {
        throw new TypeError('Input must be a string or Buffer.');
    }
    if (!Buffer.isEncoding(format)) {
        throw new TypeError(`Unsupported format: ${format}`);
    }
    return createHash('keccak256').update(input).digest(format);
}
//# sourceMappingURL=hashes.js.map