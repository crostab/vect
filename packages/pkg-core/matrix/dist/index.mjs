import * as ColumnGetter from '@vect/column-getter';
import * as ColumnsMapper from '@vect/columns-mapper';
import * as Indicator from '@vect/matrix-indicator';
import * as Init from '@vect/matrix-init';
import * as Mapper from '@vect/matrix-mapper';
import { indexedTo as indexedTo$1, entryIndexedTo, tripletIndexedTo, indexed as indexed$1, entryIndexed, tripletIndexed } from '@vect/matrix-mapper';
import * as Margin from '@vect/matrix-margin';
import * as Quantifier from '@vect/matrix-quantifier';
import * as Size from '@vect/matrix-index';
import { column as column$1 } from '@vect/matrix-index';
import * as Transpose from '@vect/matrix-transpose';
import * as Zipper from '@vect/matrix-zipper';
export { select } from '@vect/columns-select';
export { pop, push, shift, splices, unshift } from '@vect/columns-update';
import { first } from '@vect/vector-index';
export { COLUMNWISE, POINTWISE, ROWWISE } from '@vect/enum-matrix-directions';
import { indexedTo, indexed } from '@vect/vector-mapper';

const isMatrix = mx => Array.isArray(mx) && Array.isArray(mx[0]);

/**
 *
 * @param {*[][]} mx
 * @return {number[]}
 */

const coins = mx => isMatrix(mx) ? first(mx).map((_, i) => i) : [];

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

  collect(iter, lo = 0) {
    for (let row of iter) this[lo++] = row;

    return this;
  }

  row(x) {
    return this[x];
  }

  column(y) {
    return column$1.call(this, y);
  }

  *rowOf(x) {
    yield* this[x];
  }

  *columnOf(y) {
    for (let i = 0, h = this.length; i < h; i++) yield this[i][y];
  }

  *rows(by, to) {
    yield* this;
  }

  *columns(by, to) {
    for (let j = 0, w = this.width; j < w; j++) yield this.column(j);
  }

  *rowsTo(to) {
    yield* indexedTo(this, to);
  }

  *columnsTo(to) {
    for (let j = 0, w = this.width; j < w; j++) yield to(this.column(j), j);
  } // return yield* columnsTo(this, to)


  *pointsTo(to) {
    yield* indexedTo$1(this, to);
  }

  *entriesTo(xy, to) {
    yield* entryIndexedTo(this, xy, to);
  }

  *tripletsTo(xyz, to) {
    yield* tripletIndexedTo(this, xyz, to);
  }

  *rowsBy(by, to) {
    yield* indexed(this, by, to);
  }

  *columnsBy(by, to) {
    for (let j = 0, w = this.width, col; j < w; j++) if (by(col = this.columnAt(j), j)) yield to(col, j);
  }

  *pointsBy(by, to) {
    yield* indexed$1(this, by, to);
  }

  *entriesBy(xy, by, to) {
    yield* entryIndexed(this, xy, to);
  }

  *tripletsBy(xyz, by, to) {
    yield* tripletIndexed(this, xyz, by, to);
  }

}

const {
  draft,
  fab,
  iso,
  init,
  ini,
  starter,
  shallow
} = Init;
const {
  iterate,
  mutate,
  mapper
} = Mapper;
const {
  marginCopy,
  marginMapper,
  marginMutate
} = Margin;
const {
  zipper,
  mutazip,
  iterzip,
  duozipper,
  trizipper,
  quazipper,
  Duozipper,
  Trizipper,
  Quazipper
} = Zipper;
const {
  maxBy,
  minBy,
  Max,
  Min
} = Indicator;
const {
  every,
  some
} = Quantifier;
const {
  size,
  width,
  height
} = Size;
const {
  transpose
} = Transpose;
const {
  column,
  Columns
} = ColumnGetter;
const {
  mapper: columnsMapper
} = ColumnsMapper;

export { Columns, Duozipper, Matrix, Max, Min, Quazipper, Trizipper, coins, column, columnsMapper, draft, duozipper, every, fab, height, ini, init, isMatrix, iso, iterate, iterzip, mapper, marginCopy, marginMapper, marginMutate, maxBy, minBy, mutate, mutazip, quazipper, shallow, size, some, starter, transpose, trizipper, width, zipper };
