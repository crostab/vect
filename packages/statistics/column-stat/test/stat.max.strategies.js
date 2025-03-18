import { max }                                   from '@aryth/comparer'
import { NumberMatrixCollection }                from '@foba/matrix'
import { decoCrostab, decoMatrix, logger, says } from '@spare/logger'
import { strategies }                            from '@valjoux/strategies'
import { Stat }                                  from '../src/stat.js'

NumberMatrixCollection.zigZagMatrix(4) |> decoMatrix |> logger
const { lapse, result } = strategies({
  repeat: 5E+5,
  candidates: {
    identityMatrix: [NumberMatrixCollection.identityMatrix(4), 1],
    upperPascal: [NumberMatrixCollection.upperPascalMatrix(7), 1],
    lowerPascal: [NumberMatrixCollection.lowerPascalMatrix(8), 0],
    zigZagMatrix: [NumberMatrixCollection.zigZagMatrix(4), 2],
  },
  methods: {
    stat: Stat(max),
    bench: x => x,
  }
})
lapse |> decoCrostab |> says['lapse']
result |> decoCrostab |> says['result']
