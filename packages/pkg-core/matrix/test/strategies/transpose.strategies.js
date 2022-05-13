import { MatrixCollection }         from '@foba/matrix-number'
import { makeEmbedded }             from '@foba/util'
import { decoCrostab }              from '@spare/logger'
import { says }                     from '@spare/xr'
import { strategies }               from '@valjoux/strategies'
import { gather }                   from '@vect/vector-init'
import { height, transpose, width } from '../../index'
import { Matrix }                   from '../../src/Matrix'

const { lapse, result } = strategies({
  repeat: 1E+6,
  candidates: {
    bar: Matrix.from([ [ 0, 1, 2 ], [ 0, 1, 2 ], [ 0, 1, 2 ], [ 0, 1, 2 ] ]),
    identity: Matrix.from(MatrixCollection.identityMatrix(3, 3)),
    lowerPascal: Matrix.from(MatrixCollection.lowerPascalMatrix(5)),
    upperPascal: Matrix.from(MatrixCollection.upperPascalMatrix(5)),
    progressive: Matrix.from(MatrixCollection.progressiveRandomMatrix(5, 3)),
    zigZag: Matrix.from(MatrixCollection.zigZagMatrix(4)),
  } |> makeEmbedded,
  methods: {
    bench: x => x,
    cla: transpose,
    arc: mx => mx.transpose(),
    dev: mx => mx.columns()|> gather,
    fut: (mx) => {
      const h = height(mx), w = width(mx), cols = Array(w)
      for (let j = 0; j < w; j++)
        for (let i = 0, col = cols[j] = Array(h); i < h; i++)
          col[i] = mx[i][j]
      return cols
    }
  }
})
lapse |> decoCrostab |> says['lapse']
result |> decoCrostab |> says['result']