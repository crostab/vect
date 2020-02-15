'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const zipper = (a, b, fn, l) => {
  l = l || a && a.length;
  const vec = Array(l);

  for (--l; l >= 0; l--) vec[l] = fn(a[l], b[l], l);

  return vec;
};

const mutazip = (va, vb, fn, l) => {
  l = l || va && va.length;

  for (--l; l >= 0; l--) va[l] = fn(va[l], vb[l], l);

  return va;
};

exports.mutazip = mutazip;
exports.zipper = zipper;
