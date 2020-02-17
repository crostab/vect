'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Mappers = require('@vect/vector-mapper');
var Zippers = require('@vect/vector-zipper');

/**
 *
 * @param {*[]} ar
 * @param {number} [l] - left margin length
 * @param {number} [r] - right margin length
 * @param {number} [w] - array length
 * @returns {*[]}
 */
const copyMargin = (ar, l, r, w) => {
  const ve = Array(w = w || ar.length),
        s = w - r;

  for (--l; l >= 0; l--) ve[l] = ar[l];

  for (--w; w >= s; w--) ve[w] = ar[w];

  return ve;
};

/**
 *
 * @param {*[]} ar
 * @param {function(*)|function(*,number)} fn
 * @param {number} [l] - left margin length
 * @param {number} [r] - right margin length
 * @param {number} [w] - array length
 * @returns {*[]}
 */
const mapMargin = (ar, fn, l, r, w) => {
  const ve = Array(w = w || ar.length),
        s = w - r;

  for (--l; l >= 0; l--) ve[l] = fn(ar[l], l);

  for (--w; w >= s; w--) ve[w] = fn(ar[w], w);

  return ve;
};

const mapper = Mappers.mapper;
const mutate = Mappers.mutate;
const zipper = Zippers.zipper;
const mutazip = Zippers.mutazip;

exports.copyMargin = copyMargin;
exports.mapMargin = mapMargin;
exports.mapper = mapper;
exports.mutate = mutate;
exports.mutazip = mutazip;
exports.zipper = zipper;
