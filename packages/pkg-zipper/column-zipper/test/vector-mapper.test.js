import { zipper } from '../src/zipper'
import { logger } from '@spare/logger'
import { decoLog } from '@spare/deco'
import { mutazip } from '../src/mutazip'

class MapVectorTest {
  static test () {
    const arr = [1, 2, 3, 4, 5]
    zipper(arr, x => x * 2, 4) |> decoLog
    arr |> logger
    mutazip(arr, x => x * 2, 3) |> decoLog
    arr |> logger
  }
}

MapVectorTest.test()
