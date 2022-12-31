'use strict';

var nullish = require('@typen/nullish');

function draft(h, w) {
  const mx = Array(h);
  for (--h; h >= 0; h--) mx[h] = Array(w);
  return mx;
}
function iso(h, w, v) {
  const mx = Array(h);
  for (let i = 0, j, row; i < h; i++) for (j = 0, mx[i] = row = Array(w); j < w; j++) row[j] = v;
  return mx;
}
function init(h, w, fn) {
  const mx = Array(h);
  for (let i = 0, j, row; i < h; i++) for (j = 0, mx[i] = row = Array(w); j < w; j++) row[j] = fn(i, j);
  return mx;
}
function product(side, head, xyTo) {
  const h = side.length,
    w = head.length,
    mx = Array(h);
  for (let i = 0, j, row; i < h; i++) {
    for (j = 0, mx[i] = row = Array(w); j < w; j++) {
      row[j] = xyTo(side[i], head[j], i, j);
    }
  }
  return mx;
}
function reshape(vec, h, w) {
  const mx = Array(h);
  for (let i = 0, b = 0; i < h; i++) {
    const row = mx[i] = Array(w);
    for (let j = 0; j < w; j++) row[j] = vec[b + j];
    b += w;
  }
  return mx;
}

/** @deprecated */
function starter(h = 1, w = 1, {
  value,
  fn
}) {
  if (!nullish.nullish(value)) return iso(h, w, value);
  if (fn) return init(h, w, fn);
  return draft(h, w);
}
const shallow = mx => mx.map(r => r.slice());

exports.draft = draft;
exports.init = init;
exports.iso = iso;
exports.product = product;
exports.reshape = reshape;
exports.shallow = shallow;
exports.starter = starter;
