import { partition } from '@vect/vector-update';
import { swap } from '@vect/swap';
import { max, min } from '@aryth/comparer';
import { rand } from '@aryth/rand';

const select = (vec, indexes, hi) => {
  var _hi;

  hi = (_hi = hi) !== null && _hi !== void 0 ? _hi : indexes === null || indexes === void 0 ? void 0 : indexes.length;
  const sample = Array(hi);

  for (--hi; hi >= 0; hi--) sample[hi] = vec[indexes[hi]];

  return sample;
};

const selectEntry = (vec, keyIndex, valIndex) => [vec[keyIndex], vec[valIndex]];

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

const divide = (vec, indexes, hi) => {
  var _hi;

  return hi = (_hi = hi) !== null && _hi !== void 0 ? _hi : indexes === null || indexes === void 0 ? void 0 : indexes.length, {
    pick: partition(vec, indexes, hi).splice(indexes[0], hi),
    rest: vec
  };
};

/**
 * Fisher–Yates shuffle, a.k.a Knuth shuffle
 * @param {Array} ve
 * @param {number} [size] - if omitted, size will be keys?.length
 * @returns {Array} mutated array
 */

const shuffle = function (ve, size) {
  let l = ve === null || ve === void 0 ? void 0 : ve.length;
  const lo = max(0, l - (size !== null && size !== void 0 ? size : l));

  while (--l >= lo) swap.call(ve, l, rand(l));

  return lo ? (ve.splice(0, lo), ve) : ve;
};

const leap = (ve, start, gap) => {
  const wd = ve === null || ve === void 0 ? void 0 : ve.length,
        vec = Array(gap);
  let lo = start ? min(start, wd - 1) : rand(wd),
      i = 0;

  while (i < gap) {
    vec[i++] = ve[lo++];
    if (lo === wd) lo = 0;
  }

  return vec;
};

export { divide, leap, select, selectEntry, shuffle };
