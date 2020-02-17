'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Mapper = require('@vect/matrix-mapper');
var Zipper = require('@vect/matrix-zipper');
var Quantifier = require('@vect/matrix-quantifier');
var Size = require('@vect/matrix-size');
var Transpose = require('@vect/matrix-transpose');
var ColumnsMapper = require('@vect/columns-mapper');
var Initializer = require('@vect/matrix-init');
var vector = require('@vect/vector');

/**
 *
 * @param {*[][]} mx
 * @return {number[]}
 */
const coins = mx => !Array.isArray(mx) || !Array.isArray(mx[0]) ? [] : mx[0].map((_, i) => i);

const isMatrix = mx => Array.isArray(mx) && Array.isArray(mx[0]);

const copyMargin = (mx, t, b, l, r, h, w) => {
  const x = Array(h),
        bs = h - b;

  for (let i = 0; i < t; i++) x[i] = vector.copyMargin(mx[i], l, r, w);

  for (let i = bs; i < h; i++) x[i] = vector.copyMargin(mx[i], l, r, w);

  return x;
};

const copyRowMargin = (row, i, fn, l, r, w) => {
  const ve = Array(w),
        s = w - r;

  for (--l; l >= 0; l--) ve[l] = fn(row[l], i, l);

  for (--w; w >= s; w--) ve[w] = fn(row[w], i, w);

  return ve;
};
const mapMargin = (mx, fn, t, b, l, r, h, w) => {
  const x = Array(h),
        bs = h - b;

  for (let i = 0; i < t; i++) x[i] = copyRowMargin(mx[i], i, fn, l, r, w);

  for (let i = bs; i < h; i++) x[i] = copyRowMargin(mx[i], i, fn, l, r, w);

  return x;
};

const POINTWISE = 0;
const ROWWISE = 1;
const COLUMNWISE = 2;
const Directs = {
  pointwise: POINTWISE,
  rowwise: ROWWISE,
  columnwise: COLUMNWISE
};

const {
  mutate,
  mapper
} = Mapper;
const {
  zipper,
  mutazip
} = Zipper;
const {
  every,
  some
} = Quantifier;
const {
  size,
  width,
  height
} = Size;
const {
  transpose
} = Transpose;
const {
  mapper: columnsMapper
} = ColumnsMapper;
const {
  fab,
  iso,
  ini,
  starter
} = Initializer;

exports.COLUMNWISE = COLUMNWISE;
exports.Directs = Directs;
exports.POINTWISE = POINTWISE;
exports.ROWWISE = ROWWISE;
exports.coins = coins;
exports.columnsMapper = columnsMapper;
exports.copyMargin = copyMargin;
exports.every = every;
exports.fab = fab;
exports.height = height;
exports.ini = ini;
exports.isMatrix = isMatrix;
exports.iso = iso;
exports.mapMargin = mapMargin;
exports.mapper = mapper;
exports.mutate = mutate;
exports.mutazip = mutazip;
exports.size = size;
exports.some = some;
exports.starter = starter;
exports.transpose = transpose;
exports.width = width;
exports.zipper = zipper;
