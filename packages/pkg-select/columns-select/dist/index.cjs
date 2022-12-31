'use strict';

var columnMapper = require('@vect/column-mapper');
var vectorSelect = require('@vect/vector-select');
var vectorIndex = require('@vect/vector-index');
var vectorMapper = require('@vect/vector-mapper');

/**
 * @param {*[][]} mx
 * @param {number[]} ys
 * @returns {*[][]}
 */
const select = (mx, ys) => {
  const hi = (ys === null || ys === void 0 ? void 0 : ys.length) ?? 0;
  if (hi === 0) return mx;
  if (hi === 1) return columnMapper.mapper(mx, ys[0], x => [x]);
  return mx.map(row => vectorSelect.select(row, ys, hi));
};

/**
 * The indexes should be integer array sorted by ascending.
 * Return selected rows and rest rows.
 * 'Pick' rows is new matrix, and the 'rest' points to the input matrix.
 * @param {*[]} mx
 * @param {number[]} inds - integer array sorted ascending
 * @returns {{pick: *[][], rest: *[][]}} - rest points to altered original matrix, pick is an new matrix.
 */
const divide = (mx, inds) => {
  const n = inds === null || inds === void 0 ? void 0 : inds.length,
    ht = mx === null || mx === void 0 ? void 0 : mx.length;
  if (n === 0) {
    return {
      pick: Array(ht),
      rest: mx
    };
  }
  if (n === 1) {
    const pick = Array(ht),
      rest = mx,
      y = inds[0];
    for (let i = 0; i < ht; i++) {
      pick[i] = mx[i].splice(y, 1);
    }
    return {
      pick,
      rest
    };
  } else {
    const pick = Array(ht),
      rest = mx;
    for (let i = 0; i < ht; i++) {
      pick[i] = vectorIndex.rollBunch(mx[i], inds).splice(inds[0], n);
    }
    return {
      pick,
      rest
    };
  }
};
const separate = (mx, inds) => {
  const n = inds === null || inds === void 0 ? void 0 : inds.length,
    ht = mx === null || mx === void 0 ? void 0 : mx.length,
    pick = Array(ht);
  if (n === 0) {
    return [pick, mx];
  }
  if (n === 1) {
    for (let i = 0, [y] = inds; i < ht; i++) {
      pick[i] = mx[i].splice(y, 1);
    }
  } else {
    for (let i = 0; i < ht; i++) {
      pick[i] = vectorIndex.rollBunch(mx[i], inds).splice(inds[0], n);
    }
  }
  return [pick, mx];
};

const selectEntries = (mx, ki, vi) => vectorMapper.mapper(mx, row => vectorSelect.selectEntry(row, ki, vi));

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
exports.separate = separate;
