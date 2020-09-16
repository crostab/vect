import { min }  from '@aryth/comparer'
import { rand } from '@aryth/rand'

export const leap = (ve, start, gap) => {
  const wd = ve?.length, vec = Array(gap)
  let lo = start ? min(start, wd - 1) : rand(wd), i = 0
  while (i < gap) {
    vec[i++] = ve[lo++]
    if (lo === wd) lo = 0
  }
  return vec
}



