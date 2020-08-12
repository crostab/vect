'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const height = mx => mx === null || mx === void 0 ? void 0 : mx.length;

const width = mx => {
  let r;
  return height(mx) && (r = mx[0]) ? r.length : r;
};

const size = mx => {
  let h, r;
  return mx && (h = mx.length) && (r = mx[0]) ? [h, r.length] : [h, r];
};

exports.height = height;
exports.size = size;
exports.width = width;
