import { mapper } from '../src/mapper'
import { logger } from '@spare/logger'
import { decoLog } from '@spare/deco'
import { mutate } from '../src/mutate'

class MapVectorTest {
  static test () {
    const arr = [1, 2, 3, 4, 5]
    mapper(arr, x => x * 2, 4) |> decoLog
    arr |> logger
    mutate(arr, x => x * 2, 3) |> decoLog
    arr |> logger
  }
}

MapVectorTest.test()
