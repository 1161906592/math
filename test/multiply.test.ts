import { multiply } from '@liuyang0826/mathjs'

describe('math multiply', () => {
  it('0.0023 / 100 ==> 0.22999999999999998', () => {
    expect(multiply(0.0023, 100)).toBeCloseTo(0.23)
  })
})
