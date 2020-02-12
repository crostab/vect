import { logger } from '@spare/logger'
import { MatricesOrNot } from '@vect/foobar'
import { transpose } from '../src/transpose'
import { decoLog } from '@spare/deco'

class MapVectorTest {
  static test () {
    for (let [k, v] of Object.entries(MatricesOrNot)) {
      k |> logger
      v |> transpose |> decoLog
    }
  }
}

MapVectorTest.test()
