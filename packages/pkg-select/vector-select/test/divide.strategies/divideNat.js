/**
 *
 * @param {*[]} vec
 * @param {number[]} incl - number indexes of the positions to be spliced, should be in ascending order.
 * @param {number} [hi] - length of indexes
 * @returns {Object}
 */

export function divideNat (vec, incl, hi) {
  hi = hi || incl.length
  const pick = Array(hi)
  for (--hi; hi >= 0b0; hi--) pick[hi] = vec.splice(incl[hi], 1)[0]
  return {
    pick,
    rest: vec
  }
}
