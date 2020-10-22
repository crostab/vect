import { max }               from '@aryth/comparer'
import { VectorCollection }  from '@foba/vector-number'
import { decoCrostab, says } from '@spare/logger'
import { strategies }        from '@valjoux/strategies'
import { Stat }              from '../src/stat'


const { lapse, result } = strategies({
  repeat: 5E+5,
  candidates: {
    nonSquares: [VectorCollection.nonSquares(12), 12],
    fibonacci: [VectorCollection.fibonacci(16), 16],
    range1: [VectorCollection.range(128), 128],
    range2: [VectorCollection.range(256), 256],
    // range3: [VectorCollection.range(512), 512],
  },
  methods: {
    nativeMath: vec => Math.max.apply(null, vec),
    reduce: vec => vec.reduce((p, n) => p > n ? p : n, vec[0]),
    stat: Stat(max),
    bench: x => x,
  }
})
lapse |> decoCrostab |> says['lapse']
result |> decoCrostab |> says['result']
