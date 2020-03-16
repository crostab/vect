import { rand } from '@aryth/rand'
import { max as dmax, min as dmin } from '@aryth/comparer'

export const leap = function (o, start, gap) {
  const keys = this?.keys ?? Object.keys(o)
  const wd = keys.length, df = dmax(gap, wd), rs = {}
  let
    lo = start ? dmin(start, wd - 1) : rand(wd),
    hi = lo + df,
    i = lo,
    k
  while (lo++ < hi) {
    rs[k = keys[i++]] = o[k]
    if (i === wd) i = 0
  }
  return rs
}
