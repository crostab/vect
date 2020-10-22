import { VectorCollection }  from '@foba/vector-number'
import { decoCrostab, says } from '@spare/logger'
import { strategies }        from '@valjoux/strategies'
import { iterate }           from '@vect/vector-mapper'
import { Indicator }         from '../src/Indicator'
import { Piler }             from '../src/Piler'

const { lapse, result } = strategies({
  showParams: false,
  repeat: 2E+5,
  candidates: {
    range: [VectorCollection.fibonacci(5), 5],
    nonSquares: [VectorCollection.nonSquares(12), 12],
    fibonacci: [VectorCollection.fibonacci(16), 16],
    range1: [VectorCollection.range(128), 128],
    range2: [VectorCollection.range(256), 256],
    range3: [VectorCollection.range(512), 512],
  },
  methods: {
    bench: x => x.forEach(x => x),
    reduce: vec => vec.reduce((p, n) => p + n, 0),
    sumByPiler: Piler((p, n) => p + n),
    iter: (vec, l) => {
      let p = 0
      iterate(vec, x => p += x, l)
      return p
    },
    sumByIndicator: Indicator({
      init: () => ({ sum: 0 }),
      pile(x) { this.sum += x },
      pick: o => o.sum
    }),
  }
})
lapse |> decoCrostab |> says.lapse
result |> decoCrostab |> says.result
