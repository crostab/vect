import { NumberMatrixCollection }        from '@foba/matrix'
import { decoCrostab, decoMatrix, says } from '@spare/logger'
import { strategies }                    from '@valjoux/strategies'
import { mapper as mapperColumns }       from '@vect/columns-mapper/src/mapper'
import { Stat as StatVector }            from '@vect/vector-stat/src/stat'
import { Stat }                          from '../src/stat'

const sumOnVector = StatVector((a, b) => a + b)
NumberMatrixCollection.zigZagMatrix(4) |> decoMatrix |> says['zigZagMatrix']
const { lapse, result } = strategies({
  repeat: 5E+5,
  candidates: {
    identityMatrix: [NumberMatrixCollection.identityMatrix(12)],
    upperPascal: [NumberMatrixCollection.upperPascalMatrix(7)],
    lowerPascal: [NumberMatrixCollection.lowerPascalMatrix(8)],
    zigZagMatrix: [NumberMatrixCollection.zigZagMatrix(4)],
  },
  methods: {
    mapper: mx => mapperColumns(mx, vec => sumOnVector(vec)),
    stat: Stat((a, b) => a + b),
    bench: x => x,
  }
})
lapse |> decoCrostab |> says['lapse']
result |> decoCrostab |> says['result']
