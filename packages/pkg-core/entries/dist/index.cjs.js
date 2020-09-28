'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Init = require('@vect/entries-init');
var Mapper = require('@vect/entries-mapper');
var Margin = require('@vect/entries-margin');
var Zipper = require('@vect/entries-zipper');
var Unwind = require('@vect/entries-unwind');
var Indicator = require('@vect/entries-indicator');

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
var Margin__namespace = /*#__PURE__*/_interopNamespace(Margin);
var Zipper__namespace = /*#__PURE__*/_interopNamespace(Zipper);
var Unwind__namespace = /*#__PURE__*/_interopNamespace(Unwind);
var Indicator__namespace = /*#__PURE__*/_interopNamespace(Indicator);

const {
  draft,
  wind,
  iso
} = Init__namespace;
const {
  iterate,
  mapper,
  mutate
} = Mapper__namespace;
const {
  marginCopy,
  marginMapper,
  marginMutate
} = Margin__namespace;
const {
  zipper,
  mutazip,
  Duozipper,
  Trizipper,
  Quazipper
} = Zipper__namespace;
const {
  maxBy,
  minBy,
  Max,
  Min
} = Indicator__namespace;
const {
  unwind
} = Unwind__namespace;

exports.Duozipper = Duozipper;
exports.Max = Max;
exports.Min = Min;
exports.Quazipper = Quazipper;
exports.Trizipper = Trizipper;
exports.draft = draft;
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
exports.unwind = unwind;
exports.wind = wind;
exports.zipper = zipper;
