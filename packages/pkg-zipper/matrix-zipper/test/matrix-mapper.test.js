import { zipper } from '../src/zipper'
import { mutazip } from '../src/mutazip'
import { decoMatrix, logger, says } from '@spare/logger'
import { Duozipper } from '../src/seriesZipper'

class MapVectorTest {
  static test () {
    const ma = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]
    const mb = [
      [1, 2, 3],
      [0, 0, 0],
      [0, 0, 0]
    ]
    const mc = [
      [0, 0, 0],
      [0, 0, 0],
      [7, 8, 9]
    ]
    Duozipper((a, b) => a + b)(ma, mb) |> decoMatrix |> says['after zipper returns']
    ma |> decoMatrix |> says['ma becomes']
    mutazip(ma, mc, (a, b) => a + b) |> decoMatrix |> says['after mutazip returns']
    ma |> decoMatrix |> says['ma becomes']
  }
}

MapVectorTest.test()
