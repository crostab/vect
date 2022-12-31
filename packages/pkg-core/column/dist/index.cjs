'use strict';

var ColumnGetter = require('@vect/column-getter');
var Indicator = require('@vect/column-indicator');
var Mapper = require('@vect/column-mapper');
var Quantifier = require('@vect/column-quantifier');
var Zipper = require('@vect/column-zipper');

function _interopNamespaceDefault(e) {
             var n = Object.create(null);
             if (e) {
                          Object.keys(e).forEach(function (k) {
                                       if (k !== 'default') {
                                                    var d = Object.getOwnPropertyDescriptor(e, k);
                                                    Object.defineProperty(n, k, d.get ? d : {
                                                                 enumerable: true,
                                                                 get: function () { return e[k]; }
                                                    });
                                       }
                          });
             }
             n.default = e;
             return Object.freeze(n);
}

var ColumnGetter__namespace = /*#__PURE__*/_interopNamespaceDefault(ColumnGetter);
var Indicator__namespace = /*#__PURE__*/_interopNamespaceDefault(Indicator);
var Mapper__namespace = /*#__PURE__*/_interopNamespaceDefault(Mapper);
var Quantifier__namespace = /*#__PURE__*/_interopNamespaceDefault(Quantifier);
var Zipper__namespace = /*#__PURE__*/_interopNamespaceDefault(Zipper);

const {
  iterate,
  mapper,
  mutate,
  ColumnIterate,
  ColumnMapper,
  ColumnMutate
} = Mapper__namespace;
const {
  zipper,
  mutazip,
  iterzip,
  ColumnZipper,
  ColumnMutazip,
  duozipper,
  trizipper,
  quazipper,
  Duozipper,
  Trizipper,
  Quazipper
} = Zipper__namespace;
const {
  every,
  some,
  ColumnEvery,
  ColumnSome
} = Quantifier__namespace;
const {
  maxBy,
  minBy,
  Max,
  Min
} = Indicator__namespace;
const {
  column,
  Columns
} = ColumnGetter__namespace;

exports.ColumnEvery = ColumnEvery;
exports.ColumnIterate = ColumnIterate;
exports.ColumnMapper = ColumnMapper;
exports.ColumnMutate = ColumnMutate;
exports.ColumnMutazip = ColumnMutazip;
exports.ColumnSome = ColumnSome;
exports.ColumnZipper = ColumnZipper;
exports.Columns = Columns;
exports.Duozipper = Duozipper;
exports.Max = Max;
exports.Min = Min;
exports.Quazipper = Quazipper;
exports.Trizipper = Trizipper;
exports.column = column;
exports.duozipper = duozipper;
exports.every = every;
exports.iterate = iterate;
exports.iterzip = iterzip;
exports.mapper = mapper;
exports.maxBy = maxBy;
exports.minBy = minBy;
exports.mutate = mutate;
exports.mutazip = mutazip;
exports.quazipper = quazipper;
exports.some = some;
exports.trizipper = trizipper;
exports.zipper = zipper;
