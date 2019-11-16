import { sumDigits, isNullData } from '../src/data'
import { expect } from 'chai'

const empty = [null, 0, '0x', '0x0', '0x00', undefined, false, '', '   ']
const notEmpty = [1, 'a', '0xa', '0x1', '12', true, 'blah', '  1']
const wrapStr = str => (typeof str === 'string') ? `"${str}"` : str

describe(`# Validate`, function () {
  describe(`sumDigits()`, function () {
    const sumDigitsCases = [
      [0, 0],
      ['0', 0],
      [12, 3],
      ['2222', 8]
    ]
    for (let t of sumDigitsCases) {
      let [value, expected] = t
      it(`${value} should be ${expected}`, () => {
        expect(sumDigits(value)).to.be.deep.equal(expected)
      })
    }
  })

  describe(`isNullData()`, function () {
    for (let c of empty) {
      it(`${wrapStr(c)} should be true`, () => {
        expect(isNullData(c)).to.be.equal(true)
      })
    }
    for (let c of notEmpty) {
      it(`${wrapStr(c)} should be false`, () => {
        expect(isNullData(c)).to.be.equal(false)
      })
    }
  })
})
