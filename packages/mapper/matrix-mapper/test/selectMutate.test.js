import { SimpleMatrixCollection }           from '@foba/foo'
import { delogger }                 from '@spare/deco'
import { decoMatrix, logger, says } from '@spare/logger'
import { selectMutate }             from '../src/mutate.js'

function test () {
  for (const [key, mx] of Object.entries(SimpleMatrixCollection)) {
    key |> logger
    selectMutate(mx, [1, 3], (x, i, j) => `(${i},${j}) ${x}`) |> decoMatrix |> says['selectMutate']
    mx |> decoMatrix |> says['original']
    '' |> delogger
  }
}

test()
