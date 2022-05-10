'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 *
 * @param {[*,*][]} entries
 * @param {Function} onKey
 * @param {Function} [onVal]
 * @param {number} [l]
 * @returns {undefined}
 */
const iterate = function (entries, onKey, onVal, l) {
  l = l ?? (entries === null || entries === void 0 ? void 0 : entries.length), onVal = onVal || onKey;

  for (let i = 0, r; i < l; i++) {
    r = entries[i], onKey.call(this, r[0], i), onVal.call(this, r[1], i);
  }
};
/**
 *
 * @param {[*,*][]} entries
 * @param {Function} onKey
 * @param {number} [l]
 * @returns {undefined}
 */

const iterateKeys = function (entries, onKey, l) {
  l = l ?? (entries === null || entries === void 0 ? void 0 : entries.length);

  for (let i = 0, r; i < l; i++) {
    r = entries[i], onKey.call(this, r[0], i);
  }
};
/**
 *
 * @param {[*,*][]} entries
 * @param {Function} onVal
 * @param {number} [l]
 * @returns {undefined}
 */

const iterateValues = function (entries, onVal, l) {
  l = l ?? (entries === null || entries === void 0 ? void 0 : entries.length);

  for (let i = 0, r; i < l; i++) {
    r = entries[i], onVal.call(this, r[1], i);
  }
};

/**
 *
 * @param {[*,*][]} entries
 * @param {Function} keyTo
 * @param {Function} [valTo]
 * @param {number} [l]
 * @returns {[*,*][]}
 */
const mapper = (entries, keyTo, valTo, l) => {
  l = l ?? (entries === null || entries === void 0 ? void 0 : entries.length), valTo = valTo || keyTo;
  const vec = Array(l);

  for (let i = 0, r; i < l; i++) r = entries[i], vec[i] = [keyTo(r[0], i), valTo(r[1], i)];

  return vec;
};
/**
 *
 * @param {[*,*][]} entries
 * @param {Function} keyTo
 * @param {number} [l]
 * @returns {[*,*][]}
 */

const mapKeys = (entries, keyTo, l) => {
  l = l ?? (entries === null || entries === void 0 ? void 0 : entries.length);
  const vec = Array(l);

  for (let i = 0, r; i < l; i++) r = entries[i], vec[i] = [keyTo(r[0], i), r[1]];

  return vec;
};
/**
 *
 * @param {[*,*][]} entries
 * @param {Function} valTo
 * @param {number} [l]
 * @returns {[*,*][]}
 */

const mapValues = (entries, valTo, l) => {
  l = l ?? (entries === null || entries === void 0 ? void 0 : entries.length);
  const vec = Array(l);

  for (let i = 0, r; i < l; i++) r = entries[i], vec[i] = [r[0], valTo(r[1], i)];

  return vec;
};

/**
 *
 * @param {[*,*][]} entries
 * @param {Function} keyTo
 * @param {Function} [valTo]
 * @param {number} [l]
 * @returns {[*,*][]}
 */
const mutate = (entries, keyTo, valTo, l) => {
  l = l ?? (entries === null || entries === void 0 ? void 0 : entries.length), valTo = valTo || keyTo;

  for (let i = 0, r; i < l; i++) {
    r = entries[i], r[0] = keyTo(r[0], i), r[1] = valTo(r[1], i);
  }

  return entries;
};
/**
 *
 * @param {[*,*][]} entries
 * @param {Function} keyTo
 * @param {number} [l]
 * @returns {[*,*][]}
 */

const mutateKeys = (entries, keyTo, l) => {
  l = l ?? (entries === null || entries === void 0 ? void 0 : entries.length);

  for (let i = 0, r; i < l; i++) {
    r = entries[i], r[0] = keyTo(r[0], i);
  }

  return entries;
};
/**
 *
 * @param {[*,*][]} entries
 * @param {Function} valTo
 * @param {number} [l]
 * @returns {[*,*][]}
 */

const mutateValues = (entries, valTo, l) => {
  l = l ?? (entries === null || entries === void 0 ? void 0 : entries.length);

  for (let i = 0, r; i < l; i++) {
    r = entries[i], r[1] = valTo(r[1], i);
  }

  return entries;
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
