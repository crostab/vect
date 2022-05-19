export { Duozipper, Quazipper, Trizipper, duozipper, iterzip, mutazip, quazipper, trizipper, zipper } from '@vect/matrix-zipper';
import { points, entries, triplets, pointsTo, entriesTo, tripletsTo } from '@vect/matrix-mapper';
export { entries, entriesBy, entriesOf, entriesTo, entryIndexed, entryIndexedBy, entryIndexedOf, entryIndexedTo, indexed, indexedBy, indexedOf, indexedTo, iterate, mapper, mutate, points, pointsBy, pointsOf, pointsTo, rows, rowsBy, rowsOf, rowsTo, selectMutate, tripletIndexed, tripletIndexedBy, tripletIndexedOf, tripletIndexedTo, triplets, tripletsBy, tripletsOf, tripletsTo } from '@vect/matrix-mapper';
import { columns, columnsTo } from '@vect/columns-mapper';
export { columns, columnsBy, columnsIterate, columnsMapper, columnsOf, columnsTo } from '@vect/columns-mapper';
export { draft, init, iso, product, shallow } from '@vect/matrix-init';
export { every, some } from '@vect/matrix-quantifier';
export { transpose } from '@vect/matrix-algebra';
export { Columns } from '@vect/column-getter';
export { divide, select, selectEntries, selectObject, separate } from '@vect/columns-select';
export { pop, push, shift, splices, unshift } from '@vect/columns-update';
export { coins, column, height, isMatrix, size, width } from '@vect/matrix-index';
import { indexed, indexedTo } from '@vect/vector-mapper';

class Matrix extends Array {
  constructor(size) {
    super(size);
  }

  static of(...rows) {
    return new Matrix(rows === null || rows === void 0 ? void 0 : rows.length).collect(rows);
  }

  static from(rows) {
    return new Matrix(rows === null || rows === void 0 ? void 0 : rows.length).collect(rows);
  }

  get height() {
    return this.length;
  }

  get width() {
    var _this$;

    return (_this$ = this[0]) === null || _this$ === void 0 ? void 0 : _this$.length;
  }

  get size() {
    return [this.height, this.width];
  }

  transpose() {
    const h = this.height,
          w = this.width,
          cols = new Matrix(w);

    for (let j = 0; j < w; j++) for (let i = 0, col = cols[j] = Array(h); i < h; i++) col[i] = this[i][j];

    return cols;
  }

  collect(iter, lo = 0) {
    for (let row of iter) this[lo++] = row;

    return this;
  }

  row(x) {
    return this[x];
  }

  column(y) {
    let h = this.length,
        col = Array(h);

    for (--h; h >= 0; h--) col[h] = this[h][y];

    return col;
  }

  *rowOf(x) {
    yield* this[x];
  }

  *columnOf(y) {
    for (let i = 0, h = this.length; i < h; i++) yield this[i][y];
  }

  *rows(by, to) {
    yield* indexed(this, by, to);
  }

  *columns(by, to) {
    yield* columns(this, by, to);
  }

  *points(by, to) {
    yield* points(this, by, to);
  }

  *entries(xy, by, to) {
    yield* entries(this, xy, to);
  }

  *triplets(xyz, by, to) {
    yield* triplets(this, xyz, by, to);
  }

  *rowsTo(to) {
    yield* indexedTo(this, to);
  }

  *columnsTo(to) {
    yield* columnsTo(this, to);
  }

  *pointsTo(to) {
    yield* pointsTo(this, to);
  }

  *entriesTo(xy, to) {
    yield* entriesTo(this, xy, to);
  }

  *tripletsTo(xyz, to) {
    yield* tripletsTo(this, xyz, to);
  }

}

const POINTWISE = 0;
const ROWWISE = 1;
const COLUMNWISE = 2; // export { marginCopy, marginMapper, marginMutate }       from '@vect/matrix-margin'
// export { maxBy, minBy, Max, Min }                       from '@vect/matrix-indicator'

export { COLUMNWISE, Matrix, POINTWISE, ROWWISE };
