'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const size = mx => {
  let h, r;
  return mx && (h = mx.length) && (r = mx[0]) ? [h, r.length] : [h, r];
};

const zipper = (a, b, fn, l) => {
  l = l || a && a.length;
  const vec = Array(l);

  for (--l; l >= 0; l--) vec[l] = fn(a[l], b[l], l);

  return vec;
};

const column = function (c, h) {
  return zipper(this, r => r[c], h);
};

const zipper$1 = (ma, mb, zipOnColumns) => {
  const [h, w] = size(ma),
        banner = Array(w);

  for (let c = 0, ca = column.bind(ma), cb = column.bind(mb); c < w; c++) banner[c] = zipOnColumns(ca(c, h), cb(c, h), c);

  return banner;
};

exports.zipper = zipper$1;
