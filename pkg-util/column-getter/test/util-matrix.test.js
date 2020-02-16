import { MatricesOrNotEmb } from '@vect/foobar'
import { logger, logNeL } from '@spare/logger'
import { size } from '../src/size'
import { xr } from '@spare/xr'

export class SizeTest {
  static test () {
    const candidates = MatricesOrNotEmb
    for (let [k, candidate] of Object.entries(candidates)) {
      xr(k, size(candidate)) |> logger
    }
  }
}

SizeTest.test()
