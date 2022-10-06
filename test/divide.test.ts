import { divide } from '@liuyang0826/mathjs'

describe('math divide', () => {
  it('0.0023 / 0.00001 ==> 229.99999999999997', () => {
    expect(divide(0.0023, 0.00001)).toBe(230)
  })
})
