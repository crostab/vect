/**
 *
 * @param {*[][]} mx
 * @param {function} fn
 * @param {number} [h]
 * @param {number} [w]
 * @returns {undefined}
 */
const iterate = function (mx, fn, h, w) {
  var _mx$;

  h = h || (mx === null || mx === void 0 ? void 0 : mx.length), w = w || h && ((_mx$ = mx[0]) === null || _mx$ === void 0 ? void 0 : _mx$.length);

  for (let i = 0, j, r; i < h; i++) for (r = mx[i], j = 0; j < w; j++) fn.call(this, r[j], i, j);
};

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

const mutate = (mx, fn, h, w) => {
  var _mx$;

  h = h || (mx === null || mx === void 0 ? void 0 : mx.length), w = w || h && ((_mx$ = mx[0]) === null || _mx$ === void 0 ? void 0 : _mx$.length);

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

export { indexed, indexedBy, indexedOf, indexedTo, iterate, mapper, mutate, selectMutate };
