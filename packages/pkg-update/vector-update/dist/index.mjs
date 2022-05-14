import { rollBunch } from '@vect/vector-index';

/**
 * @param {*[]} vec - input array to be mutated
 * @param {number[]} inds - indexes in ascending order, indicating which elements to remove
 * @returns {*[]} mutated input array, with elements at provided indexes removed
 */

const splices = (vec, inds) => {
  const hi = inds === null || inds === void 0 ? void 0 : inds.length;
  if (!hi) return vec;
  rollBunch(vec, inds).splice(inds[0], hi);
  return vec;
};

export { splices };
