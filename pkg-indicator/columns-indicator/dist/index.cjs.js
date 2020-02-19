'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var columnsMapper = require('@vect/columns-mapper');
var vectorIndicator = require('@vect/vector-indicator');

const max = function (matrix) {
  const indicator = this;
  return columnsMapper.mapper(matrix, col => vectorIndicator.maxBy(col, indicator));
};
const maxBy = (matrix, indicator) => max.call(indicator, matrix);
const Max = indicator => max.bind(indicator);

const min = function (matrix) {
  const indicator = this;
  return columnsMapper.mapper(matrix, col => vectorIndicator.minBy(col, indicator));
};
const minBy = (matrix, indicator) => min.call(indicator, matrix);
const Min = indicator => min.bind(indicator);

exports.Max = Max;
exports.Min = Min;
exports.maxBy = maxBy;
exports.minBy = minBy;
