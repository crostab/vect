import { logger } from '@spare/logger'
import { delogger } from '@spare/deco'
import { SimpleMatrices } from '@foba/foo'
import { mapper } from '../src/mapper'

class MatrixMapperTest {
  static test () {
    for (const [key, mx] of Object.entries(SimpleMatrices)) {
      key |> logger
      'mapper' |> logger
      mapper(mx, (x, i, j) => `(${i},${j}) ${x}`) |> delogger
      mx |> delogger
      'mutate' |> logger
      mapper(mx, x => x * 2) |> delogger
      mx |> delogger
    }

  }
}

MatrixMapperTest.test()
