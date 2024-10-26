import { strategies } from '@valjoux/strategies'
import { decoCrostab, says } from '@spare/logger'
import { selectEntries } from '../src/selectEntries'
import { selectObject } from '../src/selectObject'
import { select }     from '../src/select'
import { column }     from '@vect/column-getter'
import { init, wind } from '@vect/object-init'
import { CrosTab } from '@analys/crostab'
import { delogger } from '@spare/deco'

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 2, 9],
  [0, 2, 3],
  [2, 5, 6],
  [3, 5, 9],
]
const { lapse, result } = strategies({
  repeat: 1E+6,
  candidates: {
    simple: [matrix, 1, 2],
    another: [matrix, 0, 2],
  },
  methods: {
    bench: (mx, k, v) => selectEntries(mx, k, v),
    dev: (mx, k, v) => selectObject(mx, k, v),
    wind: (mx, k, v) => wind(column(mx, k), column(mx, v)),
    edge: (mx, k, v) => init(select(mx, [k, v])),
  },
  showParams: false
})
lapse |> decoCrostab |> says['lapse']
result |> decoCrostab |> says['result']

CrosTab.from(result).cell('simple', 'dev') |> delogger
