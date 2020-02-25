'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 *
 * @param {*[]} ar
 * @param {number} [h] - head margin length
 * @param {number} [t] - tail margin length
 * @param {number} [l] - array length
 * @returns {*[]}
 */
const marginCopy = (ar, h, t, l) => {
  const ve = Array(l = l || ar.length),
        s = l - t;

  for (--h; h >= 0; h--) ve[h] = ar[h];

  for (--l; l >= s; l--) ve[l] = ar[l];

  return ve;
};

/**
 *
 * @param {*[]} ar
 * @param {function(*)|function(*,number)} fn
 * @param {number} [h] - head margin length
 * @param {number} [t] - tail margin length
 * @param {number} [l] - array length
 * @returns {*[]}
 */
const marginMapper = (ar, fn, h, t, l) => {
  const ve = Array(l = l || ar.length),
        s = l - t;

  for (--h; h >= 0; h--) ve[h] = fn(ar[h], h);

  for (--l; l >= s; l--) ve[l] = fn(ar[l], l);

  return ve;
};

/**
 *
 * @param {*[]} ar
 * @param {function(*)|function(*,number)} fn
 * @param {number} [h] - head margin length
 * @param {number} [t] - tail margin length
 * @param {number} [l] - array length
 * @returns {*[]}
 */
const marginMutate = (ar, fn, h, t, l) => {
  l = l || ar.length;
  const s = l - t;

  for (--h; h >= 0; h--) ar[h] = fn(ar[h], h);

  for (--l; l >= s; l--) ar[l] = fn(ar[l], l);

  return ar;
};

exports.marginCopy = marginCopy;
exports.marginMapper = marginMapper;
exports.marginMutate = marginMutate;
