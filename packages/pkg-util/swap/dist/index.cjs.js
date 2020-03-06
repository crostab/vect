'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const swap = function (i, j) {
  const temp = this[i];
  this[i] = this[j];
  return this[j] = temp;
};
const Swap = vec => swap.bind(vec);

exports.Swap = Swap;
exports.swap = swap;
