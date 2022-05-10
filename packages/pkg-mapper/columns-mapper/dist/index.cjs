'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var matrixIndex = require('@vect/matrix-index');

const mapper = (mx, colTo) => {
  const h = mx === null || mx === void 0 ? void 0 : mx.length,
        w = matrixIndex.width(mx),
        vec = Array(w),
        col = matrixIndex.column.bind(mx);

  for (let j = 0; j < w; j++) vec[j] = colTo(col(j, h), j);

  return vec;
};
const iterate = function (mx, onCol) {
  const h = mx === null || mx === void 0 ? void 0 : mx.length,
        w = matrixIndex.width(mx),
        col = matrixIndex.column.bind(mx);

  for (let j = 0; j < w; j++) onCol.call(this, col(j, h), j);
};

exports.iterate = iterate;
exports.mapper = mapper;
