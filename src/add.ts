import { _multiply } from './multiply'
import { toNonExponential } from './utils'

function _add(a: number, b: number) {
  const aStr = toNonExponential(a)
  const bStr = toNonExponential(b)
  const fractionDigits = Math.max(aStr.split('.')[1]?.length || 0, bStr.split('.')[1]?.length || 0)
  const scale = Math.pow(10, fractionDigits)

  return (_multiply(a, scale) + _multiply(b, scale)) / scale
}

/**
 * n个任意数字相加
 * @param values
 * @returns number
 */
export function add(...values: number[]) {
  return values.reduce((acc, cur) => _add(acc, cur), 0)
}
