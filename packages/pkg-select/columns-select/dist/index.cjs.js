'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var columnMapper = require('@vect/column-mapper');
var vectorSelect = require('@vect/vector-select');
var vectorMapper = require('@vect/vector-mapper');

/**
 * @param {*[][]} mx
 * @param {number[]} ys
 * @returns {*[][]}
 */

const select = (mx, ys) => {
  var _ys$length;

  const hi = (_ys$length = ys === null || ys === void 0 ? void 0 : ys.length) !== null && _ys$length !== void 0 ? _ys$length : 0;
  if (hi === 0) return mx;
  if (hi === 1) return columnMapper.mapper(mx, ys[0], x => [x]);
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
  var _hi;

  hi = (_hi = hi) !== null && _hi !== void 0 ? _hi : indexes === null || indexes === void 0 ? void 0 : indexes.length;
  let h = mx === null || mx === void 0 ? void 0 : mx.length,
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

const selectEntries = (mx, keyInd, valInd) => vectorMapper.mapper(mx, row => vectorSelect.selectEntry(row, keyInd, valInd));

const selectObject = (mx, keyInd, valInd) => {
  let o = {},
      x;
  vectorMapper.iterate(mx, row => {
    if (!((x = row[keyInd]) in o)) o[x] = row[valInd];
  });
  return o;
};

exports.divide = divide;
exports.select = select;
exports.selectEntries = selectEntries;
exports.selectObject = selectObject;
