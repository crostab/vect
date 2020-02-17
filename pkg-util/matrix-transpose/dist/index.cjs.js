'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vectorMapper = require('@vect/vector-mapper');
var matrixSize = require('@vect/matrix-size');

/**
 * Transpose a 2d-array.
 * @param {*[][]} mx
 * @returns {*[][]}
 */

const transpose = mx => {
  let [h, w] = matrixSize.size(mx);
  let cols = Array(w);

  for (--w; w >= 0; w--) cols[w] = vectorMapper.mapper(mx, r => r[w], h);

  return cols;
};

exports.transpose = transpose;
