import { makeEmbedded }       from '@foba/util'
import { decoCrostab }        from '@spare/logger'
import { says }               from '@spare/xr'
import { strategies }         from '@valjoux/strategies'
import { gather }             from '@vect/vector-init'
import { indexed, indexedTo } from '../src/indexed'
import { mapper }             from '../src/mapper'

const { lapse, result } = strategies({
  repeat: 1E+5,
  candidates: {
    alpha: [ [ 0, 2, 3, 7 ], [ 7, 9, 10, 10 ], [ 11, 23, 28, 31 ] ],
    beta: [ [ 1, 3, 3, 4 ], [ 6, 10, 11, 13 ], [ 13, 13, 16, 18 ] ],
  } |> makeEmbedded,
  methods: {
    arc: mx => mapper(mx, Stat.max),
    dev: mx => indexedTo(mx, Stat.max)|> gather,
    edge: mx => indexed(mx, (_, j) => j !== 2, Stat.max)|> gather,
  }
})
lapse |> decoCrostab |> says.lapse
'' |> console.log
result |> decoCrostab |> says.result



