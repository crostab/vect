import { decoCrostab, says } from '@spare/logger'
import { strategies } from '@valjoux/strategies'
import { acquire } from '../src/acquire'
import { candidates } from './candidates'

/** @function */
const dilate = Function.prototype.apply.bind(Array.prototype.push)

const { lapse, result } = strategies({
  repeat: 1E+6,
  candidates,
  methods: {
    bench: x => x,
    push: (x, y) => (x = x.slice(), x.push(...y), x),
    acquire: (x, y) => acquire(x.slice(), y),
    dilate: (x, y) => (x = x.slice(), dilate(x, y), x),
  },
  showParams: false
})
lapse |> decoCrostab |> says['lapse']
result |> decoCrostab |> says['result']


