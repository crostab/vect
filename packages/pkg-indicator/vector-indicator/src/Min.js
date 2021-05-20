import { min as compare } from '@aryth/comparer'

export const min = function (vec) {
  const fn = this
  return !fn
    ? vec.reduce((p, x) => compare(x, p), vec[0])
    : vec.reduce((p, x, i) => compare(fn(x, i), p), fn(vec[0], 0))
}

export const minBy = (vec, indicator) => min.call(indicator, vec)

export const Min = (kpi) => min.bind(kpi)
