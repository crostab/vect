'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Init = require('@vect/matrix-init');
var Mapper = require('@vect/matrix-mapper');
var Margin = require('@vect/matrix-margin');
var Zipper = require('@vect/matrix-zipper');
var Quantifier = require('@vect/matrix-quantifier');
var Indicator = require('@vect/matrix-indicator');
var Size = require('@vect/matrix-size');
var Transpose = require('@vect/matrix-transpose');
var ColumnGetter = require('@vect/column-getter');
var ColumnsMapper = require('@vect/columns-mapper');
var columnsSelect = require('@vect/columns-select');
var columnsUpdate = require('@vect/columns-update');
var enumMatrixDirections = require('@vect/enum-matrix-directions');

/**
 *
 * @param {*[][]} mx
 * @return {number[]}
 */
const coins = mx => !Array.isArray(mx) || !Array.isArray(mx[0]) ? [] : mx[0].map((_, i) => i);

const isMatrix = mx => Array.isArray(mx) && Array.isArray(mx[0]);

const {
  draft,
  fab,
  iso,
  init,
  ini,
  starter,
  shallow
} = Init;
const {
  iterate,
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
  column,
  Columns
} = ColumnGetter;
const {
  mapper: columnsMapper
} = ColumnsMapper;

Object.defineProperty(exports, 'select', {
  enumerable: true,
  get: function () {
    return columnsSelect.select;
  }
});
Object.defineProperty(exports, 'pop', {
  enumerable: true,
  get: function () {
    return columnsUpdate.pop;
  }
});
Object.defineProperty(exports, 'push', {
  enumerable: true,
  get: function () {
    return columnsUpdate.push;
  }
});
Object.defineProperty(exports, 'shift', {
  enumerable: true,
  get: function () {
    return columnsUpdate.shift;
  }
});
Object.defineProperty(exports, 'splices', {
  enumerable: true,
  get: function () {
    return columnsUpdate.splices;
  }
});
Object.defineProperty(exports, 'unshift', {
  enumerable: true,
  get: function () {
    return columnsUpdate.unshift;
  }
});
Object.defineProperty(exports, 'COLUMNWISE', {
  enumerable: true,
  get: function () {
    return enumMatrixDirections.COLUMNWISE;
  }
});
Object.defineProperty(exports, 'POINTWISE', {
  enumerable: true,
  get: function () {
    return enumMatrixDirections.POINTWISE;
  }
});
Object.defineProperty(exports, 'ROWWISE', {
  enumerable: true,
  get: function () {
    return enumMatrixDirections.ROWWISE;
  }
});
exports.Columns = Columns;
exports.Duozipper = Duozipper;
exports.Max = Max;
exports.Min = Min;
exports.Quazipper = Quazipper;
exports.Trizipper = Trizipper;
exports.coins = coins;
exports.column = column;
exports.columnsMapper = columnsMapper;
exports.draft = draft;
exports.every = every;
exports.fab = fab;
exports.height = height;
exports.ini = ini;
exports.init = init;
exports.isMatrix = isMatrix;
exports.iso = iso;
exports.iterate = iterate;
exports.mapper = mapper;
exports.marginCopy = marginCopy;
exports.marginMapper = marginMapper;
exports.marginMutate = marginMutate;
exports.maxBy = maxBy;
exports.minBy = minBy;
exports.mutate = mutate;
exports.mutazip = mutazip;
exports.shallow = shallow;
exports.size = size;
exports.some = some;
exports.starter = starter;
exports.transpose = transpose;
exports.width = width;
exports.zipper = zipper;
