'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Init = require('@vect/object-init');
var Mapper = require('@vect/object-mapper');
var Select = require('@vect/object-select');
var Update = require('@vect/object-update');
var Zipper = require('@vect/object-zipper');

function _interopNamespace(e) {
	if (e && e.__esModule) return e;
	var n = Object.create(null);
	if (e) {
		Object.keys(e).forEach(function (k) {
			if (k !== 'default') {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () {
						return e[k];
					}
				});
			}
		});
	}
	n['default'] = e;
	return Object.freeze(n);
}

var Init__namespace = /*#__PURE__*/_interopNamespace(Init);
var Mapper__namespace = /*#__PURE__*/_interopNamespace(Mapper);
var Select__namespace = /*#__PURE__*/_interopNamespace(Select);
var Update__namespace = /*#__PURE__*/_interopNamespace(Update);
var Zipper__namespace = /*#__PURE__*/_interopNamespace(Zipper);

const {
  iterate,
  iterateEntries,
  iterateKeys,
  mapEntries,
  mapKeys,
  mapper,
  mutate
} = Mapper__namespace;
const {
  mutazip,
  zipper
} = Zipper__namespace;
const {
  init,
  initByValues,
  iso,
  ob,
  pair,
  wind
} = Init__namespace;
const {
  leap,
  lookupKeys,
  select,
  selectValues,
  shuffle
} = Select__namespace;
const {
  replenish
} = Update__namespace;

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
exports.replenish = replenish;
exports.select = select;
exports.selectValues = selectValues;
exports.shuffle = shuffle;
exports.wind = wind;
exports.zipper = zipper;
