'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var comparer = require('@aryth/comparer');

const max = function (vec) {
  const fn = this;
  return vec.reduce((p, x, i) => comparer.max(p, fn(x, i)), fn(vec[0], 0));
};
const maxBy = (vec, indicator) => max.call(indicator, vec);
const Max = indicator => max.bind(indicator);

const min = function (vec) {
  const fn = this;
  return vec.reduce((p, x, i) => comparer.min(p, fn(x, i)), fn(vec[0], 0));
};
const minBy = (vec, indicator) => min.call(indicator, vec);
const Min = kpi => min.bind(kpi);

exports.Max = Max;
exports.Min = Min;
exports.maxBy = maxBy;
exports.minBy = minBy;
