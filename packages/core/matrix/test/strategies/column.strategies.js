import { MatrixCollection } from '@foba/matrix-number'
import { makeEmbedded }     from '@foba/util'
import { decoCrostab }      from '@spare/logger'
import { says }             from '@spare/xr'
import { strategies }       from '@valjoux/strategies'
import { column }           from '@vect/matrix-index'
import { Stat }             from '@vect/vector-stat'

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
  * column(y) { for (let i = 0, h = this.length; i < h; i++) yield this[i][y] }
  * column2(y) { for (let row of this) yield row[y] }
}
const { lapse, result } = strategies({
  repeat: 1E+6,
  candidates: {
    bar: Matrix.from([ [ 0, 1, 2 ], [ 0, 1, 2 ], [ 0, 1, 2 ], [ 0, 1, 2 ] ]),
    identity: Matrix.from(MatrixCollection.identityMatrix(4, 3)),
    lowerPascal: Matrix.from(MatrixCollection.lowerPascalMatrix(5)),
    upperPascal: Matrix.from(MatrixCollection.upperPascalMatrix(5)),
    progressive: Matrix.from(MatrixCollection.progressiveRandomMatrix(5, 3)),
    zigZag: Matrix.from(MatrixCollection.zigZagMatrix(4)),
  } |> makeEmbedded,
  methods: {
    bench: x => x,
    cla: x => Stat.max(column.call(x, 1)),
    arc: x => Stat.max(x.column(1)),
    dev: x => Stat.max(x.column2(1)),
    // arc: x => x,
    // dev: x => x,
    // fut: x => x,
  }
})
lapse |> decoCrostab |> says['lapse']
result |> decoCrostab |> says['result']