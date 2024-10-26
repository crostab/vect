import { rollBunch, rollTop } from '@vect/vector-index'


/**
 * @param {*[]} vec - input array to be mutated
 * @param {number[]} inds - indexes in ascending order, indicating which elements to remove
 * @returns {*[]} mutated input array, with elements at provided indexes removed
 */
export function splices(vec, inds) {
  rollBunch(vec, inds).splice(inds[0], inds.length)
  return vec
}

export function keep(vec, inds) {
  rollTop(vec, inds).splice(inds.length)
  return vec
}

