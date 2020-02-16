'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var matrixSize = require('@vect/matrix-size');

/**
 * Return true if every element in a matrix matches the input criteria.
 * Return true if either height or width is zero.
 * @param {*[][]} mx
 * @param {function(*,number?,number?):*} crit
 * @returns {boolean}
 */

const every = (mx, crit) => {
  const [ht, wd] = matrixSize.size(mx);

  for (let i = 0, j, r; i < ht; i++) for (j = 0, r = mx[i]; j < wd; j++) if (!crit(r[j], i, j)) return false;

  return true;
};

/**
 * Return true if at least one element in a matrix matches the input criteria.
 * Return false if either height or width is zero.
 * @param {*[][]} mx
 * @param {function(*,number?,number?):*} crit
 * @returns {boolean}
 */

const some = (mx, crit) => {
  const [ht, wd] = matrixSize.size(mx);

  for (let i = 0, j, r; i < ht; i++) for (j = 0, r = mx[i]; j < wd; j++) if (crit(r[j], i, j)) return true;

  return false;
};

exports.every = every;
exports.some = some;
