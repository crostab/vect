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

// acquire is useful when you want to return the original expanded array, and when the array length is short.
// merge is useful when you want to return a new array, or when the array length is longer.
// the watershed between short and long array is estimated to be 32.

// export default Function.prototype.apply.bind(Array.prototype.push)
const acquire = (va, vb) => (Array.prototype.push.apply(va, vb), va);

// export default Function.prototype.call.bind(Array.prototype.concat)
const merge = (va, vb) => Array.prototype.concat.call(va, vb);
const merges = (...vectors) => Array.prototype.concat.apply([], vectors);

exports.acquire = acquire;
exports.difference = difference;
exports.intersect = intersect;
exports.merge = merge;
exports.merges = merges;
exports.union = union;
