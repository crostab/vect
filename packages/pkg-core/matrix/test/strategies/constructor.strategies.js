import { MatrixCollection } from '@foba/matrix-number'
import { makeEmbedded }     from '@foba/util'
import { decoCrostab }      from '@spare/logger'
import { says }             from '@spare/xr'
import { strategies }       from '@valjoux/strategies'
import { column }           from '@vect/matrix-index'
import { Stat }             from '@vect/vector-stat'

export class MatrixDirect extends Array {
  constructor(rows) {
    super(rows?.length)
    for (let i = 0; i < rows?.length; i++) this[i] = rows[i]
  }
}
export class MatrixSpread extends Array {
  constructor(...rows) { super(...rows) }
}
export class MatrixLengthy extends Array {
  constructor(height) { super(height) }
  collect(iter, lo = 0) { for (let row of iter) this[lo++] = row }
}

export class FlatMatrix extends Array {

}

const { lapse, result } = strategies({
  repeat: 1E+6,
  candidates: {
    bar: ([ [ 0, 1, 2 ], [ 0, 1, 2 ], [ 0, 1, 2 ], [ 0, 1, 2 ] ]),
    identity: (MatrixCollection.identityMatrix(3, 3)),
    lowerPascal: (MatrixCollection.lowerPascalMatrix(4)),
    upperPascal: (MatrixCollection.upperPascalMatrix(4)),
    progressive: (MatrixCollection.progressiveRandomMatrix(3, 4)),
    zigZag: (MatrixCollection.zigZagMatrix(3)),
  } |> makeEmbedded,
  methods: {
    bench: x => x,
    cla: x => new MatrixDirect(x),
    arc: x => new MatrixSpread(...x),
    dev: x => new MatrixLengthy(x.length).collect(x),
    // arc: x => x,
    // dev: x => x,
    // fut: x => x,
  }
})
lapse |> decoCrostab |> says['lapse']
result |> decoCrostab |> says['result']