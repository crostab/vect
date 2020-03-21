'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Insert element at current(c) position to projected(previous(n)) position.
 * s.t. p <= c
 */


const insertDown = function (c, p) {
  const t = this[c];

  while (c > p) this[c] = this[--c]; // moves backward


  return this[p] = t;
};

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

exports.partition = partition;
exports.splices = splices;
