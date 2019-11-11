import { toBuffer } from '../src/bytes'
import chai from 'chai'
import chaiBytes from 'chai-bytes'
chai.use(chaiBytes)
const { expect } = chai

describe(`# Bytes`, function () {
  describe(`toBuffer()`, function () {
    const toBufferExpected = [
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
      it(`${value} should return bytes ${expected.toString('hex')}`, () => {
        expect(toBuffer(...value)).to.equalBytes(expected)
      })
    }
  })
})
