'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vectorIndex = require('@vect/vector-index');

/**
 * @param {*[]} vec - input array to be mutated
 * @param {number[]} inds - indexes in ascending order, indicating which elements to remove
 * @returns {*[]} mutated input array, with elements at provided indexes removed
 */

function splices(vec, inds) {
  const hi = inds === null || inds === void 0 ? void 0 : inds.length;
  if (!hi) return vec;
  vectorIndex.rollBunch(vec, inds).splice(inds[0], hi);
  return vec;
}

exports.splices = splices;
