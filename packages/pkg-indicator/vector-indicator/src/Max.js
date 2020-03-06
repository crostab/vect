import { max as duoMax } from '@aryth/comparer'

export const max = function (vec) {
  const fn = this
  return !fn
    ? vec.reduce((p, x) => duoMax(x, p), vec[0])
    : vec.reduce((p, x, i) => duoMax(fn(x, i), p), fn(vec[0], 0))
}

export const maxBy = (vec, indicator) => max.call(indicator, vec)

export const Max = indicator => max.bind(indicator)


