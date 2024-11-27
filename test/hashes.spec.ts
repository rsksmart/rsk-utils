import { keccak256 } from '../src/hashes'
import { assert } from 'chai'

describe('# hashes', function () {
  describe(`keccak256`, function () {
    let test = [
      ['', 'c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470'],
      ['cccc', '9850d829b57b233101525397603baedc32d20288a866514dd5441abe286f4d2e'],
      ['The quick brown fox jumps over the lazy dog', '4d741b6f1eb29cb2a9b9911c82f56fa8d73b04959d3d9d222895df6c0b28aa15']
    ]
    for (let t of test) {
      let [value, expected] = t
      it(`should return a keccack256 hash`, () => {
        assert.equal(keccak256(value), expected)
      })
    }
  })
})
