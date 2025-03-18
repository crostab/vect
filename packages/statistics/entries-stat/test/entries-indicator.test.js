import { makeEmbedded }        from '@foba/util'
import { VectorCollection }    from '@foba/vector-number'
import { decoCrostab }         from '@spare/logger'
import { strategies }          from '@valjoux/strategies'
import { Stat as ColumnsStat } from '@vect/columns-stat/src/stat'
import { wind }                from '@vect/entries-init'
import { Stat }                from '../src/stat.js'

const { lapse, result } = strategies({
  repeat: 2E+6,
  candidates: {
    range: wind(VectorCollection.fibonacci(5), VectorCollection.fibonacci(5)),
    nonSquares: wind(VectorCollection.nonSquares(12), VectorCollection.nonSquares(12)),
    fibonacci: wind(VectorCollection.fibonacci(16), VectorCollection.fibonacci(16)),
    // range1: wind(VectorCollection.range(128), VectorCollection.range(128)),
    // range2: wind(VectorCollection.range(256), VectorCollection.range(256)),
    // range3: wind(VectorCollection.range(512), VectorCollection.range(512)),
  } |> makeEmbedded,
  methods: {
    bench: entries => entries.reduce((acc, ent) => (acc[0] = ent[0], acc[1] = ent[1].length, acc), [0, '']),
    stat: Stat({ key: Math.max, value: { init: () => 0, acc: Math.max } }),
    statColumns: ColumnsStat(Math.max)
  }
})
'lapse' |> console.log
lapse |> decoCrostab |> console.log
'' |> console.log
'result' |> console.log
result |> decoCrostab |> console.log
