'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Init = require('@vect/entries-init');
var Mapper = require('@vect/entries-mapper');
var Margin = require('@vect/entries-margin');
var Zipper = require('@vect/entries-zipper');
var Unwind = require('@vect/entries-unwind');
var Indicator = require('@vect/entries-indicator');

const {
  draft,
  wind,
  iso
} = Init;
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
  unwind
} = Unwind;

exports.Duozipper = Duozipper;
exports.Max = Max;
exports.Min = Min;
exports.Quazipper = Quazipper;
exports.Trizipper = Trizipper;
exports.draft = draft;
exports.iso = iso;
exports.mapper = mapper;
exports.marginCopy = marginCopy;
exports.marginMapper = marginMapper;
exports.marginMutate = marginMutate;
exports.maxBy = maxBy;
exports.minBy = minBy;
exports.mutate = mutate;
exports.mutazip = mutazip;
exports.unwind = unwind;
exports.wind = wind;
exports.zipper = zipper;
