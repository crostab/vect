'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vectorMargin = require('@vect/vector-margin');

const marginCopy = (mx, t, b, l, r, h, w) => {
  const x = Array(h || (h = mx && mx.length)),
        bs = h - b;

  for (let i = 0; i < t; i++) x[i] = vectorMargin.marginCopy(mx[i], l, r, w);

  for (let i = bs; i < h; i++) x[i] = vectorMargin.marginCopy(mx[i], l, r, w);

  return x;
};

const rowMaMapper = (row, i, fn, l, r, w) => {
  const ve = Array(w || (w = row && row.length)),
        s = w - r;

  for (--l; l >= 0; l--) ve[l] = fn(row[l], i, l);

  for (--w; w >= s; w--) ve[w] = fn(row[w], i, w);

  return ve;
};

const marginMapper = (mx, fn, t, b, l, r, h, w) => {
  const x = Array(h || (h = mx && mx.length)),
        bs = h - b;

  for (let i = 0; i < t; i++) x[i] = rowMaMapper(mx[i], i, fn, l, r, w);

  for (let i = bs; i < h; i++) x[i] = rowMaMapper(mx[i], i, fn, l, r, w);

  return x;
};

const rowMaMutate = (row, i, fn, l, r, w) => {
  w = w || row && row.length;
  const s = w - r;

  for (--l; l >= 0; l--) row[l] = fn(row[l], i, l);

  for (--w; w >= s; w--) row[w] = fn(row[w], i, w);

  return row;
};

const marginMutate = (mx, fn, t, b, l, r, h, w) => {
  h = h || mx && mx.length;
  const s = h - b;

  for (let i = 0; i < t; i++) rowMaMutate(mx[i], i, fn, l, r, w);

  for (let i = s; i < h; i++) rowMaMutate(mx[i], i, fn, l, r, w);

  return mx;
};

exports.marginCopy = marginCopy;
exports.marginMapper = marginMapper;
exports.marginMutate = marginMutate;
