import { add0x, remove0x, isHexString, stripHexPrefix, isTxOrBlockHash } from '../src/strings.js'
import { expect } from 'chai'

const add0xExpect = [
  ['123456', '0x123456'],
  ['abc456', '0xabc456'],
  ['john', 'john'],
  ['0x23897bcfe8', '0x23897bcfe8'],
  ['-1b5267b1b18ce000000', '-0x1b5267b1b18ce000000'],
  [undefined, TypeError, assertThrow],
  [{}, TypeError, assertThrow]
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

const isTxOrBlockHashExpect = [
  [undefined, false],
  [null, false],
  [0, false],
  [0x55e62371790fcdb645cb015c5393964d45f83b8584c31a86794caef88a0d3b85, false],
  ['0x0000000000000000000000000000000000000000000000000000000000000000', false],
  ['0x55e62371790fcdb645cb015c5393964d45f83b8584c31a86794caef88a0d3b85', true],
  ['0xe3a417a2d9404ea54ce55572318b42b78424ab050209508132abd2977aa3dfbe', true],
  ['0xa2c441d3e3a96a17a52bd0c6b3c763d61164664cd5fdfca7f5b8596dd20d93cf', true]
]

describe(`# Strings`, function () {
  test({ isHexString }, [...hexStrings.map(s => [s, true]), ...notHexStrings.map(s => [s, false])])
  test({ add0x }, add0xExpect)
  test({ remove0x }, remove0xExpect)
  test({ stripHexPrefix }, stripHexPrefixExpect)
  test({ isTxOrBlockHash }, isTxOrBlockHashExpect)
})

function test (payload: any, values: any[]) {
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

function assertEqual (c: any, value: any, expected: any) {
  it(`${value} should return ${expected}`, () => {
    expect(c(value)).to.be.deep.equal(expected)
  })
}

function assertThrow (cb: any, value: any, expected: any) {
  it(`${value} should throw ${expected()}`, () => {
    expect(() => cb(value)).to.throw(expected)
  })
}
