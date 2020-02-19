import { min as minN } from '@aryth/comparer'

export const min = function (vec) {
  const fn = this
  return vec.reduce(
    (p, x, i) => minN(p, fn(x, i)),
    fn(vec[0], 0)
  )
}

export const minBy = (vec, indicator) => min.call(indicator, vec)

export const Min = (kpi) => min.bind(kpi)
