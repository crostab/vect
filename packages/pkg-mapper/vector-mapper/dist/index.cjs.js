'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const iterate = function (vec, fn, l) {
  l = l || vec && vec.length;

  for (let i = 0; i < l; i++) fn.call(this, vec[i], l);
};

const mapper = function (vec, fn, l) {
  l = l || vec && vec.length;
  const ar = Array(l);

  for (--l; l >= 0; l--) ar[l] = fn.call(this, vec[l], l);

  return ar;
};

const mutate = (vec, fn, l) => {
  l = l || vec && vec.length;

  for (--l; l >= 0; l--) vec[l] = fn(vec[l], l);

  return vec;
};

exports.iterate = iterate;
exports.mapper = mapper;
exports.mutate = mutate;
