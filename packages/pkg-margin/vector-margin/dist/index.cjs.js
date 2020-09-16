'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 *
 * @param {*[]} vec
 * @param {number} [h] - head margin length
 * @param {number} [t] - tail margin length
 * @param {number} [l] - array length
 * @returns {*[]}
 */
const marginCopy = (vec, h, t, l) => {
  var _l;

  const ve = Array(l = (_l = l) !== null && _l !== void 0 ? _l : vec === null || vec === void 0 ? void 0 : vec.length),
        s = l - t;

  for (--h; h >= 0; h--) ve[h] = vec[h];

  for (--l; l >= s; l--) ve[l] = vec[l];

  return ve;
};

/**
 *
 * @param {*[]} vec
 * @param {function(*)|function(*,number)} fn
 * @param {number} [h] - head margin length
 * @param {number} [t] - tail margin length
 * @param {number} [l] - array length
 * @returns {*[]}
 */
const marginMapper = (vec, fn, h, t, l) => {
  var _l;

  const ve = Array(l = (_l = l) !== null && _l !== void 0 ? _l : vec === null || vec === void 0 ? void 0 : vec.length),
        s = l - t;

  for (--h; h >= 0; h--) ve[h] = fn(vec[h], h);

  for (--l; l >= s; l--) ve[l] = fn(vec[l], l);

  return ve;
};

/**
 *
 * @param {*[]} vec
 * @param {function(*)|function(*,number)} fn
 * @param {number} [h] - head margin length
 * @param {number} [t] - tail margin length
 * @param {number} [l] - array length
 * @returns {*[]}
 */
const marginMutate = (vec, fn, h, t, l) => {
  var _l;

  l = (_l = l) !== null && _l !== void 0 ? _l : vec === null || vec === void 0 ? void 0 : vec.length;
  const s = l - t;

  for (--h; h >= 0; h--) vec[h] = fn(vec[h], h);

  for (--l; l >= s; l--) vec[l] = fn(vec[l], l);

  return vec;
};

exports.marginCopy = marginCopy;
exports.marginMapper = marginMapper;
exports.marginMutate = marginMutate;
