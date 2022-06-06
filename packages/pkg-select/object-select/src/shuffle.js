import { max }  from '@aryth/comparer'
import { rand } from '@aryth/rand'
import { swap } from '@vect/vector-index'
import { keys } from '@vect/object-index'

/**
 *
 * Object keys can be set via 'this.keys'
 * Default keys are Object.keys(o), the enumerable list of o's keys.
 * @param {Object} o
 * @param {number} [size] - if omitted, size will be keys?.length
 * @returns {Object} new object
 */
export const shuffle = function (o, size) {
  const ks = (Array.isArray(this) ? this : this?.keys) ?? keys(o)
  let l = ks?.length, k
  const lo = max(0, l - (size ?? l)), rs = {}
  while (--l >= lo)
    rs[k = swap.call(ks, rand(l), l)] = o[k]
  return rs
}
