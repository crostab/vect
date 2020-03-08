'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vectorMapper = require('@vect/vector-mapper');

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

exports.lookupKeys = lookupKeys;
exports.select = select;
exports.selectValues = selectValues;
