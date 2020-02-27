'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const iterate = function (mx, y, fn, l) {
  l = l || mx && mx.length;

  for (let i = 0; i < l; i++) fn.call(this, mx[i][y], i);
};

const mapper = (mx, y, fn, l) => columnMapper.call({
  y
}, mx, fn, l);

function columnMutate(mx, fn, l) {
  l = l || mx && mx.length;

  for (let i = 0, r, {
    y
  } = this; i < l && (r = mx[i]); i++) r[y] = fn(r[y], i);

  return mx;
}
/**
 * Return a mutate function that iterate through each element in column indexed by 'y'.
 * @param {number} y
 * @returns {function(*[][],function(*):*,[number]):*[][]}
 * @constructor
 */

const ColumnMutate = y => columnMutate.bind({
  y
});

const mutate = (mx, y, fn, l) => columnMutate.call({
  y
}, mx, fn, l);

function columnIterate(mx, fn, l) {
  l = l || mx && mx.length;

  for (let i = 0, {
    y,
    data
  } = this; i < l; i++) fn.call(data, mx[i][y], i);
}
/**
 * Return a mapper function that iterate through each element in column indexed by 'y'.
 * @param {number} y
 * @param {*} thisArg
 * @returns {function(*[][],function(*):*,[number]):*[][]}
 * @constructor
 */

const ColumnIterate = (y, thisArg) => columnIterate.bind(thisArg ? {
  y
} : {
  y,
  data: thisArg
});

function columnMapperDuplicate(mx, fn, l) {
  l = l || mx && mx.length;
  const mt = Array(l);

  for (let i = 0, r, {
    y
  } = this; i < l; i++) {
    mt[i] = r = mx[i].slice();
    r[y] = fn(r[y], i);
  }

  return mt;
}
function columnMapper$1(mx, fn, l) {
  l = l || mx && mx.length;
  const vec = Array(l);

  for (let i = 0, {
    y
  } = this; i < l; i++) vec[i] = fn(mx[i][y], i);

  return vec;
}
/**
 * Return a mapper function that iterate through each element in column indexed by 'y'.
 * @param {number} y
 * @param {boolean=true} [duplicate]  - true if duplicate original matrix form
 * @returns {function(*[][],function(*):*,[number]):*[][]}
 * @constructor
 */

const ColumnMapper = (y, duplicate = true) => duplicate ? columnMapperDuplicate.bind({
  y
}) : columnMapper$1.bind({
  y
});

exports.ColumnIterate = ColumnIterate;
exports.ColumnMapper = ColumnMapper;
exports.ColumnMutate = ColumnMutate;
exports.iterate = iterate;
exports.mapper = mapper;
exports.mutate = mutate;
