'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var rand = require('@aryth/rand');
var comparer = require('@aryth/comparer');
var swap = require('@vect/swap');
var vectorMapper = require('@vect/vector-mapper');

const leap = (o, start, gap) => {
  var _ref;

  const keys = (_ref = undefined === null || undefined === void 0 ? void 0 : undefined.keys) !== null && _ref !== void 0 ? _ref : Object.keys(o);
  const wd = keys.length,
        df = comparer.max(gap, wd),
        rs = {};
  let lo = start ? comparer.min(start, wd - 1) : rand.rand(wd),
      hi = lo + df,
      i = lo,
      k;

  while (lo++ < hi) {
    rs[k = keys[i++]] = o[k];
    if (i === wd) i = 0;
  }

  return rs;
};

/**
 *
 * Object keys can be set via 'this.keys'
 * Default keys are Object.keys(o), the enumerable list of o's keys.
 * @param {Object} o
 * @param {number} [size] - if omitted, size will be keys.length
 * @returns {Object} new object
 */

const shuffle = function (o, size) {
  const keys = (this === null || this === void 0 ? void 0 : this.keys) || Object.keys(o);
  let l = keys.length,
      k;
  const lo = comparer.max(0, l - (size !== null && size !== void 0 ? size : l)),
        rs = {};

  while (--l >= lo) rs[k = swap.swap.call(keys, rand.rand(l), l)] = o[k];

  return rs;
};

/**
 *
 * @param {Object} o
 * @param {*[]} keys
 */
function select(o, keys) {
  const ob = {},
        l = keys.length;

  for (let i = 0, k; i < l; i++) ob[k = keys[i]] = o[k];

  return ob;
}

const selectValues = function (o, keys) {
  const l = keys.length,
        ve = Array(l);

  for (let i = 0; i < l; i++) ve[i] = o[keys[i]];

  return ve;
};

/**
 * @typedef {string|number} str
 */

/**
 * Must bind to target object before use
 * @param {(str|[str,str])[]} [fields] - array of str, [str,str] or combined.
 * @returns {[str,str][]} - entries of current keys to projected keys
 */

const lookupKeys = function (fields) {
  const project = lookupKey.bind(this),
        currToProjPairs = [];
  let currToProj;
  vectorMapper.iterate(fields, field => {
    if (currToProj = project(field)) currToProjPairs.push(currToProj);
  });
  return currToProjPairs;
};
/**
 *
 * @param {str|[*,*]} [field]
 * @returns {[str,number]}
 */

const lookupKey = function (field) {
  if (!Array.isArray(field) && field in this) return [field, field];
  let [current, projected] = field;
  return current in this ? [current, projected] : void 0;
};

exports.leap = leap;
exports.lookupKeys = lookupKeys;
exports.select = select;
exports.selectValues = selectValues;
exports.shuffle = shuffle;
