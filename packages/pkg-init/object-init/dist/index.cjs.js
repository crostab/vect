'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
 * Shallow.
 * @param {string[]} keys
 * @param {*} value
 * @return {Object<string,*>}
 */

const iso = (keys, value) => {
  let o = {};

  for (let k of keys) o[k] = value;

  return o;
};
const init = entries => {
  let o = {};

  for (let [k, v] of entries) o[k] = v;

  return o;
};
const initByValues = (entries, fn) => {
  let o = {};

  for (let [k, v] of entries) o[k] = fn(v);

  return o;
};
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

exports.init = init;
exports.initByValues = initByValues;
exports.iso = iso;
exports.ob = ob;
exports.pair = pair;
exports.wind = wind;
