import { toBuffer, bufferToHex } from '../src/bytes.js'
import * as chai from 'chai'
import chaiBytes from 'chai-bytes'
chai.use(chaiBytes)
const { expect } = chai

describe(`# Bytes`, function () {
  describe(`toBuffer()`, function () {
    const toBufferExpected: any[][] = [
      ['0x0a', '0a'],
      ['0abc12', '0abc12'],
      [['0abc12', false], '0abc12'],
      [[[1, 2, 3], 'utf8'], '010203'],
      [['123', 'ascii'], '313233'],
      [Buffer.from('abcd03', 'hex'), 'abcd03'],
      [102030, '102030'],
      [[102030, 'ascii'], '313032303330']
    ]
    for (let c of toBufferExpected) {
      let [value, expected] = c
      value = (!Array.isArray(value)) ? [value] : value
      it(`${value} should return bytes ${(expected as string).toString()}`, () => {
        if (Array.isArray(value)) {
          let [valueToBuffer, encoding] = value;
          expect(toBuffer(valueToBuffer, encoding)).to.equalBytes(expected as string)
        } else {
          expect(toBuffer(value)).to.equalBytes(expected as string)
        }
      })
    }
  })
  describe(` bufferToHex()`, function () {
    const values = ['abc1234cbe', '123456', '0xabcd345683943434343acb54']
    for (let value of values) {
      it(`should return an hex string`, () => {
        let buffer = toBuffer(value)
        let str = bufferToHex(buffer)
        let expected = (value.startsWith('0x')) ? value.substring(2) : value
        expect(str).to.be.equal('0x' + expected)
      })
    }
  })
})
