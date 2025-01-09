import { arrayIntersection, arraySymmetricDifference, arrayDifference, includesAll, hasValue, validateArray } from '../src/arrays.js';
import { assert } from 'chai';

describe('# validateArray', function () {
  it('should not throw an error for valid arrays', function () {
    const validArrays = [
      [],
      [1, 2, 3],
      ['a', 'b', 'c'],
      [null, undefined],
      [{}],
    ];

    validArrays.forEach((array, index) => {
      assert.doesNotThrow(() => validateArray(array, `param${index}`), `Failed for valid array: ${JSON.stringify(array)}`);
    });
  });

  it('should throw a TypeError for non-array inputs', function () {
    const invalidInputs = [
      null,
      undefined,
      123,
      'string',
      { key: 'value' },
      () => {},
      true,
    ];

    invalidInputs.forEach((input, index) => {
      assert.throws(
        () => validateArray(input, `param${index}`),
        TypeError,
        `Expected 'param${index}' to be an array, but received ${typeof input}.`,
        `Failed for invalid input: ${JSON.stringify(input)}`
      );
    });
  });

  it('should include the correct parameter name in the error message', function () {
    const paramName = 'testParam';
    const input = 123;

    try {
      validateArray(input, paramName);
    } catch (error) {
      assert.instanceOf(error, TypeError);
      assert.match(
        error.message,
        new RegExp(`^Expected '${paramName}' to be an array, but received number.$`),
        `Error message does not include the parameter name: ${error.message}`
      );
    }
  });
});


describe(`# Arrays`, function () {
  describe(`arrayIntersection()`, function () {
    const cases: [number[], number[], number[]][] = [
      [[1, 2, 3, 4], [1, 3], [1, 3]],
      [[1, 3], [5, 6], []],
      [[1, 2, 3, 4], [3, 1, 4, 2], [1, 2, 3, 4]],
    ];
    cases.forEach(([a, b, expected]) => {
      it(`${a} ∩ ${b} -> ${expected}`, function () {
        assert.deepEqual(arrayIntersection(a, b), expected);
      });
    });
  });

  describe(`arrayDifference()`, function () {
    const cases: [number[], number[], number[]][] = [
      [[1, 2, 3, 4], [1, 3], [2, 4]],
      [[1, 3], [5, 6], [1, 3]],
      [[1, 2, 3, 4], [3, 1, 4, 2], []],
      [[3, 1, 4, 2], [1, 2, 3, 4], []],
      [[4, 5, 6], [5, 6], [4]],
      [[1, 2, 3, 4], [4, 5, 6], [1, 2, 3]],
    ];
    cases.forEach(([a, b, expected]) => {
      it(`${a} - ${b} -> ${expected}`, function () {
        assert.deepEqual(arrayDifference(a, b), expected);
      });
    });
  });

  describe(`arraySymmetricDifference()`, function () {
    const cases: [number[], number[], number[]][] = [
      [[1, 2, 3, 4], [1, 3], [2, 4]],
      [[1, 3], [5, 6], [1, 3, 5, 6]],
      [[1, 2, 3, 4], [3, 1, 4, 2], []],
      [[4, 5, 6], [5, 6], [4]],
      [[1, 2, 3, 4], [4, 5, 6], [1, 2, 3, 5, 6]],
    ];
    cases.forEach(([a, b, expected]) => {
      it(`${a} Δ ${b} -> ${expected}`, function () {
        assert.deepEqual(arraySymmetricDifference(a, b), expected);
      });
    });
  });

  const search = ['one', 'two', 'three'];

  describe(`includesAll()`, function () {
    const successCases: string[][] = [
      ['one', 'two', 'three'], // All elements match exactly
      ['one', 'two'],          // Subset of `search`
      ['three', 'one'],        // Subset, unordered
      []
    ];
  
    const failCases: string[][] = [
      ['apple'],               // No match
      ['one', 'apple'],        // Partial match
      ['animal', 'tree'],      // No match at all
      [{} as any],             // Invalid element
    ];
  
    successCases.forEach((needle) => {
      it(`${needle} should be true`, function () {
        assert.equal(includesAll(search, needle), true);
      });
    });
  
    failCases.forEach((needle) => {
      it(`${needle} should be false`, function () {
        assert.equal(includesAll(search, needle), false);
      });
    });
  });

  const arr = ['one', 'two', 'three'];
  describe(`hasValue()`, function () {
    const successCases: string[][] = [
      ['one', 'two', 'three'],
      ['one', 'two', 'three', 'apple'],
      ['apple', 'one', 'banana', 'two'],
      ['three'],
    ];
    const failCases: string[][] = [
      ['apple'],
      ['orange', 'apple'],
      ['animal', 'banana'],
    ];
    successCases.forEach((t) => {
      it(`${t} should be true`, function () {
        assert.equal(hasValue(arr, t), true);
      });
    });
    failCases.forEach((t) => {
      it(`${t} should be false`, function () {
        assert.equal(hasValue(arr, t), false);
      });
    });
  });
});
