import { makeEmbedded, simpleVectors } from '@foba/foo'
import { decoCrostab }                 from '@spare/logger'
import { strategies }                  from '@valjoux/strategies'

const SimpleVectors = simpleVectors({ h: 32 })
const { lapse, result } = strategies({
  repeat: 1E+5,
  candidates: SimpleVectors |> makeEmbedded,
  methods: {
    stable: x => x,
    dev: ar => ar.map(x => x),
    edge: ar => {
      const ve = []
      for (let k in ar) ve[k] = ar[k]
      return ve
    },
  }
})
'lapse' |> console.log
lapse |> decoCrostab |> console.log
'' |> console.log
'result' |> console.log
result |> decoCrostab |> console.log
