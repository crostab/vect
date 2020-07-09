'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Init = require('@vect/object-init');
var Mapper = require('@vect/object-mapper');
var Select = require('@vect/object-select');
var Zipper = require('@vect/object-zipper');

const {
  iterate,
  iterateEntries,
  iterateKeys,
  mapEntries,
  mapKeys,
  mapper,
  mutate
} = Mapper;
const {
  mutazip,
  zipper
} = Zipper;
const {
  init,
  initByValues,
  iso,
  ob,
  pair,
  wind
} = Init;
const {
  leap,
  lookupKeys,
  select,
  selectValues,
  shuffle
} = Select;

exports.init = init;
exports.initByValues = initByValues;
exports.iso = iso;
exports.iterate = iterate;
exports.iterateEntries = iterateEntries;
exports.iterateKeys = iterateKeys;
exports.leap = leap;
exports.lookupKeys = lookupKeys;
exports.mapEntries = mapEntries;
exports.mapKeys = mapKeys;
exports.mapper = mapper;
exports.mutate = mutate;
exports.mutazip = mutazip;
exports.ob = ob;
exports.pair = pair;
exports.select = select;
exports.selectValues = selectValues;
exports.shuffle = shuffle;
exports.wind = wind;
exports.zipper = zipper;
