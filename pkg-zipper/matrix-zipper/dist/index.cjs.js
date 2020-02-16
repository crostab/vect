'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vectorZipper = require('@vect/vector-zipper');
var matrixSize = require('@vect/matrix-size');

/**
 * Iterate through elements on each (x of rows,y of columns) coordinate of a 2d-array.
 * @param {*[][]} ma
 * @param {*[][]} mb
 * @param {function} fn
 * @returns {*[]}
 */

const zipper = (ma, mb, fn) => {
  const [ht, wd] = matrixSize.size(ma);
  return vectorZipper.zipper(ma, mb, (ra, rb, i) => vectorZipper.zipper(ra, rb, (x, y, j) => fn(x, y, i, j), wd), ht);
};

const mutazip = (ma, mb, fn) => {
  const [ht, wd] = matrixSize.size(ma);

  for (let i = 0, j, ra, rb; i < ht; i++) for (j = 0, ra = ma[i], rb = mb[i]; j < wd; j++) ra[j] = fn(ra[j], rb[j], i, j);

  return ma;
};

exports.mutazip = mutazip;
exports.zipper = zipper;
