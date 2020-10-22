'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var comparer = require('@aryth/comparer');
var rand = require('@aryth/rand');
var swap = require('@vect/swap');
var vectorMapper = require('@vect/vector-mapper');

const leap = function (o, start, gap) {
  var _this$keys;

  const keys = (_this$keys = this === null || this === void 0 ? void 0 : this.keys) !== null && _this$keys !== void 0 ? _this$keys : Object.keys(o);
  const wd = keys === null || keys === void 0 ? void 0 : keys.length,
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
 * @param {number} [size] - if omitted, size will be keys?.length
 * @returns {Object} new object
 */

const shuffle = function (o, size) {
  var _this$keys;

  const keys = (_this$keys = this === null || this === void 0 ? void 0 : this.keys) !== null && _this$keys !== void 0 ? _this$keys : Object.keys(o);
  let l = keys === null || keys === void 0 ? void 0 : keys.length,
      k;
  const lo = comparer.max(0, l - (size !== null && size !== void 0 ? size : l)),
        rs = {};

  while (--l >= lo) rs[k = swap.swap.call(keys, rand.rand(l), l)] = o[k];

  return rs;
};

function selector(o) {
  const keys = this;
  const l = keys === null || keys === void 0 ? void 0 : keys.length,
        ob = {};

  for (let i = 0, k; i < l; i++) ob[k = keys[i]] = o[k];

  return ob;
}
/**
 *
 * @param {Object} o
 * @param {*[]} keys
 */


const select = (o, keys) => selector.call(keys, o);
const Select = keys => selector.bind(keys);

const objectValues = function (o) {
  const keys = this;
  const l = keys === null || keys === void 0 ? void 0 : keys.length,
        ve = Array(l);

  for (let i = 0; i < l; i++) ve[i] = o[keys[i]];

  return ve;
};
const selectValues = (o, keys) => objectValues.call(keys, o);
const SelectValues = keys => objectValues.bind(keys);

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

exports.Select = Select;
exports.SelectValues = SelectValues;
exports.leap = leap;
exports.lookupKeys = lookupKeys;
exports.select = select;
exports.selectValues = selectValues;
exports.shuffle = shuffle;
