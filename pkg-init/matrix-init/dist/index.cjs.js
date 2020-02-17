'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const fab = (h, w) => {
  const mx = Array(h);

  for (--h; h >= 0; h--) mx[h] = Array(w);

  return mx;
};
const iso = (h, w, v) => {
  const mx = Array(h);

  for (let i = 0, j, ro; i < h; i++) for (j = 0, mx[i] = ro = Array(w); j < w; j++) ro[j] = v;

  return mx;
};
const ini = (h, w, fn) => {
  const mx = Array(h);

  for (let i = 0, j, ro; i < h; i++) for (j = 0, mx[i] = ro = Array(w); j < w; j++) ro[j] = fn(i, j);

  return mx;
};
const starter = (h, w, {
  value,
  fn
}) => {
  h = h || 1;
  w = w || 1;
  if (value !== undefined || value !== void 0) return iso(h, w, value);
  if (fn) return ini(h, w, fn);
  return fab(h, w);
};

exports.fab = fab;
exports.ini = ini;
exports.iso = iso;
exports.starter = starter;
