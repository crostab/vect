'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var comparer = require('@aryth/comparer');

const max = function (matrix) {
  const {
    y,
    fn
  } = this;
  return matrix.reduce((p, r, i) => comparer.max(p, fn(r[y], i, y)), fn(matrix[0][y], 0, y));
};
const maxBy = (matrix, y, fn) => max.call({
  y,
  fn
}, matrix);
const Max = (y, fn) => max.bind({
  y,
  fn
});

const min = function (matrix) {
  const {
    y,
    fn
  } = this;
  return matrix.reduce((p, r, i) => comparer.min(p, fn(r[y], i, y)), fn(matrix[0][y], 0, y));
};
const minBy = (matrix, y, fn) => min.call({
  y,
  fn
}, matrix);
const Min = (y, fn) => min.bind({
  y,
  fn
});

exports.Max = Max;
exports.Min = Min;
exports.maxBy = maxBy;
exports.minBy = minBy;
