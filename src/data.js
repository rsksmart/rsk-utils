import { remove0x } from './strings'

export const sumDigits = value => `${value}`.split('').map(Number).reduce((a, b) => a + b, 0)

export function isNullData (value) {
  const test = (value && remove0x(value))
  if (test === '' || sumDigits(test) === 0) return true
  return !test
}
