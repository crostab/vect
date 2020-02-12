import { mapper } from '../src/mapper'
import { mutate } from '../src/mutate'
import { logger } from '@spare/logger'
import { decoLog } from '@spare/deco'

class MapVectorTest {
  static test () {
    const mx = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]
    'mapper' |> logger
    mapper(mx, x => x * 2) |> decoLog
    mx |> decoLog
    'mutate' |> logger
    mutate(mx, x => x * 2) |> decoLog
    mx |> decoLog
  }
}

MapVectorTest.test()
