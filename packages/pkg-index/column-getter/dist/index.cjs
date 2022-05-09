'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vectorMapper = require('@vect/vector-mapper');

const column = (mx, c, h) => vectorMapper.mapper(mx, r => r[c], h);

const columns = function (y, h) {
  return vectorMapper.mapper(this, r => r[y], h);
};

const Columns = mx => columns.bind(mx);

exports.Columns = Columns;
exports.column = column;
