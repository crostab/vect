'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const isMatrix = mx => Array.isArray(mx) && Array.isArray(mx[0]);
const size = mx => {
  let h, r;
  return mx && (h = mx.length) && (r = mx[0]) ? [h, r.length] : [h, r];
};
const height = mx => mx === null || mx === void 0 ? void 0 : mx.length;
const width = mx => {
  var _mx$;
  return mx !== null && mx !== void 0 && mx.length ? (_mx$ = mx[0]) === null || _mx$ === void 0 ? void 0 : _mx$.length : null;
};
const certSize = (mx, h, w) => {
  var _mx$2;
  if (!h) h = mx === null || mx === void 0 ? void 0 : mx.length;
  if (!w) w = h && ((_mx$2 = mx[0]) === null || _mx$2 === void 0 ? void 0 : _mx$2.length);
  return [h, w];
};

/**
 *
 * @param {*[][]} mx
 * @return {number[]}
 */
const coins = mx => isMatrix(mx) ? mx[0].map((_, i) => i) : [];

function column(y, h) {
  const mx = this,
    col = Array(h ?? (h = this === null || this === void 0 ? void 0 : this.length));
  for (--h; h >= 0; h--) col[h] = mx[h][y];
  return col;
}

exports.certSize = certSize;
exports.coins = coins;
exports.column = column;
exports.height = height;
exports.isMatrix = isMatrix;
exports.size = size;
exports.width = width;
