import { Chrono } from 'elprimero'
import { CrosTabX } from 'xbrief'

const { lapse, result } = Chrono.strategies({
  repeat: 1E+5,
  paramsList: {
    l0: [0],
    l1: [1],
    l8: [8],
    l127: [127],
    l512: [512],
  },
  funcList: {
    stable: l => new Array(l),
    dev: l => new Array(l).fill(undefined),
    edge: l => Array.apply(null, Array(l)),
    fut: l => Array.apply(null, { length: l }),
  }
})
'lapse' |> console.log
lapse |> CrosTabX.brief |> console.log
'' |> console.log
'result' |> console.log
result |> CrosTabX.brief |> console.log
