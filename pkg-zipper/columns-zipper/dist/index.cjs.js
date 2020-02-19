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

const zipperBand = (matrix, band, zipColBand) => {
  const [ht, wd] = matrixSize.size(matrix),
        vec = Array(wd);

  for (let ci = 0, columns = columnGetter.Columns(matrix); ci < wd; ci++) vec[ci] = zipColBand(columns(ci, ht), band, ci);

  return vec;
};

exports.zipper = zipper;
exports.zipperBand = zipperBand;
