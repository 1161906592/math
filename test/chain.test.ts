import { chain } from '@liuyang0826/mathjs'

describe('math chain', () => {
  it('0.0023 + 0.00000000000001 ==> 0.0023000000000099998', () => {
    expect(chain(3).add(4).multiply(2, 2).add(2, 2).done()).toBe(32)
  })
})
