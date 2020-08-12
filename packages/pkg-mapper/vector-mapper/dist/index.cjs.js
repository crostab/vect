'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const iterate = function (vec, fn, l) {
  l = l || (vec === null || vec === void 0 ? void 0 : vec.length);

  for (let i = 0; i < l; i++) fn.call(this, vec[i], i);
};

const reviter = function (vec, fn, l) {
  l = l || (vec === null || vec === void 0 ? void 0 : vec.length);

  for (--l; l >= 0; l--) fn.call(this, vec[l], l);
};

const mapper = function (vec, fn, l) {
  l = l || (vec === null || vec === void 0 ? void 0 : vec.length);
  const ar = Array(l);

  for (--l; l >= 0; l--) ar[l] = fn.call(this, vec[l], l);

  return ar;
};

const mutate = (vec, fn, l) => {
  l = l || (vec === null || vec === void 0 ? void 0 : vec.length);

  for (--l; l >= 0; l--) vec[l] = fn(vec[l], l);

  return vec;
};

exports.iterate = iterate;
exports.mapper = mapper;
exports.mutate = mutate;
exports.reviter = reviter;
