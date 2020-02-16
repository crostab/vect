'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var matrixSize = require('@vect/matrix-size');
var columnGetter = require('@vect/column-getter');

const zipper = (ma, mb, zipOnColumns) => {
  const [h, w] = matrixSize.size(ma),
        banner = Array(w);

  for (let c = 0, ca = columnGetter.Columns(ma), cb = columnGetter.Columns(mb); c < w; c++) banner[c] = zipOnColumns(ca(c, h), cb(c, h), c);

  return banner;
};

exports.zipper = zipper;
