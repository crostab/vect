import { logger }           from '@spare/logger'
import { xr }               from '@spare/xr'
import { MatricesOrNotEmb } from '@vect/foobar'
import { size }             from '../src/size'

export class SizeTest {
  static test () {
    const candidates = MatricesOrNotEmb
    for (let [k, candidate] of Object.entries(candidates)) {
      xr(k, size(candidate)) |> logger
    }
  }
}

SizeTest.test()
