'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vectorUpdate = require('@vect/vector-update');

const select = (vec, indexes, hi) => {
  hi = hi || indexes.length;
  const vc = Array(hi);

  for (--hi; hi >= 0; hi--) vc[hi] = vec[indexes[hi]];

  return vc;
};

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

const divide = (vec, indexes, hi) => (hi = hi || indexes.length, {
  pick: vectorUpdate.partition(vec, indexes, hi).splice(indexes[0], hi),
  rest: vec
});

exports.divide = divide;
exports.select = select;
