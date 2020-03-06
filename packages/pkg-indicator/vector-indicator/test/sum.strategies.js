import { strategies } from '@valjoux/strategies'
import { decoCrostab, says } from '@spare/logger'
import { Foba } from '@foba/vector-number'
import { iterate } from '@vect/vector-mapper'
import { Indicator } from '../src/Indicator'
import { Piler } from '../src/Piler'

const { lapse, result } = strategies({
  showParams: false,
  repeat: 2E+5,
  candidates: {
    range: [Foba.fibonacci(5), 5],
    nonSquares: [Foba.nonSquares(12), 12],
    fibonacci: [Foba.fibonacci(16), 16],
    range1: [Foba.range(128), 128],
    range2: [Foba.range(256), 256],
    range3: [Foba.range(512), 512],
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
      pile: function (x) {this.sum += x},
      pick: o => o.sum
    }),
  }
})
lapse |> decoCrostab |> says.lapse
result |> decoCrostab |> says.result
