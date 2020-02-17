import { Chrono } from 'elprimero'
import { CrosTabX } from 'xbrief'
import { makeEmbedded, simpleVectors } from '@foba/foo'

const SimpleVectors = simpleVectors({ h: 32 })
const { lapse, result } = Chrono.strategies({
  repeat: 1E+5,
  paramsList: SimpleVectors |> makeEmbedded,
  funcList: {
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
lapse |> CrosTabX.brief |> console.log
'' |> console.log
'result' |> console.log
result |> CrosTabX.brief |> console.log
