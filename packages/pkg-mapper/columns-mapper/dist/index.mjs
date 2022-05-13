import { width, column } from '@vect/matrix-index';

const mapper = (mx, colTo) => {
  const h = mx === null || mx === void 0 ? void 0 : mx.length,
        w = width(mx),
        vec = Array(w),
        col = column.bind(mx);

  for (let j = 0; j < w; j++) vec[j] = colTo(col(j, h), j);

  return vec;
};
const iterate = function (mx, onCol) {
  const h = mx === null || mx === void 0 ? void 0 : mx.length,
        w = width(mx),
        col = column.bind(mx);

  for (let j = 0; j < w; j++) onCol.call(this, col(j, h), j);
};

function* indexedOf(mx) {
  for (let j = 0, w = width(mx); j < w; j++) yield column.call(mx, j);
}
function* indexedBy(mx, by) {
  for (let j = 0, w = width(mx), col; j < w; j++) if (by(col = column.call(mx, j), j)) yield col;
}
function* indexedTo(mx, to) {
  for (let j = 0, w = width(mx); j < w; j++) yield to(column.call(mx, j), j);
}
function* indexed(mx, by, to) {
  if (!to) return yield* !by ? indexedOf(mx) : indexedBy(mx, by);

  for (let j = 0, w = width(mx), col; j < w; j++) if (by(col = column.call(mx, j), j)) yield to(col, j);
}

export { indexed as columns, indexedBy as columnsBy, iterate as columnsIterate, mapper as columnsMapper, indexedOf as columnsOf, indexedTo as columnsTo, indexed, indexedBy, indexedOf, indexedTo, iterate, mapper };
