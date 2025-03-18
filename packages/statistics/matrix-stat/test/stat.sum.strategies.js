import { NumberMatrixCollection } from '@foba/matrix'
import { makeEmbedded }           from '@foba/util'
import { decoCrostab, says }      from '@spare/logger'
import { strategies }             from '@valjoux/strategies'
import { size }                   from '@vect/matrix'
import { Stat }                   from '../src/stat.js'

const { lapse, result } = strategies({
  repeat: 5E+5,
  candidates: {
    identityMatrix: NumberMatrixCollection.identityMatrix(12),
    upperPascal: NumberMatrixCollection.upperPascalMatrix(7),
    lowerPascal: NumberMatrixCollection.lowerPascalMatrix(8),
    zigZagMatrix: NumberMatrixCollection.zigZagMatrix(4),
  } |> makeEmbedded,
  methods: {
    // mapper: mx => mapperColumns(mx, vec => sumOnVector(vec)),
    stat: Stat((a, b) => a + b),
    bench: x => size(x),
  }
})
lapse |> decoCrostab |> says['lapse']
result |> decoCrostab |> says['result']
