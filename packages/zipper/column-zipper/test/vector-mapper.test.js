import { delogger } from '@spare/deco'
import { logger }   from '@spare/logger'
import { mutazip }  from '../src/mutazip.js'
import { zipper }   from '../src/zipper.js'

class MapVectorTest {
  static test() {
    const arr = [ 1, 2, 3, 4, 5 ]
    zipper(arr, x => x * 2, 4) |> delogger
    arr |> logger
    mutazip(arr, x => x * 2, 3) |> delogger
    arr |> logger
  }
}

MapVectorTest.test()
