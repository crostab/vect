'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Return true if every element in a matrix matches the input criteria.
 * Return true if either height or width is zero.
 * @param {*[][]} mx
 * @param {function(*,number?,number?):*} crit
 * @param {number} [h]
 * @param {number} [w]
 * @returns {boolean}
 */
const every = (mx, crit, h, w) => {
  var _mx$;

  h = h || (mx === null || mx === void 0 ? void 0 : mx.length), w = w || h && ((_mx$ = mx[0]) === null || _mx$ === void 0 ? void 0 : _mx$.length);
  if (!w) return true;

  for (let i = 0, j, r; i < h; i++) for (j = 0, r = mx[i]; j < w; j++) if (!crit(r[j], i, j)) return false;

  return true;
};

/**
 * Return true if at least one element in a matrix matches the input criteria.
 * Return false if either height or width is zero.
 * @param {*[][]} mx
 * @param {function(*,number?,number?):*} crit
 * @param {number} [h]
 * @param {number} [w]
 * @returns {boolean}
 */
const some = (mx, crit, h, w) => {
  var _mx$;

  h = h || (mx === null || mx === void 0 ? void 0 : mx.length), w = w || h && ((_mx$ = mx[0]) === null || _mx$ === void 0 ? void 0 : _mx$.length);
  if (!w) return false;

  for (let i = 0, j, r; i < h; i++) for (j = 0, r = mx[i]; j < w; j++) if (crit(r[j], i, j)) return true;

  return false;
};

exports.every = every;
exports.some = some;
