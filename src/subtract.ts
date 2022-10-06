import { _multiply } from './multiply'
import { toNonExponential } from './utils'

function _subtract(a: number, b: number) {
  const aStr = toNonExponential(a)
  const bStr = toNonExponential(b)
  const fractionDigits = Math.max(aStr.split('.')[1]?.length || 0, bStr.split('.')[1]?.length || 0)
  const scale = Math.pow(10, fractionDigits)

  return Number(((_multiply(a, scale) - _multiply(b, scale)) / scale).toFixed(fractionDigits))
}

/**
 * n个任意数字相减
 * @param values
 * @returns number
 */
export function subtract(...values: number[]) {
  return values.slice(1).reduce((acc, cur) => _subtract(acc, cur), values[0])
}
