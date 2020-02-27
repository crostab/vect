'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vectorMapper = require('@vect/vector-mapper');
var vectorZipper = require('@vect/vector-zipper');
var vectorUpdate = require('@vect/vector-update');

const pop = matrix => vectorMapper.mapper(matrix, row => row.pop());

/**
 * push each element of column to each row of matrix, return void 0
 * @param {*[][]} matrix
 * @param {*[]} column
 * @returns {*}
 */

const push = (matrix, column) => void vectorZipper.zipper(matrix, column, (row, el) => row.push(el));

const shift = matrix => {
  return vectorMapper.mapper(matrix, row => {
    return row.shift();
  });
};

/**
 * unshift each element of column to each row of matrix, return void 0
 * @param {*[][]} matrix
 * @param {*[]} column
 * @returns {*}
 */

const unshift = (matrix, column) => vectorZipper.zipper(matrix, column, (row, el) => row.unshift(el));

const splices = (mx, ys) => {
  const hi = ys.length;
  if (hi === 0) return mx;
  if (hi === 1) return mapper(mx, r => (r.splice(ys[0], 1), r));
  return mx.map(row => vectorUpdate.splices(row, ys, hi));
};

exports.pop = pop;
exports.push = push;
exports.shift = shift;
exports.splices = splices;
exports.unshift = unshift;