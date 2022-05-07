import { FUN } from '@typen/enum-data-types';

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
  return typeof fn === FUN ? vectorToObject(vec, fn) : entriesToObject(vec);
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

export { entriesToObject, init, initByValues, vectorToObject as initFromKeys, iso, vectorToObject as mapToObject, ob, pair, vectorToObject, wind };
