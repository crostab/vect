import { rand } from '@aryth/rand'
import { min as dmin } from '@aryth/comparer'

export const leap = (ar, start, gap) => {
  const wd = ar.length, vec = Array(gap)
  let lo = start ? dmin(start, wd - 1) : rand(wd), j = 0
  while (j < gap) {
    vec[j++] = ar[lo++]
    if (lo === wd) lo = 0
  }
  return vec
}



