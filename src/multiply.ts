import { toNonExponential } from './utils'

export function _multiply(a: number, b: number) {
  const aStr = toNonExponential(a)
  const bStr = toNonExponential(b)
  const fractionDigits = (aStr.split('.')[1]?.length || 0) + (bStr.split('.')[1]?.length || 0)
  const scale = Math.pow(10, fractionDigits)

  return (Number(aStr.replace('.', '')) * Number(bStr.replace('.', ''))) / scale
}

/**
 * n个任意数字相乘
 * @param values
 * @returns number
 */
export function multiply(...values: number[]) {
  return values.slice(1).reduce((acc, cur) => _multiply(acc, cur), values[0])
}
