import { mapper } from '../src/mapper'
import { logger } from '@spare/logger'
import { delogger } from '@spare/deco'
import { mutate } from '../src/mutate'

class MapVectorTest {
  static test () {
    const arr = [1, 2, 3, 4, 5]
    mapper(arr, x => x * 2, 4) |> delogger
    arr |> logger
    mutate(arr, x => x * 2, 3) |> delogger
    arr |> logger
  }
}

MapVectorTest.test()
