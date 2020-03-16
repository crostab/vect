'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vectorUpdate = require('@vect/vector-update');
var swap = require('@vect/swap');
var comparer = require('@aryth/comparer');
var rand = require('@aryth/rand');

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

/**
 * Fisher–Yates shuffle, a.k.a Knuth shuffle
 * @param {Array} ve
 * @param {number} [size] - if omitted, size will be keys.length
 * @returns {Array} mutated array
 */

const shuffle = function (ve, size) {
  let l = ve.length;
  const lo = comparer.max(0, l - (size !== null && size !== void 0 ? size : l));

  while (--l >= lo) swap.swap.call(ve, l, rand.rand(l));

  return lo ? (ve.splice(0, lo), ve) : ve;
};

const leap = (ar, start, gap) => {
  const wd = ar.length,
        vec = Array(gap);
  let lo = start ? comparer.min(start, wd - 1) : rand.rand(wd),
      j = 0;

  while (j < gap) {
    vec[j++] = ar[lo++];
    if (lo === wd) lo = 0;
  }

  return vec;
};

exports.divide = divide;
exports.leap = leap;
exports.select = select;
exports.shuffle = shuffle;
