import { partition } from '../utils/partition'

/**
 *
 * @param {*[]} vec
 * @param {number[]} indexes - integer array sorted ascending
 * @param {number} [hi] - length of indexes
 * @returns {*[]} - altered of original array
 */
export const splices = (vec, indexes, hi) =>
  (hi = hi ?? indexes?.length, partition(vec, indexes, hi).splice(indexes[0], hi), vec)


