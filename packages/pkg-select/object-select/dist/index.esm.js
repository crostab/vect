import { rand } from '@aryth/rand';
import { max, min } from '@aryth/comparer';
import { swap } from '@vect/swap';
import { iterate } from '@vect/vector-mapper';

const leap = function (o, start, gap) {
  var _this$keys;

  const keys = (_this$keys = this === null || this === void 0 ? void 0 : this.keys) !== null && _this$keys !== void 0 ? _this$keys : Object.keys(o);
  const wd = keys.length,
        df = max(gap, wd),
        rs = {};
  let lo = start ? min(start, wd - 1) : rand(wd),
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
  const lo = max(0, l - (size !== null && size !== void 0 ? size : l)),
        rs = {};

  while (--l >= lo) rs[k = swap.call(keys, rand(l), l)] = o[k];

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
  iterate(fields, field => {
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

export { leap, lookupKeys, select, selectValues, shuffle };
