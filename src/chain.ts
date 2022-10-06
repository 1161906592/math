import { add } from './add'
import { divide } from './divide'
import { multiply } from './multiply'
import { subtract } from './subtract'

export interface Chain {
  add(...values: number[]): Chain
  divide(...values: number[]): Chain
  multiply(...values: number[]): Chain
  subtract(...values: number[]): Chain
  done(): number
}

export function chain(value: number): Chain {
  return {
    add(...values: number[]) {
      value = add(value, ...values)

      return this
    },
    divide(...values: number[]) {
      value = divide(value, ...values)

      return this
    },
    multiply(...values: number[]) {
      value = multiply(value, ...values)

      return this
    },
    subtract(...values: number[]) {
      value = subtract(value, ...values)

      return this
    },
    done() {
      return value
    },
  }
}
