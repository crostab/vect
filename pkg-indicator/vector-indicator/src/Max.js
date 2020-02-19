import { max as maxN } from '@aryth/comparer'

export const max = function (vec) {
  const fn = this
  return vec.reduce(
    (p, x, i) => maxN(p, fn(x, i)),
    fn(vec[0], 0)
  )
}

export const maxBy = (vec, indicator) => max.call(indicator, vec)

export const Max = indicator => max.bind(indicator)


