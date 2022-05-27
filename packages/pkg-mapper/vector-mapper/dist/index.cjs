'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function mapper(vec, fn, l) {
  l = l || (vec === null || vec === void 0 ? void 0 : vec.length);
  const ve = Array(l);

  for (--l; l >= 0; l--) ve[l] = fn.call(this, vec[l], l);

  return ve;
}
function iterate(vec, fn, l) {
  l = l || (vec === null || vec === void 0 ? void 0 : vec.length);

  for (let i = 0; i < l; i++) fn.call(this, vec[i], i);
}
function mutate(vec, fn, l) {
  l = l || (vec === null || vec === void 0 ? void 0 : vec.length);

  for (--l; l >= 0; l--) vec[l] = fn.call(this, vec[l], l);

  return vec;
}
function reviter(vec, fn, l) {
  l = l || (vec === null || vec === void 0 ? void 0 : vec.length);

  for (--l; l >= 0; l--) fn.call(this, vec[l], l);
}

function* indexedOf(vec) {
  // for (let i = 0, h = vec?.length; i < h; i++) yield vec[i]
  yield* vec;
}
function* indexedBy(vec, by) {
  for (let i = 0, h = vec === null || vec === void 0 ? void 0 : vec.length, el; i < h; i++) if (by(el = vec[i], i)) yield el;
}
function* indexedTo(vec, to) {
  if (!to) {
    return yield* indexedOf(vec);
  }

  for (let i = 0, h = vec === null || vec === void 0 ? void 0 : vec.length; i < h; i++) yield to(vec[i], i);
}
function* indexed(vec, by, to) {
  if (!to) {
    return yield* !by ? indexedOf(vec) : indexedBy(vec, by);
  }

  for (let i = 0, h = vec === null || vec === void 0 ? void 0 : vec.length, el; i < h; i++) if (by(el = vec[i], i)) yield to(el, i);
}

exports.indexed = indexed;
exports.indexedBy = indexedBy;
exports.indexedOf = indexedOf;
exports.indexedTo = indexedTo;
exports.iterate = iterate;
exports.mapper = mapper;
exports.mutate = mutate;
exports.reviter = reviter;
