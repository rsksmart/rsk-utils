import { add0x, remove0x, isHexString, stripHexPrefix } from '../src/strings'
import { expect } from 'chai'

const add0xExpect = [
  ['123456', '0x123456'],
  ['abc456', '0xabc456'],
  ['john', 'john'],
  ['0x23897bcfe8', '0x23897bcfe8'],
  ['-1b5267b1b18ce000000', '-0x1b5267b1b18ce000000']
]

const remove0xExpect = [
  ['0x', ''],
  ['123456', '123456'],
  ['0xabc456', 'abc456'],
  ['-0xabc456', '-abc456'],
  ['john', 'john'],
  [undefined, undefined],
  [null, null],
  [true, true],
  [false, false],
  [1, 1],
  ['0x23897bcfe8', '23897bcfe8'],
  ['0x1234a0xb', '0x1234a0xb']
]

const stripHexPrefixExpect = [
  ['0xabc', 'abc'],
  ['abc', 'abc'],
  ['abckl', 'abckl'],
  [null, TypeError, assertThrow],
  [undefined, TypeError, assertThrow],
  [{}, TypeError, assertThrow]
]

const hexStrings = [
  '0x12',
  '0xAbcF12',
  '0040dcd4e575cc1b6a221676ced9478a9824513f',
  'e575cc1b6a221676ced9478a9824513f',
  '0x040dcd4e575cc1b6a221676ced9478a9824513f',
  '0x4fb291350c11da5be6ce96f19722565f2241eedf6be393fd79eea15e66ac7552']

const notHexStrings = [
  'Z',
  '0xz1234',
  'x1234a',
  'test'
]

describe(`# Strings`, function () {
  test({ isHexString }, [...hexStrings.map(s => [s, true]), ...notHexStrings.map(s => [s, false])])
  test({ add0x }, add0xExpect)
  test({ remove0x }, remove0xExpect)
  test({ stripHexPrefix }, stripHexPrefixExpect)
})

function test (payload, values) {
  for (let method in payload) {
    describe(`${method}()`, function () {
      for (let v of values) {
        let [value, expected, fn] = v
        if (!fn) fn = assertEqual
        fn(payload[method], value, expected)
      }
    })
  }
}

function assertEqual (cb, value, expected) {
  it(`${value} should return ${expected}`, () => {
    expect(cb(value)).to.be.deep.equal(expected)
  })
}

function assertThrow (cb, value, expected) {
  it(`${value} should throw ${expected()}`, () => {
    expect(() => cb(value)).to.throw(expected)
  })
}
