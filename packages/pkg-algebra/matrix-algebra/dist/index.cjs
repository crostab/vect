'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var matrix = require('@vect/matrix');

const multiply = (a, b) => {
  const [ha, wa] = matrix.size(a);
  const [hb, wb] = matrix.size(b);

  if (wa !== hb) {
    throw new Error('incompatible sizes');
  }

  const mx = matrix.draft(ha, wb);

  for (let i = 0; i < ha; i++) {
    for (let j = 0; j < wb; j++) {
      let sum = 0;

      for (let k = 0; k < wa; k++) sum += a[i][k] * b[k][j];

      mx[i][j] = sum;
    }
  }

  return mx;
};

exports.multiply = multiply;
