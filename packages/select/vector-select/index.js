import { rollBunch, swap } from '@vect/vector-index';
import { max, min } from '@aryth/comparer';
import { rand } from '@aryth/rand';

const select = (vec, inds) => {
  let hi = inds?.length, sample = Array(hi);
  for (--hi; hi >= 0; hi--) sample[hi] = vec[inds[hi]];
  return sample
};

const selectEntry = (vec, ki, vi) => [ vec[ki], vec[vi] ];

const selectTriplet = (vec, [ xi, yi, zi ]) => [ vec[xi], vec[yi], vec[zi] ];

/**
 * @param {*[]} vec - input array
 * @param {number[]} inds - indexes in ascending order indicating which elements to select
 * @returns {[*[],*[]]} - [ selected, input ]
 */
const separate = (vec, inds) => {
  const hi = inds?.length;
  return hi
    ? [ rollBunch(vec, inds).splice(inds[0], hi), vec ]
    : [ [], vec ]
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
  const hi = inds?.length;
  return hi
    ? { pick: rollBunch(vec, inds).splice(inds[0], hi), rest: vec }
    : { pick: [], rest: vec }
};

/**
 * Fisher–Yates shuffle, or Knuth shuffle
 * @param {Array} ve
 * @param {number} [size] - if omitted, size will be keys?.length
 * @returns {Array} mutated array
 */
const shuffle = function (ve, size) {
  let l = ve?.length;
  const lo = max(0, l - (size ?? l));
  while (--l >= lo) swap.call(ve, l, rand(l));
  return lo ? (ve.splice(0, lo), ve) : ve
};


const leap = (ve, start, gap) => {
  const wd = ve?.length, vec = Array(gap);
  let lo = start ? min(start, wd - 1) : rand(wd), i = 0;
  while (i < gap) {
    vec[i++] = ve[lo++];
    if (lo === wd) lo = 0;
  }
  return vec
};

function distinctOf(vec) {
  const dedupe = [];
  for (let i = 0, h = vec?.length, x; i < h; i++)
    if (!dedupe.includes(x = vec[i])) dedupe.push(x);
  return dedupe
}

function distinctBy(vec, by) {
  const dedupe = [];
  for (let i = 0, h = vec?.length, x; i < h; i++)
    if (by(x = vec[i], i) && !dedupe.includes(x)) dedupe.push(x);
  return dedupe
}

function distinctTo(vec, to) {
  if (!to) return distinctOf(vec)
  const dedupe = [];
  for (let i = 0, h = vec?.length, y; i < h; i++)
    if (!dedupe.includes(y = to(vec[i], i))) dedupe.push(y);
  return dedupe
}

function distinct(vec, by, to) {
  if (!to) return (!by ? distinctOf(vec) : distinctBy(vec, by))
  const dedupe = [];
  for (let i = 0, h = vec?.length, x, y; i < h; i++)
    if (by(x = vec[i], i) && !dedupe.includes(y = to(x, i))) dedupe.push(y);
  return dedupe
}

function collectOf(vec) {
  const output = [];
  for (let i = 0, h = vec?.length, x; i < h; i++)
    output.push(vec[i]);
  return output
}

function collectBy(vec, by) {
  const output = [];
  for (let i = 0, h = vec?.length, x; i < h; i++)
    if (by(x = vec[i], i)) output.push(x);
  return output
}

function collectTo(vec, to) {
  if (!to) return collectOf(vec)
  const output = [];
  for (let i = 0, h = vec?.length; i < h; i++)
    output.push(to(vec[i], i));
  return output
}

function collect(vec, by, to) {
  if (!to) return (!by ? collectOf(vec) : collectBy(vec, by))
  const output = [];
  for (let i = 0, h = vec?.length, x, y; i < h; i++)
    if (by(x = vec[i], i)) output.push(to(x, i));
  return output
}

export { collect, collectBy, collectOf, collectTo, distinct, distinctBy, distinctOf, distinctTo, divide, leap, select, selectEntry, selectTriplet, separate, shuffle };
