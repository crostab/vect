'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Mapper = require('@vect/vector-mapper');
var Margin = require('@vect/vector-margin');
var Zipper = require('@vect/vector-zipper');
var Indicator = require('@vect/vector-indicator');
var Init = require('@vect/vector-init');

const {
  mapper,
  mutate
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
  draft,
  iso,
  init,
  seq,
  range
} = Init;

exports.Duozipper = Duozipper;
exports.Max = Max;
exports.Min = Min;
exports.Quazipper = Quazipper;
exports.Trizipper = Trizipper;
exports.draft = draft;
exports.init = init;
exports.iso = iso;
exports.mapper = mapper;
exports.marginCopy = marginCopy;
exports.marginMapper = marginMapper;
exports.marginMutate = marginMutate;
exports.maxBy = maxBy;
exports.minBy = minBy;
exports.mutate = mutate;
exports.mutazip = mutazip;
exports.range = range;
exports.seq = seq;
exports.zipper = zipper;
