'use strict';

var vectorIndex = require('@vect/vector-index');
var comparer = require('@aryth/comparer');
var rand = require('@aryth/rand');

const select = (vec, inds) => {
  let hi = inds === null || inds === void 0 ? void 0 : inds.length,
    sample = Array(hi);
  for (--hi; hi >= 0; hi--) sample[hi] = vec[inds[hi]];
  return sample;
};
const selectEntry = (vec, ki, vi) => [vec[ki], vec[vi]];
const selectTriplet = (vec, [xi, yi, zi]) => [vec[xi], vec[yi], vec[zi]];

/**
 * @param {*[]} vec - input array
 * @param {number[]} inds - indexes in ascending order indicating which elements to select
 * @returns {[*[],*[]]} - [ selected, input ]
 */
const separate = (vec, inds) => {
  const hi = inds === null || inds === void 0 ? void 0 : inds.length;
  return hi ? [vectorIndex.rollBunch(vec, inds).splice(inds[0], hi), vec] : [[], vec];
};
/**
 * Divide input array by an array of indexes,
 * The indexes should be integer array sorted by ascending.
 * Return selected array and rest array.
 * 'Pick' array is new array, and the 'rest' points to the input array.
 * @param {*[]} vec
 * @param {number[]} inds - indexes in ascending order
 * @returns {{pick: *[], rest: *[]}} - 'rest' for mutated input array, 'pick' for new array includes elements at indexes.
 */
const divide = (vec, inds) => {
  const hi = inds === null || inds === void 0 ? void 0 : inds.length;
  return hi ? {
    pick: vectorIndex.rollBunch(vec, inds).splice(inds[0], hi),
    rest: vec
  } : {
    pick: [],
    rest: vec
  };
};

/**
 * Fisher–Yates shuffle, or Knuth shuffle
 * @param {Array} ve
 * @param {number} [size] - if omitted, size will be keys?.length
 * @returns {Array} mutated array
 */
const shuffle = function (ve, size) {
  let l = ve === null || ve === void 0 ? void 0 : ve.length;
  const lo = comparer.max(0, l - (size ?? l));
  while (--l >= lo) vectorIndex.swap.call(ve, l, rand.rand(l));
  return lo ? (ve.splice(0, lo), ve) : ve;
};
const leap = (ve, start, gap) => {
  const wd = ve === null || ve === void 0 ? void 0 : ve.length,
    vec = Array(gap);
  let lo = start ? comparer.min(start, wd - 1) : rand.rand(wd),
    i = 0;
  while (i < gap) {
    vec[i++] = ve[lo++];
    if (lo === wd) lo = 0;
  }
  return vec;
};

exports.divide = divide;
exports.leap = leap;
exports.select = select;
exports.selectEntry = selectEntry;
exports.selectTriplet = selectTriplet;
exports.separate = separate;
exports.shuffle = shuffle;
