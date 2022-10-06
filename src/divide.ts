import { _multiply } from './multiply'
import { toNonExponential } from './utils'

function _divide(a: number, b: number) {
  const aStr = toNonExponential(a)
  const bStr = toNonExponential(b)
  const fractionDigits = (bStr.split('.')[1]?.length || 0) - (aStr.split('.')[1]?.length || 0)
  const scale = Math.pow(10, fractionDigits)

  return _multiply(Number(aStr.replace('.', '')) / Number(bStr.replace('.', '')), scale)
}

/**
 * n个任意数字相除
 * @param values
 * @returns number
 */
export function divide(...values: number[]) {
  return values.slice(1).reduce((acc, cur) => _divide(acc, cur), values[0])
}
