import { decoCrostab, says } from '@spare/logger'
import { strategies } from '@valjoux/strategies'
import { range }      from '@vect/vector-init'
import { acquire }    from '../src/acquire'

const candidates = {
  range032: [range(0, 32)],
  range064: [range(0, 64)],
  range128: [range(0, 128)],
  range256: [range(0, 256)],
  range512: [range(0, 512)]
}
const { lapse, result } = strategies({
  repeat: 1E+5,
  candidates,
  methods: {
    bench: x => x,
    push: (x) => {
      const ar = []
      return (ar.push(...x), ar)
    },
    acquire: x => acquire([], x),
    dilate: (x) => [].concat(x)
  },
  showParams: false
})
lapse |> decoCrostab |> says['lapse']
result |> decoCrostab |> says['result']


