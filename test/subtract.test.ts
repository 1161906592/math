import { subtract } from '@liuyang0826/mathjs'

describe('math subtract', () => {
  it('0.0023 - 0.00000011  ==>  0.0022998899999999997', () => {
    expect(subtract(0.0023, 0.00000011)).toBeCloseTo(0.00229989)
  })
})
