import { MatrixCollection } from '@foba/matrix-number'
import { makeEmbedded }     from '@foba/util'
import { decoCrostab }      from '@spare/logger'
import { says }             from '@spare/xr'
import { strategies }       from '@valjoux/strategies'
import { size }             from '@vect/matrix-index'
import { init }             from '@vect/vector-init'
import { Stat }             from '@vect/vector-stat'
import { columnsMapper }    from '../../index'
import { Matrix }           from '../../src/Matrix'

const { lapse, result } = strategies({
  repeat: 1E+4,
  candidates: {
    bar: Matrix.from(init(196, () => [ 0, 1, 2 ])),
    identity: Matrix.from(MatrixCollection.identityMatrix(32, 32)),
    progressive: Matrix.from(MatrixCollection.progressiveRandomMatrix(3, 196)),
    zigZag: Matrix.from(MatrixCollection.zigZagMatrix(64)),
  } |> makeEmbedded,
  methods: {
    bench: matrix => size(matrix),
    cla: matrix => columnsMapper(matrix, Stat.max)|> Stat.max,
    dev: matrix => matrix.columnsTo(Stat.max)|> Stat.max,
  }
})
lapse |> decoCrostab |> says['lapse']
result |> decoCrostab |> says['result']