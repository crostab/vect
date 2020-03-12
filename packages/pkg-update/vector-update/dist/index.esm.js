import { insertDown } from '@vect/swap';

const partition = (vec, indexes, hi) => {
  hi = hi || indexes.length;
  let i = 0,
      cu = indexes[0],
      nx;
  const insertion = insertDown.bind(vec);

  while (++i < hi) if ((nx = indexes[i]) !== ++cu) insertion(nx, cu);

  return vec;
};

/**
 *
 * @param {*[]} vec
 * @param {number[]} indexes - integer array sorted ascending
 * @param {number} [hi] - length of indexes
 * @returns {*[]} - altered of original array
 */

const splices = (vec, indexes, hi) => (hi = hi || indexes.length, partition(vec, indexes, hi).splice(indexes[0], hi), vec);

export { partition, splices };
