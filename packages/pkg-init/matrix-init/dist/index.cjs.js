'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const draft = (h, w) => {
  const mx = Array(h);

  for (--h; h >= 0; h--) mx[h] = Array(w);

  return mx;
};
const iso = (h, w, v) => {
  const mx = Array(h);

  for (let i = 0, j, ro; i < h; i++) for (j = 0, mx[i] = ro = Array(w); j < w; j++) ro[j] = v;

  return mx;
};
const init = (h, w, fn) => {
  const mx = Array(h);

  for (let i = 0, j, ro; i < h; i++) for (j = 0, mx[i] = ro = Array(w); j < w; j++) ro[j] = fn(i, j);

  return mx;
};
const starter = (h, w, {
  value,
  fn
}) => {
  h = h || 1, w = w || 1;
  if (value !== null || value !== void 0) return iso(h, w, value);
  if (fn) return index(h, w, fn);
  return draft(h, w);
};

/**
 *
 * @param {*[][]} mx
 */
const shallow = mx => mx.map(r => r.slice());

exports.draft = draft;
exports.fab = draft;
exports.ini = init;
exports.init = init;
exports.iso = iso;
exports.shallow = shallow;
exports.starter = starter;
