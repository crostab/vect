import { rollBunch } from '@vect/vector-index'

export const select = (vec, inds) => {
  let hi = inds?.length, sample = Array(hi)
  for (--hi; hi >= 0; hi--) sample[hi] = vec[inds[hi]]
  return sample
}

export const selectEntry = (vec, ki, vi) => [ vec[ki], vec[vi] ]

export const selectTriplet = (vec, [ xi, yi, zi ]) => [ vec[xi], vec[yi], vec[zi] ]

/**
 * @param {*[]} vec - input array
 * @param {number[]} inds - indexes in ascending order indicating which elements to select
 * @returns {[*[],*[]]} - [ selected, input ]
 */
export const separate = (vec, inds) => {
  const hi = inds?.length
  return hi
    ? [ rollBunch(vec, inds).splice(inds[0], hi), vec ]
    : [ [], vec ]
}
/**
 * Divide input array by an array of indexes,
 * The indexes should be integer array sorted by ascending.
 * Return selected array and rest array.
 * 'Pick' array is new array, and the 'rest' points to the input array.
 * @param {*[]} vec
 * @param {number[]} inds - indexes in ascending order
 * @returns {{pick: *[], rest: *[]}} - 'rest' for mutated input array, 'pick' for new array includes elements at indexes.
 */
export const divide = (vec, inds) => {
  const hi = inds?.length
  return hi
    ? { pick: rollBunch(vec, inds).splice(inds[0], hi), rest: vec }
    : { pick: [], rest: vec }
}



