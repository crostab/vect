'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vectorIndex = require('@vect/vector-index');

/**
 * @param {*[]} vec - input array to be mutated
 * @param {number[]} inds - indexes in ascending order, indicating which elements to remove
 * @returns {*[]} mutated input array, with elements at provided indexes removed
 */
function splices(vec, inds) {
  vectorIndex.rollBunch(vec, inds).splice(inds[0], inds.length);
  return vec;
}
function keep(vec, inds) {
  vectorIndex.rollTop(vec, inds).splice(inds.length);
  return vec;
}

exports.keep = keep;
exports.splices = splices;
