import { arrayIntersection, arraySymmetricDifference, arrayDifference, includesAll, hasValue } from '../src/arrays.js'
import { assert } from 'chai'

describe(`# Arrays`, function () {
  describe(`arrayIntersection()`, function () {
    let cases = [
      [[1, 2, 3, 4], [1, 3], [1, 3]],
      [[1, 3], [5, 6], []],
      [[1, 2, 3, 4], [3, 1, 4, 2], [1, 2, 3, 4]]
    ]
    cases.forEach(ca => {
      it(`${ca[0]} ∩ ${ca[1]} -> ${ca[2]}`, function () {
        assert.deepEqual(arrayIntersection(ca[0], ca[1]), ca[2])
      })
    })
  })

  describe(`arrayDifference()`, function () {
    let cases = [
      [[1, 2, 3, 4], [1, 3], [2, 4]],
      [[1, 3], [5, 6], [1, 3]],
      [[1, 2, 3, 4], [3, 1, 4, 2], []],
      [[3, 1, 4, 2], [1, 2, 3, 4], []],
      [[4, 5, 6], [5, 6], [4]],
      [[1, 2, 3, 4], [4, 5, 6], [1, 2, 3]]
    ]
    cases.forEach(ca => {
      it(`${ca[0]} - ${ca[1]} -> ${ca[2]}`, function () {
        assert.deepEqual(arrayDifference(ca[0], ca[1]), ca[2])
      })
    })
  })

  describe(`arraySymmetricDifference()`, function () {
    let cases = [
      [[1, 2, 3, 4], [1, 3], [2, 4]],
      [[1, 3], [5, 6], [1, 3, 5, 6]],
      [[1, 2, 3, 4], [3, 1, 4, 2], []],
      [[1, 2, 3, 4], [3, 1, 4, 2], []],
      [[3, 1, 4, 2], [1, 2, 3, 4], []],
      [[4, 5, 6], [5, 6], [4]],
      [[1, 2, 3, 4], [4, 5, 6], [1, 2, 3, 5, 6]]
    ]
    cases.forEach(ca => {
      it(`${ca[0]} - ${ca[1]} -> ${ca[2]}`, function () {
        assert.deepEqual(arraySymmetricDifference(ca[0], ca[1]), ca[2])
      })
    })
  })

  const search = ['one', 'two', 'three']
  describe(`includesAll() [${search}]`, function () {

    const success = [
      ['one', 'two', 'three'],
      ['one', 'two', 'three', 'apple'],
      ['one', 'three', 'two']
    ]
    const fail = [
      ['one'],
      ['one', 'two', 'apple'],
      ['one', 'two'],
      ['animal', 'tree']
    ]
    success.forEach(t => {
      it(`${t} should be true`, function () {
        assert.equal(includesAll(t, search), true)
      })
      fail.forEach(t => {
        it(`${t} should be false`, function () {
          assert.equal(includesAll(t, search), false)
        })
      })
    })
  })

  const arr = ['one', 'two', 'three']
  describe(`hasValue() ${arr}`, function () {

    const success = [
      ['one', 'two', 'three'],
      ['one', 'two', 'three', 'apple'],
      ['apple', 'one', 'banana', 'two'],
      ['three']
    ]
    const fail = [
      ['apple'],
      ['orange', 'apple'],
      ['animal', 'banana']
    ]
    success.forEach(t => {
      it(`${t} should be true`, function () {
        assert.equal(hasValue(arr, t), true)
      })
      fail.forEach(t => {
        it(`${t} should be false`, function () {
          assert.equal(hasValue(arr, t), false)
        })
      })
    })
  })
})
