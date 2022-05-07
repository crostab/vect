'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const first = o => {
  for (let k in o) return k;
};
const firstValue = o => o[first(o)];
const firstEntry = o => {
  const k = first(o);
  return [k, o[k]];
};
const last = o => {
  let k;

  for (let x in o) {
    k = x;
  }

  return k;
};
const lastValue = o => o[last(o)];
const lastEntry = o => {
  const k = last(o);
  return [k, o[k]];
};
const len = o => {
  let hi = 0;

  for (let k in o) hi++;

  return hi;
};
const isEmpty = o => {
  for (let k in o) return false;

  return true;
};

exports.first = first;
exports.firstEntry = firstEntry;
exports.firstValue = firstValue;
exports.isEmpty = isEmpty;
exports.last = last;
exports.lastEntry = lastEntry;
exports.lastValue = lastValue;
exports.len = len;
