'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 *
 * @param {[*,*][]} ents
 * @param {function} keyMap
 * @param {function} [valMap]
 * @param {number} [l]
 * @returns {[*,*][]}
 */
const mapper = (ents, keyMap, valMap, l) => {
  l = l || ents && ents.length;
  valMap = valMap || keyMap;
  const vec = Array(l);

  for (let r; --l >= 0 && (r = ents[l]);) vec[l] = [keyMap(r[0], l), valMap(r[1], l)];

  return vec;
};

/**
 *
 * @param {[*,*][]} ents
 * @param {function} keyMap
 * @param {function} [valMap]
 * @param {number} [l]
 * @returns {[*,*][]}
 */
const mutate = (ents, keyMap, valMap, l) => {
  l = l || ents && ents.length;
  valMap = valMap || keyMap;

  for (let r; --l >= 0 && (r = ents[l]);) {
    r[0] = keyMap(r[0], l);
    r[1] = valMap(r[1], l);
  }

  return ents;
};

exports.mapper = mapper;
exports.mutate = mutate;
