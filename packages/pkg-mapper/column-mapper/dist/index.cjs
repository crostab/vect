'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function columnMutate(mx, fn, l) {
  l = l || (mx === null || mx === void 0 ? void 0 : mx.length);

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
const iterate = function (mx, y, fn, l) {
  l = l || (mx === null || mx === void 0 ? void 0 : mx.length);

  for (let i = 0; i < l; i++) fn.call(this, mx[i][y], i);
};
function columnIterate(mx, fn, l) {
  l = l || (mx === null || mx === void 0 ? void 0 : mx.length);

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
  l = l || (mx === null || mx === void 0 ? void 0 : mx.length);
  const mt = Array(l);

  for (let i = 0, r, {
    y
  } = this; i < l; i++) {
    mt[i] = r = mx[i].slice();
    r[y] = fn(r[y], i);
  }

  return mt;
}
function columnMapper(mx, fn, l) {
  l = l || (mx === null || mx === void 0 ? void 0 : mx.length);
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
}) : columnMapper.bind({
  y
});
const mutate = (mx, y, fn, l) => columnMutate.call({
  y
}, mx, fn, l);
const mapper = (mx, y, fn, l) => columnMapper.call({
  y
}, mx, fn, l);

function* indexedOf(mx, y) {
  for (let h = mx.length, i = 0; i < h; i++) yield mx[i][y];
}
function* indexedBy(mx, y, by) {
  for (let h = mx.length, i = 0; i < h; i++) if (by(mx[i][y], i)) yield mx[i][y];
}
function* indexedTo(mx, y, to) {
  for (let h = mx.length, i = 0; i < h; i++) yield to(mx[i][y], i);
}
function* indexed(mx, y, by, to) {
  for (let h = mx.length, i = 0, v; i < h; i++) if (by(v = mx[i][y], i)) yield to(v, i);
}

exports.ColumnIterate = ColumnIterate;
exports.ColumnMapper = ColumnMapper;
exports.ColumnMutate = ColumnMutate;
exports.indexed = indexed;
exports.indexedBy = indexedBy;
exports.indexedOf = indexedOf;
exports.indexedTo = indexedTo;
exports.iterate = iterate;
exports.mapper = mapper;
exports.mutate = mutate;
