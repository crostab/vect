import { Chrono } from 'elprimero'
import { decoCrostab, says } from '@spare/logger'
import { Foba } from '@foba/vector-number'
import { Max, maxBy } from '../src/Max'
import { iterate } from '@vect/vector-mapper'
import { max as maxN } from '@aryth/comparer'
import { Indicator } from './arch/max.beta'

const a = Foba.fibonacci(12)
const maxAccum = function (x) { this.max = maxN(x, this.max) }
const indicator = Indicator(
  function (x) { this.max = maxN(x, this.max) },
  ({ max }) => max,
  ([n]) => ({ max: n })
)
const maxInstance = Max(x => x)
const maxInstance2 = Max()
const { lapse, result } = Chrono.strategies({
  repeat: 1E+6,
  paramsList: {
    nonSquares: [Foba.nonSquares(12), 12],
    range: [Foba.range(8), 8],
    fibonacci: [Foba.fibonacci(16), 16],
  },
  funcList: {
    bench: x => x,
    mathMax: vec => Math.max.apply(null, vec),
    reduce: vec => vec.reduce((p, n) => p > n ? p : n, vec[0]),
    maxBy: vec => maxBy(vec, x => x),
    Max: maxInstance,
    Max2: maxInstance2,
    iterate: (vec, l) => {
      const o = { max: vec[0] }
      iterate.call(o, vec, maxAccum, l)
      return o.max
    },
    indicator2: (vec, l) => indicator(vec, l, { max: vec[0] })
  }
})
lapse |> decoCrostab |> says.lapse
result |> decoCrostab |> says.result
