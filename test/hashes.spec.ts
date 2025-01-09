import { keccak256 } from '../src/hashes.js';
import { assert } from 'chai';

describe('# hashes', function () {
  describe(`keccak256`, function () {
    const validTestCases: [string, string][] = [
      ['', 'c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470'],
      ['cccc', '9850d829b57b233101525397603baedc32d20288a866514dd5441abe286f4d2e'],
      ['The quick brown fox jumps over the lazy dog', '4d741b6f1eb29cb2a9b9911c82f56fa8d73b04959d3d9d222895df6c0b28aa15']
    ];

    const invalidInputs = [
      { input: 12345, type: 'number' },
      { input: { key: 'value' }, type: 'object' },
      { input: true, type: 'boolean' },
      { input: null, type: 'null' },
      { input: undefined, type: 'undefined' },
    ];

    const invalidFormats = ['invalidFormat', '', 'json'];

    validTestCases.forEach(([value, expected]) => {
      it(`should return a valid keccak256 hash for input "${value}"`, () => {
        assert.equal(keccak256(value), expected);
      });
    });

    it('should return a valid hash for Buffer input', () => {
      const bufferInput = Buffer.from('test');
      const expectedHash = '9c22ff5f21f0b81b113e63f7db6da94fedef11b2119b4088b89664fb9a3cb658';
      assert.equal(keccak256(bufferInput), expectedHash);
    });

    invalidInputs.forEach(({ input, type }) => {
      it(`should throw a TypeError for invalid input type: ${type}`, () => {
        assert.throws(() => keccak256(input as any), TypeError, 'Input must be a string or Buffer.');
      });
    });

    invalidFormats.forEach((format) => {
      it(`should throw a TypeError for invalid output format: "${format}"`, () => {
        assert.throws(
          () => keccak256('test', format as BufferEncoding),
          TypeError,
          `Unsupported format: ${format}`
        );
      });
    });
  });
});