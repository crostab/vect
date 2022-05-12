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

function* indexedOf(mx) {
  for (let j = 0, w = matrixIndex.width(mx); j < w; j++) {
    yield matrixIndex.column.call(mx, j);
  }
}
function* indexedBy(mx, by) {
  for (let j = 0, w = matrixIndex.width(mx); j < w; j++) {
    const col = matrixIndex.column.call(mx, j);
    if (by(col, j)) yield col;
  }
}
function* indexedTo(mx, to) {
  for (let j = 0, w = matrixIndex.width(mx); j < w; j++) {
    const col = matrixIndex.column.call(mx, j);
    yield to(col, j);
  }
}
function* indexed(mx, by, to) {
  if (!to) {
    return yield* !by ? indexedOf(mx) : indexedBy(mx, by);
  }

  for (let j = 0, w = matrixIndex.width(mx); j < w; j++) {
    const col = matrixIndex.column.call(mx, j);
    if (by(col, j)) yield to(col, j);
  }
}

exports.indexed = indexed;
exports.indexedBy = indexedBy;
exports.indexedOf = indexedOf;
exports.indexedTo = indexedTo;
exports.iterate = iterate;
exports.mapper = mapper;
