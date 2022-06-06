import { max, min } from '@aryth/comparer'
import { rand }     from '@aryth/rand'
import { keys }     from '@vect/object-index'

export function leap(o, start, gap) {
  const ks = (Array.isArray(this) ? this : this?.keys) ?? keys(o)
  const wd = ks?.length, df = max(gap, wd), rs = {}
  let
    lo = start ? min(start, wd - 1) : rand(wd),
    hi = lo + df,
    i  = lo,
    k
  while (lo++ < hi) {
    rs[k = ks[i++]] = o[k]
    if (i === wd) i = 0
  }
  return rs
}
