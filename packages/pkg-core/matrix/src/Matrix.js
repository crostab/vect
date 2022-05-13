import { columns, columnsTo, entries, entriesTo, points, pointsTo, rows, rowsTo, triplets, tripletsTo } from './indexed'

export class Matrix extends Array {
  constructor(size) { super(size) }
  static of(...rows) { return new Matrix(rows?.length).collect(rows) }
  static from(rows) { return new Matrix(rows?.length).collect(rows) }

  get height() { return this.length }
  get width() { return this[0]?.length }
  get size() { return [ this.height, this.width ] }

  transpose() {
    const h = this.height, w = this.width, cols = new Matrix(w)
    for (let j = 0; j < w; j++) for (let i = 0, col = cols[j] = Array(h); i < h; i++) col[i] = this[i][j]
    return cols
  }
  collect(iter, lo = 0) {
    for (let row of iter) this[lo++] = row
    return this
  }
  row(x) { return this[x] }
  column(y) {
    let h = this.length, col = Array(h)
    for (--h; h >= 0; h--) col[h] = this[h][y]
    return col
  }

  * rowOf(x) { yield* this[x] }
  * columnOf(y) { for (let i = 0, h = this.length; i < h; i++) yield this[i][y] }

  * rows(by, to) { yield* rows(this, by, to) }
  * columns(by, to) { yield* columns(this, by, to) }
  * points(by, to) { yield* points(this, by, to) }
  * entries(xy, by, to) { yield* entries(this, xy, to) }
  * triplets(xyz, by, to) { yield* triplets(this, xyz, by, to) }

  * rowsTo(to) { yield* rowsTo(this, to) }
  * columnsTo(to) { yield* columnsTo(this, to) }
  * pointsTo(to) { yield* pointsTo(this, to) }
  * entriesTo(xy, to) { yield* entriesTo(this, xy, to) }
  * tripletsTo(xyz, to) { yield* tripletsTo(this, xyz, to) }
}