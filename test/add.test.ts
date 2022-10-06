import { add } from '@liuyang0826/mathjs'

describe('math add', () => {
  it('0.0023 + 0.00000000000001 ==> 0.0023000000000099998', () => {
    expect(add(0.0023, 0.00000000000001).toString()).toBe('0.00230000000001')
  })
})
