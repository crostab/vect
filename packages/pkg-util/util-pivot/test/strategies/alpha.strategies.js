import { decoCrostab, says } from '@spare/logger'
import { strategies } from '@valjoux/strategies'

const { lapse, result } = strategies({
  repeat: 2E+6,
  candidates: {
    simple: [[0, 1, 2, 3, 4]],
    misc: [[4, 3, 2, 1, 0]],
  },
  methods: {
    bench: x => x,
    dev: ve => ve[0] = 1,
    edge: ve => (ve[4] = 1, ve = ve),
  }
})
lapse |> decoCrostab |> says.lapse
result |> decoCrostab |> says.result
