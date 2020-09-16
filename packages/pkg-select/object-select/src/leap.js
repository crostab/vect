import { max, min } from '@aryth/comparer'
import { rand }     from '@aryth/rand'

export const leap = function (o, start, gap) {
  const keys = this?.keys ?? Object.keys(o)
  const wd = keys?.length, df = max(gap, wd), rs = {}
  let
    lo = start ? min(start, wd - 1) : rand(wd),
    hi = lo + df,
    i = lo,
    k
  while (lo++ < hi) {
    rs[k = keys[i++]] = o[k]
    if (i === wd) i = 0
  }
  return rs
}
