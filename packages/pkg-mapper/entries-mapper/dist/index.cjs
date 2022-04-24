'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 *
 * @param {[*,*][]} entries
 * @param {Function} keyFn
 * @param {Function} [valFn]
 * @param {number} [l]
 * @returns {undefined}
 */
const iterate = function (entries, keyFn, valFn, l) {
  l = l ?? (entries === null || entries === void 0 ? void 0 : entries.length), valFn = valFn || keyFn;

  for (let i = 0, r; i < l; i++) {
    r = entries[i], keyFn.call(this, r[0], i), valFn.call(this, r[1], i);
  }
};

/**
 *
 * @param {[*,*][]} entries
 * @param {Function} keyMap
 * @param {Function} [valMap]
 * @param {number} [l]
 * @returns {[*,*][]}
 */
const mapper = (entries, keyMap, valMap, l) => {
  l = l ?? (entries === null || entries === void 0 ? void 0 : entries.length), valMap = valMap || keyMap;
  const vec = Array(l);

  for (let i = 0, r; i < l; i++) r = entries[i], vec[i] = [keyMap(r[0], i), valMap(r[1], i)];

  return vec;
};

/**
 *
 * @param {[*,*][]} entries
 * @param {Function} keyMap
 * @param {Function} [valMap]
 * @param {number} [l]
 * @returns {[*,*][]}
 */
const mutate = (entries, keyMap, valMap, l) => {
  l = l ?? (entries === null || entries === void 0 ? void 0 : entries.length), valMap = valMap || keyMap;

  for (let i = 0, r; i < l; i++) {
    r = entries[i], r[0] = keyMap(r[0], i), r[1] = valMap(r[1], i);
  }

  return entries;
};

/**
 *
 * @param {[*,*][]} entries
 * @param {Function} keyFn
 * @param {number} [l]
 * @returns {undefined}
 */
const iterateKeys = function (entries, keyFn, l) {
  l = l ?? (entries === null || entries === void 0 ? void 0 : entries.length);

  for (let i = 0, r; i < l; i++) {
    r = entries[i], keyFn.call(this, r[0], i);
  }
};

/**
 *
 * @param {[*,*][]} entries
 * @param {Function} keyMap
 * @param {number} [l]
 * @returns {[*,*][]}
 */
const mutateKeys = (entries, keyMap, l) => {
  l = l ?? (entries === null || entries === void 0 ? void 0 : entries.length);

  for (let i = 0, r; i < l; i++) {
    r = entries[i], r[0] = keyMap(r[0], i);
  }

  return entries;
};

/**
 *
 * @param {[*,*][]} entries
 * @param {Function} keyMap
 * @param {number} [l]
 * @returns {[*,*][]}
 */
const mapKeys = (entries, keyMap, l) => {
  l = l ?? (entries === null || entries === void 0 ? void 0 : entries.length);
  const vec = Array(l);

  for (let i = 0, r; i < l; i++) r = entries[i], vec[i] = [keyMap(r[0], i), r[1]];

  return vec;
};

/**
 *
 * @param {[*,*][]} entries
 * @param {Function} valFn
 * @param {number} [l]
 * @returns {undefined}
 */
const iterateValues = function (entries, valFn, l) {
  l = l ?? (entries === null || entries === void 0 ? void 0 : entries.length);

  for (let i = 0, r; i < l; i++) {
    r = entries[i], valFn.call(this, r[1], i);
  }
};

/**
 *
 * @param {[*,*][]} entries
 * @param {Function} valMap
 * @param {number} [l]
 * @returns {[*,*][]}
 */
const mutateValues = (entries, valMap, l) => {
  l = l ?? (entries === null || entries === void 0 ? void 0 : entries.length);

  for (let i = 0, r; i < l; i++) {
    r = entries[i], r[1] = valMap(r[1], i);
  }

  return entries;
};

/**
 *
 * @param {[*,*][]} entries
 * @param {Function} valMap
 * @param {number} [l]
 * @returns {[*,*][]}
 */
const mapValues = (entries, valMap, l) => {
  l = l ?? (entries === null || entries === void 0 ? void 0 : entries.length);
  const vec = Array(l);

  for (let i = 0, r; i < l; i++) r = entries[i], vec[i] = [r[0], valMap(r[1], i)];

  return vec;
};

exports.iterate = iterate;
exports.iterateKeys = iterateKeys;
exports.iterateValues = iterateValues;
exports.mapKeys = mapKeys;
exports.mapValues = mapValues;
exports.mapper = mapper;
exports.mutate = mutate;
exports.mutateKeys = mutateKeys;
exports.mutateValues = mutateValues;
