'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var matrixSize = require('@vect/matrix-size');

/**
 *
 * @param {*[][]} mx
 * @param {function} fn
 * @param {number} [h]
 * @param {number} [w]
 * @returns {undefined}
 */

const iterate = function (mx, fn, h, w) {
  if (!h || !w) [h, w] = matrixSize.size(mx);

  for (let i = 0, j, r; i < h; i++) for (r = mx[i], j = 0; j < w; j++) fn.call(this, r[j], i, j);
};

/**
 * Iterate through elements on each (x of rows,y of columns) coordinate of a 2d-array.
 * @param {*[][]} mx
 * @param {function} fn
 * @returns {*[]}
 */

const mapper = (mx, fn) => {
  const [ht, wd] = matrixSize.size(mx),
        tx = Array(ht);

  for (let i = 0, j, r, tr; i < ht; i++) for (tx[i] = tr = Array(wd), r = mx[i], j = 0; j < wd; j++) tr[j] = fn(r[j], i, j);

  return tx;
};

const mutate = (mx, fn) => {
  const [ht, wd] = matrixSize.size(mx);

  for (let i = 0, j, r; i < ht; i++) for (j = 0, r = mx[i]; j < wd; j++) r[j] = fn(r[j], i, j);

  return mx;
};

exports.iterate = iterate;
exports.mapper = mapper;
exports.mutate = mutate;
