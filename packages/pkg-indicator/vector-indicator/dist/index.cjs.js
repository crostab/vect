'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var comparer = require('@aryth/comparer');

const max = function (vec) {
  const fn = this;
  return !fn ? vec.reduce((p, x) => comparer.max(x, p), vec[0]) : vec.reduce((p, x, i) => comparer.max(fn(x, i), p), fn(vec[0], 0));
};
const maxBy = (vec, indicator) => max.call(indicator, vec);
const Max = indicator => max.bind(indicator);

const min = function (vec) {
  const fn = this;
  return !fn ? vec.reduce((p, x) => comparer.min(x, p), vec[0]) : vec.reduce((p, x, i) => comparer.min(fn(x, i), p), fn(vec[0], 0));
};
const minBy = (vec, indicator) => min.call(indicator, vec);
const Min = kpi => min.bind(kpi);

exports.Max = Max;
exports.Min = Min;
exports.maxBy = maxBy;
exports.minBy = minBy;
