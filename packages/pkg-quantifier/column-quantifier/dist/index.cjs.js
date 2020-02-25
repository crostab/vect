'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Return true if every element in a specified column of a matrix matches the input criteria.
 * Return true if either height or width is zero, or specified column index >= width.
 * @param {*[][]} mx
 * @param {function(*,number?,number?):*} crit
 * @param {number} [h]
 * @param {number} [w]
 * @returns {boolean}
 */

function columnEvery(mx, crit, h, w) {
  var _mx$;

  const {
    y
  } = this;
  h = h || (mx === null || mx === void 0 ? void 0 : mx.length), w = w || h && ((_mx$ = mx[0]) === null || _mx$ === void 0 ? void 0 : _mx$.length);
  if (!w || y >= w) return true;

  for (let i = 0; i < h; i++) if (!crit(mx[i][y], i)) return false;

  return true;
}
const ColumnEvery = y => columnEvery.bind({
  y
});

/**
 * Return true if every element in a specified column of a matrix matches the input criteria.
 * Return true if either height or width is zero, or specified column index >= width.
 * @param {*[][]} mx
 * @param {number} y
 * @param {function(*,number?,number?):*} crit
 * @param {number} [h]
 * @param {number} [w]
 * @returns {boolean}
 */

const every = (mx, y, crit, h, w) => columnEvery.call({
  y
}, mx, crit, h, w);

/**
 * Return true if at least one element in a specified column of a matrix matches the input criteria.
 * Return false if either height or width is zero, or specified column index >= width.
 * @param {*[][]} mx
 * @param {number} y
 * @param {function(*,number?,number?):*} crit
 * @param {number} [h]
 * @param {number} [w]
 * @returns {boolean}
 */
const some = (mx, y, crit, h, w) => columnSome.call({
  y
}, mx, crit, h, w);

/**
 * Return true if some element in a specified column of a matrix matches the input criteria.
 * Return false if either height or width is zero, or specified column index >= width.
 * @param {*[][]} mx
 * @param {function(*,number?,number?):*} crit
 * @param {number} [h]
 * @param {number} [w]
 * @returns {boolean}
 */

function columnSome$1(mx, crit, h, w) {
  var _mx$;

  const {
    y
  } = this;
  h = h || (mx === null || mx === void 0 ? void 0 : mx.length), w = w || h && ((_mx$ = mx[0]) === null || _mx$ === void 0 ? void 0 : _mx$.length);
  if (!w || y >= w) return false;

  for (let i = 0; i < h; i++) if (crit(mx[i][y], i)) return true;

  return false;
}
const ColumnSome = y => columnSome$1.bind({
  y
});

exports.ColumnEvery = ColumnEvery;
exports.ColumnSome = ColumnSome;
exports.every = every;
exports.some = some;
