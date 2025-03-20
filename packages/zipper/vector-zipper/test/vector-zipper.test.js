import { delogger } from '@spare/deco'
import { logger }   from '@spare/logger'
import { mutazip }  from '../src/mutazip.js'
import { zipper }   from '../src/zipper.js'

class VectorZipperTest {
  static test() {
    const va = [ 1, 2, 3, 4, 5 ]
    const vb = [ 1, 1, 1, 1, 1 ]
    zipper(va, vb, (a, b) => a + b, 6) |> delogger
    va |> logger
    mutazip(va, vb, (a, b) => a + b, 6) |> delogger
    va |> logger
  }
}

VectorZipperTest.test()
