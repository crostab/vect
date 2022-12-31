import { max, min } from '@aryth/comparer';
import { rand } from '@aryth/rand';
import { keys, vals } from '@vect/object-index';
import { swap } from '@vect/vector-index';
import { iterate } from '@vect/vector-mapper';
import { slice } from '@vect/object-init';

function leap(o, start, gap) {
  const ks = (Array.isArray(this) ? this : this === null || this === void 0 ? void 0 : this.keys) ?? keys(o);
  const wd = ks === null || ks === void 0 ? void 0 : ks.length,
    df = max(gap, wd),
    rs = {};
  let lo = start ? min(start, wd - 1) : rand(wd),
    hi = lo + df,
    i = lo,
    k;
  while (lo++ < hi) {
    rs[k = ks[i++]] = o[k];
    if (i === wd) i = 0;
  }
  return rs;
}

/**
 *
 * Object keys can be set via 'this.keys'
 * Default keys are Object.keys(o), the enumerable list of o's keys.
 * @param {Object} o
 * @param {number} [size] - if omitted, size will be keys?.length
 * @returns {Object} new object
 */
const shuffle = function (o, size) {
  const ks = (Array.isArray(this) ? this : this === null || this === void 0 ? void 0 : this.keys) ?? keys(o);
  let l = ks === null || ks === void 0 ? void 0 : ks.length,
    k;
  const lo = max(0, l - (size ?? l)),
    rs = {};
  while (--l >= lo) rs[k = swap.call(ks, rand(l), l)] = o[k];
  return rs;
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

const filter = (o, pred) => {
  const t = {};
  for (let k in o) {
    const v = o[k];
    if (pred(k, v)) t[k] = v;
  }
  return t;
};
const filterByValue = (o, pred) => {
  const t = {};
  for (let k in o) {
    const v = o[k];
    if (pred(v)) t[k] = v;
  }
  return t;
};

function select(o) {
  const hi = this === null || this === void 0 ? void 0 : this.length;
  if (!hi) return slice(o);
  const ob = {};
  for (let i = 0, k; i < hi; i++) ob[k = this[i]] = o[k];
  return ob;
}
function values(o) {
  const hi = this === null || this === void 0 ? void 0 : this.length;
  if (!hi) return vals(o);
  const ve = Array(hi);
  for (let i = 0; i < hi; i++) ve[i] = o[this[i]];
  return ve;
}

/**
 *
 * @param {Object} o
 * @param {*[]} keys
 */
const selectObject = (o, keys) => select.call(keys, o);
const SelectObject = keys => select.bind(keys);
const selectValues = (o, keys) => values.call(keys, o);
const SelectValues = keys => values.bind(keys);

/** @deprecated use equivalent from @vect/object-index */
const firstKey = o => {
  for (let k in o) return k;
};
/** @deprecated use equivalent from @vect/object-index */
const firstValue = o => o[firstKey(o)];
/** @deprecated use equivalent from @vect/object-index */
const firstEntry = o => {
  const k = firstKey(o);
  return [k, o[k]];
};
/** @deprecated use equivalent from @vect/object-index */
const lastKey = o => {
  let k;
  for (let x in o) {
    k = x;
  }
  return k;
};
/** @deprecated use equivalent from @vect/object-index */
const lastValue = o => o[lastKey(o)];
/** @deprecated use equivalent from @vect/object-index */
const lastEntry = o => {
  const k = lastKey(o);
  return [k, o[k]];
};

export { SelectObject, SelectValues, filter, filterByValue, firstEntry, firstKey, firstValue, lastEntry, lastKey, lastValue, leap, lookupKeys, select, selectObject, selectValues, shuffle, values };
