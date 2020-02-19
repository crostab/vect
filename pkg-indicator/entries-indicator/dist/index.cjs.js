'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var comparer = require('@aryth/comparer');

const max = function (entries) {
  const [kpi, vpi] = this;
  return entries.reduce((pe, ce, i) => (pe[0] = comparer.max(pe[0], kpi(ce[0], i)), pe[1] = comparer.max(pe[1], vpi(ce[1], i)), pe), [kpi(entries[0][0], 0), vpi(entries[0][1], 0)]);
};
const maxBy = (entries, kpi, vpi) => max.call([kpi, vpi], entries);
const Max = (kpi, vpi) => max.bind([kpi, vpi]);

const min = function (entries) {
  const [kpi, vpi] = this;
  return entries.reduce((pe, ce, i) => (pe[0] = comparer.min(pe[0], kpi(ce[0], i)), pe[1] = comparer.min(pe[1], vpi(ce[1], i)), pe), [kpi(entries[0][0], 0), vpi(entries[0][1], 0)]);
};
const minBy = (entries, kpi, vpi) => min.call([kpi, vpi], entries);
const Min = (kpi, vpi) => min.bind([kpi, vpi]);

exports.Max = Max;
exports.Min = Min;
exports.maxBy = maxBy;
exports.minBy = minBy;
