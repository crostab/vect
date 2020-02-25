import { decoCrostab, says } from '@spare/logger'
import { Chrono } from 'elprimero'
import { mapper } from '@vect/vector-mapper'
import { zipper } from '@vect/vector-zipper'

const configs = [
  { z: 1, mode: 2 },
  { z: 2, mode: 1 },
  { z: 3, mode: 0 }
]

const positions = [1, 2, 3]
const modes = [2, 1, 0]
const { lapse, result } = Chrono.strategies({
  repeat: 2E+6,
  paramsList: {
    simple: [configs],
    misc: [positions, modes],
  },
  funcList: {
    bench: x => x,
    dev: (configs, modes) => {if (!modes) return mapper(configs, ({ z, mode }) => z + mode)},
    edge: (positions, modes) => {if (modes) return zipper(positions, modes, (p, m) => p + m)}
  }
})
lapse |> decoCrostab |> says.lapse
result |> decoCrostab |> says.result
