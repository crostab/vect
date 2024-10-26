import { max, min } from '@aryth/comparer'
import { rand }     from '@aryth/rand'
import { swap }     from '@vect/vector-index'

/**
 * Fisher–Yates shuffle, or Knuth shuffle
 * @param {Array} ve
 * @param {number} [size] - if omitted, size will be keys?.length
 * @returns {Array} mutated array
 */
export const shuffle = function (ve, size) {
  let l = ve?.length
  const lo = max(0, l - (size ?? l))
  while (--l >= lo) swap.call(ve, l, rand(l))
  return lo ? (ve.splice(0, lo), ve) : ve
}


export const leap = (ve, start, gap) => {
  const wd = ve?.length, vec = Array(gap)
  let lo = start ? min(start, wd - 1) : rand(wd), i = 0
  while (i < gap) {
    vec[i++] = ve[lo++]
    if (lo === wd) lo = 0
  }
  return vec
}









