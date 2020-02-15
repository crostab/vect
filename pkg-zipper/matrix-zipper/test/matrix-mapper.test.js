import { zipper } from '../src/zipper'
import { mutazip } from '../src/mutazip'
import { logger } from '@spare/logger'
import { decoLog } from '@spare/deco'

class MapVectorTest {
  static test () {
    const ma = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]
    'zipper' |> logger
    zipper(ma, x => x * 2) |> decoLog
    ma |> decoLog
    'mutazip' |> logger
    mutazip(ma, x => x * 2) |> decoLog
    ma |> decoLog
  }
}

MapVectorTest.test()
