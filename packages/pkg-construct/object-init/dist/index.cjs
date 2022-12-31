'use strict';

var enumDataTypes = require('@typen/enum-data-types');

/**
 * Shallow.
 * @param {...[*,*]} entries - An array of key-value pair, [key, value]
 * @returns {Object|Object<string,*>}
 */
const ob = (...entries) => {
  let o = {};
  for (let [k, v] of entries) o[k] = v;
  return o;
};

/**
 * @param {string[]} keys
 * @param {*} value
 * @return {Object<string,*>}
 */
const iso = (keys, value) => {
  let o = {};
  for (let k of keys) o[k] = value;
  return o;
};
const wind = (keys, values) => {
  const o = {},
    {
      length
    } = keys;
  for (let i = 0; i < length; i++) o[keys[i]] = values[i];
  return o;
};
const pair = (key, value) => {
  const o = {};
  o[key] = value;
  return o;
};

/**
 * @param {Array} vec
 * @param {function} [fn]
 * @returns {Object}
 */
const init = (vec, fn) => {
  return typeof fn === enumDataTypes.FUN ? vectorToObject(vec, fn) : entriesToObject(vec);
};
const gather = iter => {
  let o = {};
  for (let [k, v] of iter) o[k] = v;
  return o;
};

/**
 *
 * @param {[*,*][]} entries
 * @returns {{}}
 */
const entriesToObject = entries => {
  let o = {};
  for (let [k, v] of entries) o[k] = v;
  return o;
};
const vectorToObject = (vec, fn) => {
  let o = {};
  for (let k of vec) o[k] = fn(k);
  return o;
};
const initByValues = (entries, fn) => {
  let o = {};
  for (let [k, v] of entries) o[k] = fn(v);
  return o;
};
function slice(o) {
  const t = {};
  for (let k in o) t[k] = o[k];
  return t;
}

exports.entriesToObject = entriesToObject;
exports.gather = gather;
exports.init = init;
exports.initByValues = initByValues;
exports.initFromKeys = vectorToObject;
exports.iso = iso;
exports.mapToObject = vectorToObject;
exports.ob = ob;
exports.pair = pair;
exports.slice = slice;
exports.vectorToObject = vectorToObject;
exports.wind = wind;
