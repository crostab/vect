import { column }                                 from '@vect/matrix-index'
import {
  entryIndexed as entriesBy, entryIndexedTo as entriesTo, indexed as pointsBy, indexedTo as pointsTo,
  tripletIndexed as tripletsBy, tripletIndexedTo as tripletsTo,
}                                                 from '@vect/matrix-mapper'
import { indexed as rowsBy, indexedTo as rowsTo } from '@vect/vector-mapper'

export class Matrix extends Array {
  constructor(size) { super(size) }
  static of(...rows) { return new Matrix(rows?.length).collect(rows) }
  static from(rows) { return new Matrix(rows?.length).collect(rows) }
  get height() { return this.length }
  get width() { return this[0]?.length }
  collect(iter, lo = 0) {
    for (let row of iter) this[lo++] = row
    return this
  }

  rowAt(x) { return this[x] }
  columnAt(y) { return column.call(this, y) }

  * row(x) { yield* this[x] }
  * column(y) { for (let i = 0, h = this.length; i < h; i++) yield this[i][y] }

  * rows() { yield* this }
  * columns() { for (let j = 0, w = this.width; j < w; j++) yield this.column(j) }

  * rowsTo(to) { yield* rowsTo(this, to) }
  * columnsTo(to) { for (let j = 0, w = this.width; j < w; j++) yield to(this.column(j), j) }  // return yield* columnsTo(this, to)
  * pointsTo(to) { yield* pointsTo(this, to) }
  * entriesTo(xy, to) { yield* entriesTo(this, xy, to) }
  * tripletsTo(xyz, to) { yield* tripletsTo(this, xyz, to) }

  * rowsBy(by, to) { yield* rowsBy(this, by, to) }
  * columnsBy(by, to) { for (let j = 0, w = this.width, col; j < w; j++) if (by(col = this.columnAt(j), j)) yield to(col, j) }
  * pointsBy(by, to) { yield* pointsBy(this, by, to) }
  * entriesBy(xy, by, to) { yield* entriesBy(this, xy, to) }
  * tripletsBy(xyz, by, to) { yield* tripletsBy(this, xyz, by, to) }
}