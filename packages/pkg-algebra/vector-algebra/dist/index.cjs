'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vectorMapper = require('@vect/vector-mapper');

const union = (a, b) => {
  const ve = a.slice();
  vectorMapper.iterate(b, x => {
    if (!a.includes(x)) ve.push(x);
  });
  return ve;
};
const intersect = (a, b) => {
  const ve = [];
  vectorMapper.iterate(a, x => {
    if (b.includes(x)) ve.push(x);
  });
  return ve;
};
const difference = (a, b) => {
  const ve = [];
  vectorMapper.iterate(a, x => {
    if (!b.includes(x)) ve.push(x);
  });
  return ve;
};

exports.difference = difference;
exports.intersect = intersect;
exports.union = union;
