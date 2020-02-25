'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var columnGetter = require('@vect/column-getter');
var vectorSelect = require('@vect/vector-select');

/**
 * @param {*[][]} mx
 * @param {number[]} ys
 * @returns {*}
 */

const select = (mx, ys) => {
  const hi = ys.length;
  if (hi === 0) return mx;
  if (hi === 1) return columnGetter.column(mx, ys[0]);
  return mx.map(row => vectorSelect.select(row, ys, hi));
};

exports.select = select;
