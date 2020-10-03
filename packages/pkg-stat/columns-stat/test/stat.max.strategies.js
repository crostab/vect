import { max }                                   from '@aryth/comparer'
import { NumberMatrixCollection }                from '@foba/matrix'
import { decoCrostab, decoMatrix, logger, says } from '@spare/logger'
import { strategies }                            from '@valjoux/strategies'
import { mapper as mapperColumns }               from '@vect/columns-mapper/src/mapper'
import { Stat as StatVector }                    from '@vect/vector-stat/src/stat'
import { Stat }                                  from '../src/stat'

const maxOnVector = StatVector(max)
NumberMatrixCollection.zigZagMatrix(10) |> decoMatrix |> logger
const mathMaxOnVector = (vec) => Math.max.apply(null, vec)
const { lapse, result } = strategies({
  repeat: 5E+5,
  candidates: {
    identityMatrix: [NumberMatrixCollection.identityMatrix(12)],
    upperPascal: [NumberMatrixCollection.upperPascalMatrix(7)],
    lowerPascal: [NumberMatrixCollection.lowerPascalMatrix(8)],
    zigZagMatrix: [NumberMatrixCollection.zigZagMatrix(4)],
    // range3: [VectorCollection.range(512), 512],
  },
  methods: {
    mathMax: mx => mapperColumns(mx, mathMaxOnVector),
    mapper: mx => mapperColumns(mx, (vec) => maxOnVector(vec)),
    stat: Stat(max),
    bench: x => x,
  }
})
lapse |> decoCrostab |> says['lapse']
result |> decoCrostab |> says['result']
