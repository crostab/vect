import { partition } from '@vect/vector-update'

/**
 * Divide input array by an array of indexes,
 * The indexes should be integer array sorted by ascending.
 * Return selected array and rest array.
 * 'Pick' array is new array, and the 'rest' points to the input array.
 * @param {*[]} vec
 * @param {number[]} indexes - integer array sorted ascending
 * @param {number} [hi] - length of indexes
 * @returns {{pick: *[], rest: *[]}} - rest points to altered original array, pick is an new array.
 */
export const divide = (vec, indexes, hi) =>
  (hi = hi ?? indexes?.length, {
    pick: partition(vec, indexes, hi).splice(indexes[0], hi),
    rest: vec
  })


