'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vectorMapper = require('@vect/vector-mapper');
var columnsMapper = require('@vect/columns-mapper');

/**
 * Iterate through elements on each (x of rows,y of columns) coordinate of a 2d-array.
 * @param {*[][]} mx
 * @param {function} fn
 * @param {number} [h]
 * @param {number} [w]
 * @returns {*[]}
 */
const mapper = (mx, fn, h, w) => {
  var _mx$;

  h = h || (mx === null || mx === void 0 ? void 0 : mx.length), w = w || h && ((_mx$ = mx[0]) === null || _mx$ === void 0 ? void 0 : _mx$.length);
  const tx = Array(h);

  for (let i = 0, j, r, tr; i < h; i++) for (tx[i] = tr = Array(w), r = mx[i], j = 0; j < w; j++) tr[j] = fn(r[j], i, j);

  return tx;
};
/**
 *
 * @param {*[][]} mx
 * @param {function} fn
 * @param {number} [h]
 * @param {number} [w]
 * @returns {undefined}
 */

const iterate = function (mx, fn, h, w) {
  var _mx$2;

  h = h || (mx === null || mx === void 0 ? void 0 : mx.length), w = w || h && ((_mx$2 = mx[0]) === null || _mx$2 === void 0 ? void 0 : _mx$2.length);

  for (let i = 0, j, r; i < h; i++) for (r = mx[i], j = 0; j < w; j++) fn.call(this, r[j], i, j);
};
const mutate = (mx, fn, h, w) => {
  var _mx$3;

  h = h || (mx === null || mx === void 0 ? void 0 : mx.length), w = w || h && ((_mx$3 = mx[0]) === null || _mx$3 === void 0 ? void 0 : _mx$3.length);

  for (let i = 0, j, r; i < h; i++) for (j = 0, r = mx[i]; j < w; j++) r[j] = fn(r[j], i, j);

  return mx;
};
const selectMutate = (mx, ys, fn, h) => {
  h = h || (mx === null || mx === void 0 ? void 0 : mx.length);
  const depth = ys.length;

  for (let i = 0, y, r, j; i < h; i++) for (y = 0, r = mx[i]; y < depth; y++) r[j = ys[y]] = fn(r[j], i, j);

  return mx;
};

function* indexedOf(mx) {
  if (mx) for (let i = 0, h = mx.length; i < h; i++) {
    const row = mx[i];
    if (row) for (let j = 0, w = row.length; j < w; j++) {
      yield [row[j], i, j];
    }
  }
}
function* indexedBy(mx, by) {
  if (mx) for (let i = 0, h = mx.length; i < h; i++) {
    const row = mx[i];
    if (row) for (let j = 0, w = row.length; j < w; j++) {
      const val = row[j];
      if (by(val, i, j)) yield [val, i, j];
    }
  }
}
function* indexedTo(mx, to) {
  if (mx) for (let i = 0, h = mx.length; i < h; i++) {
    const row = mx[i];
    if (row) for (let j = 0, w = row.length; j < w; j++) {
      yield to(row[j], i, j);
    }
  }
}
function* indexed(mx, by, to) {
  if (!to) {
    return yield* !by ? indexedOf(mx) : indexedBy(mx, by);
  }

  if (mx) for (let i = 0, h = mx.length; i < h; i++) {
    const row = mx[i];
    if (row) for (let j = 0, w = row.length; j < w; j++) {
      const val = row[j];
      if (by(val, i, j)) yield to(val, i, j);
    }
  }
}

function* entryIndexedOf(rows, [k, v]) {
  for (let row of rows) {
    yield [row[k], row[v]];
  }
}
function* entryIndexedBy(rows, [k, v], by) {
  for (let row of rows) {
    const x = row[k],
          y = row[v];
    if (by(x, y)) yield [x, y];
  }
}
function* entryIndexedTo(rows, [k, v], to) {
  for (let row of rows) {
    yield to(row[k], row[v]);
  }
}
/**
 *
 * @param {*[][]|*[][]} rows
 * @param {[*,*]} kv
 * @param {function(*,*):boolean} [by]
 * @param {function(*,*):*} [to]
 * @returns {Generator<*, void, *>}
 */

function* entryIndexed(rows, kv, by, to) {
  if (!to) {
    return yield* !by ? entryIndexedOf(rows, kv) : entryIndexedBy(rows, kv, by);
  }

  const [k, v] = kv;

  for (let row of rows) {
    const x = row[k],
          y = row[v];
    if (by(x, y)) yield to(x, y);
  }
}

function* tripletIndexedOf(rows, [xi, yi, zi]) {
  for (let row of rows) yield [row[xi], row[yi], row[zi]];
}
function* tripletIndexedBy(rows, [xi, yi, zi], by) {
  for (let row of rows) {
    const x = row[xi],
          y = row[yi],
          z = row[zi];
    if (by(x, y, z)) yield to(x, y, z);
  }
}
function* tripletIndexedTo(rows, [xi, yi, zi], to) {
  for (let row of rows) yield to(row[xi], row[yi], row[zi]);
}
/**
 *
 * @param {*[][]} rows
 * @param {[*,*,*]} xyz
 * @param {function(*,*,*):boolean} [by]
 * @param {function(*,*,*):*} [to]
 * @returns {Generator<*, void, *>}
 */

function* tripletIndexed(rows, xyz, by, to) {
  if (!to) {
    return yield* !by ? tripletIndexedOf(rows, xyz) : tripletIndexedBy(rows, xyz, by);
  }

  const [xi, yi, zi] = xyz;

  for (let row of rows) {
    const x = row[xi],
          y = row[yi],
          z = row[zi];
    if (by(x, y, z)) yield to(x, y, z);
  }
}

Object.defineProperty(exports, 'rows', {
  enumerable: true,
  get: function () { return vectorMapper.indexed; }
});
Object.defineProperty(exports, 'rowsBy', {
  enumerable: true,
  get: function () { return vectorMapper.indexedBy; }
});
Object.defineProperty(exports, 'rowsOf', {
  enumerable: true,
  get: function () { return vectorMapper.indexedOf; }
});
Object.defineProperty(exports, 'rowsTo', {
  enumerable: true,
  get: function () { return vectorMapper.indexedTo; }
});
Object.defineProperty(exports, 'columns', {
  enumerable: true,
  get: function () { return columnsMapper.columns; }
});
Object.defineProperty(exports, 'columnsBy', {
  enumerable: true,
  get: function () { return columnsMapper.columnsBy; }
});
Object.defineProperty(exports, 'columnsOf', {
  enumerable: true,
  get: function () { return columnsMapper.columnsOf; }
});
Object.defineProperty(exports, 'columnsTo', {
  enumerable: true,
  get: function () { return columnsMapper.columnsTo; }
});
exports.entries = entryIndexed;
exports.entriesBy = entryIndexedBy;
exports.entriesOf = entryIndexedOf;
exports.entriesTo = entryIndexedTo;
exports.entryIndexed = entryIndexed;
exports.entryIndexedBy = entryIndexedBy;
exports.entryIndexedOf = entryIndexedOf;
exports.entryIndexedTo = entryIndexedTo;
exports.indexed = indexed;
exports.indexedBy = indexedBy;
exports.indexedOf = indexedOf;
exports.indexedTo = indexedTo;
exports.iterate = iterate;
exports.mapper = mapper;
exports.mutate = mutate;
exports.points = indexed;
exports.pointsBy = indexedBy;
exports.pointsOf = indexedOf;
exports.pointsTo = indexedTo;
exports.selectMutate = selectMutate;
exports.tripletIndexed = tripletIndexed;
exports.tripletIndexedBy = tripletIndexedBy;
exports.tripletIndexedOf = tripletIndexedOf;
exports.tripletIndexedTo = tripletIndexedTo;
exports.triplets = tripletIndexed;
exports.tripletsBy = tripletIndexedBy;
exports.tripletsOf = tripletIndexedOf;
exports.tripletsTo = tripletIndexedTo;
