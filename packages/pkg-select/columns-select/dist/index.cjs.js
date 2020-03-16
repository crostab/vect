'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var columnGetter = require('@vect/column-getter');
var vectorSelect = require('@vect/vector-select');
var vectorMapper = require('@vect/vector-mapper');

/**
 * @param {*[][]} mx
 * @param {number[]} ys
 * @returns {*[][]}
 */

const select = (mx, ys) => {
  const hi = ys.length;
  if (hi === 0) return mx;
  if (hi === 1) return columnGetter.column(mx, ys[0]);
  return mx.map(row => vectorSelect.select(row, ys, hi));
};

/**
 * The indexes should be integer array sorted by ascending.
 * Return selected rows and rest rows.
 * 'Pick' rows is new matrix, and the 'rest' points to the input matrix.
 * @param {*[]} mx
 * @param {number[]} indexes - integer array sorted ascending
 * @param {number} [hi] - length of indexes
 * @returns {{pick: *[][], rest: *[][]}} - rest points to altered original matrix, pick is an new matrix.
 */

const divide = (mx, indexes, hi) => {
  hi = hi || indexes.length;
  let h = mx.length,
      y;
  if (hi === 0) return {
    pick: Array(h),
    rest: mx
  };
  const pick = Array(h);
  if (hi === 1) return [y] = indexes, {
    pick: pick,
    rest: vectorMapper.mapper(mx, (row, i) => (pick[i] = row.splice(y, 1), row), h)
  };
  const rest = mx;
  vectorMapper.iterate(mx, (row, i) => {
    ({
      pick: pick[i],
      rest: rest[i]
    } = vectorSelect.divide(row, indexes, hi));
  });
  return {
    pick,
    rest
  };
};

exports.divide = divide;
exports.select = select;
