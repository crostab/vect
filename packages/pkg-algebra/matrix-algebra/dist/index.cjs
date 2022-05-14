'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var matrixInit = require('@vect/matrix-init');
var matrixIndex = require('@vect/matrix-index');

const multiply = (a, b) => {
  const [ha, wa] = matrixIndex.size(a),
        [hb, wb] = matrixIndex.size(b);

  if (wa !== hb) {
    throw new Error('incompatible sizes');
  }

  const mx = matrixInit.draft(ha, wb);

  for (let i = 0; i < ha; i++) {
    for (let j = 0; j < wb; j++) {
      let sum = 0;

      for (let k = 0; k < wa; k++) sum += a[i][k] * b[k][j];

      mx[i][j] = sum;
    }
  }

  return mx;
};

/**
 * Transpose a 2d-array.
 * @param {*[][]} mx
 * @returns {*[][]}
 */

const transpose = mx => {
  const h = matrixIndex.height(mx),
        w = matrixIndex.width(mx),
        cols = Array(w);

  for (let j = 0; j < w; j++) for (let i = 0, col = cols[j] = Array(h); i < h; i++) col[i] = mx[i][j];

  return cols;
};

exports.multiply = multiply;
exports.transpose = transpose;
