'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var comparer = require('@aryth/comparer');

const max = function (matrix) {
  let fn = this;
  return matrix.reduce((prv, r, i) => comparer.max(prv, r.reduce((acc, x, j) => comparer.max(acc, fn(x, i, j)))), fn(matrix[0][0], 0, 0));
};
const maxBy = (matrix, indicator) => max.call(indicator, matrix);
const Max = indicator => max.bind(indicator);

const min = function (matrix) {
  let fn = this;
  return matrix.reduce((prv, r, i) => comparer.min(prv, r.reduce((acc, x, j) => comparer.min(acc, fn(x, i, j)))), fn(matrix[0][0], 0, 0));
};
const minBy = (matrix, indicator) => min.call(indicator, matrix);
const Min = indicator => min.bind(indicator);

exports.Max = Max;
exports.Min = Min;
exports.maxBy = maxBy;
exports.minBy = minBy;
