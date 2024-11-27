import { remove0x } from './strings'

export const sumDigits = (value: any): number => `${value}`.split('').map(Number).reduce((a: number, b: number) => a + b, 0)

export function isNullData (value: any): boolean {
  const test = (value && remove0x(value))
  if (test === '' || sumDigits(test) === 0) return true
  return !test
}