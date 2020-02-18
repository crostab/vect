'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Mapper = require('@vect/column-mapper');
var Zipper = require('@vect/column-zipper');
var Quantifier = require('@vect/column-quantifier');
var ColumnGetter = require('@vect/column-getter');

const {
  mapper,
  mutate,
  ColumnMapper,
  ColumnMutate
} = Mapper;
const {
  zipper,
  mutazip,
  ColumnZipper,
  ColumnMutazip,
  Duozipper,
  Trizipper,
  Quazipper
} = Zipper;
const {
  every,
  some,
  ColumnEvery,
  ColumnSome
} = Quantifier;
const {
  column,
  Columns
} = ColumnGetter;

exports.ColumnEvery = ColumnEvery;
exports.ColumnMapper = ColumnMapper;
exports.ColumnMutate = ColumnMutate;
exports.ColumnMutazip = ColumnMutazip;
exports.ColumnSome = ColumnSome;
exports.ColumnZipper = ColumnZipper;
exports.Columns = Columns;
exports.Duozipper = Duozipper;
exports.Quazipper = Quazipper;
exports.Trizipper = Trizipper;
exports.column = column;
exports.every = every;
exports.mapper = mapper;
exports.mutate = mutate;
exports.mutazip = mutazip;
exports.some = some;
exports.zipper = zipper;
