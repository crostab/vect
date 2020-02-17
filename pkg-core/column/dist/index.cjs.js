'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Mappers = require('@vect/column-mapper');
var Zippers = require('@vect/column-zipper');
var Quantifiers = require('@vect/column-quantifier');
var ColumnGetters = require('@vect/column-getter');

const {
  mapper,
  mutate,
  ColumnMapper,
  ColumnMutate
} = Mappers;
const {
  zipper,
  mutazip,
  ColumnZipper,
  ColumnMutazip
} = Zippers;
const {
  every,
  some,
  ColumnEvery,
  ColumnSome
} = Quantifiers;
const {
  column,
  Columns
} = ColumnGetters;

exports.ColumnEvery = ColumnEvery;
exports.ColumnMapper = ColumnMapper;
exports.ColumnMutate = ColumnMutate;
exports.ColumnMutazip = ColumnMutazip;
exports.ColumnSome = ColumnSome;
exports.ColumnZipper = ColumnZipper;
exports.Columns = Columns;
exports.column = column;
exports.every = every;
exports.mapper = mapper;
exports.mutate = mutate;
exports.mutazip = mutazip;
exports.some = some;
exports.zipper = zipper;
