'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const size = mx => {
  let h, r;
  return mx && (h = mx.length) && (r = mx[0]) ? [h, r.length] : [h, r];
};

const mapper = (ar, fn, l) => {
  l = l || ar && ar.length;
  const vec = Array(l);

  for (--l; l >= 0; l--) vec[l] = fn(ar[l], l);

  return vec;
};

const column = function (c, h) {
  return mapper(this, r => r[c], h);
};

const mapper$1 = (mx, mapOnColumns) => {
  const [h, w] = size(mx),
        columns = Array(w);

  for (let c = 0, col = column.bind(mx); c < w; c++) columns[c] = mapOnColumns(col(c, h), c);

  return columns;
};

exports.mapper = mapper$1;
