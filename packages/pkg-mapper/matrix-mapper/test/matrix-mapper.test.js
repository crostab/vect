import { SimpleMatrices }           from '@foba/foo'
import { delogger }                 from '@spare/deco'
import { DecoMatrix, logger, says } from '@spare/logger'
import { mapper }                   from '../src/mapper'
import { mutate }                   from '../src/mutate'

const decoMatrix = DecoMatrix({ bracket: true })

class MatrixMapperTest {
  static test () {
    for (const [key, mx] of Object.entries(SimpleMatrices)) {
      key |> logger
      mapper(mx, (x, i, j) => `(${i},${j}) ${x}`) |> decoMatrix |> says['mapper']
      mutate(mx, x => x * 2) |> decoMatrix |> says['mutate']
      mx |> decoMatrix |> says['original']
      '' |> delogger
    }
  }
}

MatrixMapperTest.test()
