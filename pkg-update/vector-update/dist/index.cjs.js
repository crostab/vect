'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 *
 * @param {*[]} arr
 * @param {number[]} indexes - number indexes of the positions to be spliced, should be in ascending order.
 * @param {number} [hi] - length of indexes
 * @returns {*[]}
 */
function splices(arr, indexes, hi) {
  hi = hi || indexes.length;

  for (--hi; hi >= 0b0; hi--) arr.splice(indexes[hi], 1);

  return arr;
}

exports.splices = splices;
