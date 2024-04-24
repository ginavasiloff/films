import { dateDifferenceInMonths } from './date'

describe('dateDifferenceInMonths', () => {
  test('it does not return negative values', () => {
    const res = dateDifferenceInMonths(
      new Date('2000-01-01'),
      new Date('1973-01-01'),
    )
    expect(res).toBeGreaterThanOrEqual(0)
  })
})
