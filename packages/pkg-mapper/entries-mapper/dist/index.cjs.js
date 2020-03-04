'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 *
 * @param {[*,*][]} ents
 * @param {function} keyFn
 * @param {function} [valFn]
 * @param {number} [l]
 * @returns {undefined}
 */
const iterate = function (ents, keyFn, valFn, l) {
  l = l || ents && ents.length, valFn = valFn || keyFn;

  for (let i = 0, r; i < l; i++) {
    r = ents[i], keyFn.call(this, r[0], i), valFn.call(this, r[1], i);
  }
};

/**
 *
 * @param {[*,*][]} ents
 * @param {function} keyMap
 * @param {function} [valMap]
 * @param {number} [l]
 * @returns {[*,*][]}
 */
const mapper = (ents, keyMap, valMap, l) => {
  l = l || ents && ents.length, valMap = valMap || keyMap;
  const vec = Array(l);

  for (let i = 0, r; i < l; i++) r = ents[i], vec[i] = [keyMap(r[0], i), valMap(r[1], i)];

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
  l = l || ents && ents.length, valMap = valMap || keyMap;

  for (let i = 0, r; i < l; i++) {
    r = ents[i], r[0] = keyMap(r[0], i), r[1] = valMap(r[1], i);
  }

  return ents;
};

exports.iterate = iterate;
exports.mapper = mapper;
exports.mutate = mutate;
