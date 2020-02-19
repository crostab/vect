'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Initializer = require('@vect/matrix-init');
var Mapper = require('@vect/matrix-mapper');
var Margin = require('@vect/matrix-margin');
var Zipper = require('@vect/matrix-zipper');
var Quantifier = require('@vect/matrix-quantifier');
var Indicator = require('@vect/matrix-indicator');
var Size = require('@vect/matrix-size');
var Transpose = require('@vect/matrix-transpose');
var ColumnsMapper = require('@vect/columns-mapper');
var ColumnGetter = require('@vect/column-getter');

/**
 *
 * @param {*[][]} mx
 * @return {number[]}
 */
const coins = mx => !Array.isArray(mx) || !Array.isArray(mx[0]) ? [] : mx[0].map((_, i) => i);

const isMatrix = mx => Array.isArray(mx) && Array.isArray(mx[0]);

const POINTWISE = 0;
const ROWWISE = 1;
const COLUMNWISE = 2;
const Directs = {
  pointwise: POINTWISE,
  rowwise: ROWWISE,
  columnwise: COLUMNWISE
};

const {
  fab,
  iso,
  ini,
  starter
} = Initializer;
const {
  mutate,
  mapper
} = Mapper;
const {
  marginCopy,
  marginMapper,
  marginMutate
} = Margin;
const {
  zipper,
  mutazip,
  Duozipper,
  Trizipper,
  Quazipper
} = Zipper;
const {
  maxBy,
  minBy,
  Max,
  Min
} = Indicator;
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
  column,
  Columns
} = ColumnGetter;

exports.COLUMNWISE = COLUMNWISE;
exports.Columns = Columns;
exports.Directs = Directs;
exports.Duozipper = Duozipper;
exports.Max = Max;
exports.Min = Min;
exports.POINTWISE = POINTWISE;
exports.Quazipper = Quazipper;
exports.ROWWISE = ROWWISE;
exports.Trizipper = Trizipper;
exports.coins = coins;
exports.column = column;
exports.columnsMapper = columnsMapper;
exports.every = every;
exports.fab = fab;
exports.height = height;
exports.ini = ini;
exports.isMatrix = isMatrix;
exports.iso = iso;
exports.mapper = mapper;
exports.marginCopy = marginCopy;
exports.marginMapper = marginMapper;
exports.marginMutate = marginMutate;
exports.maxBy = maxBy;
exports.minBy = minBy;
exports.mutate = mutate;
exports.mutazip = mutazip;
exports.size = size;
exports.some = some;
exports.starter = starter;
exports.transpose = transpose;
exports.width = width;
exports.zipper = zipper;
