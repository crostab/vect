import { delogger }            from '@spare/deco'
import { decoCrostab, logger } from '@spare/logger'
import { strategies }          from '@valjoux/strategies'
import { unwind }              from '@vect/entries-unwind'
import { Max }                 from '../index'

const entries = [
  [0, 'A'],
  [1, 'ABC'],
  [2, 'AB'],
  [3, 'ABCDE'],
  [4, 'A'],
]

let ko, vo
const { lapse, result } = strategies({
  repeat: 2E+6,
  candidates: {
    simple: [entries],
  },
  methods: {
    bench: entries => entries.reduce((acc, ent) => (acc[0] = ent[0], acc[1] = ent[1].length, acc), [0, '']),
    classic: entries => {
      const [k, v] = unwind(entries)
      return [
        Math.max(...k),
        Math.max(...v.map(x => x.length))
      ]
    },
    stable: Max(x => x, x => x.length),
    edge: entries => entries.reduce((acc, ent) => {
      if ((ko = ent[0]) > acc[0]) acc[0] = ko
      if ((vo = ent[1].length) > acc[1]) acc[1] = vo
      return acc
    }, [0, 0]),
    dev: entries => entries.reduce((acc, ent) => {
      let k, v
      if ((k = ent[0]) > acc[0]) acc[0] = k
      if ((v = ent[1].length) > acc[1]) acc[1] = v
      return acc
    }, [0, 0]),
  }
})
'lapse' |> console.log
lapse |> decoCrostab |> console.log
'' |> console.log
'result' |> console.log
result |> decoCrostab |> console.log

'original' |> logger
entries |> delogger
