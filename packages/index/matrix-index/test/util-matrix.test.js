import { logger }           from '@spare/logger'
import { xr }               from '@spare/xr'
import { MatricesOrNotEmb } from '@vect/foobar'
import { size }             from '../src/size.js'

export class SizeTest {
  static test () {
    const candidates = MatricesOrNotEmb
    for (let [k, candidate] of Object.entries(candidates)) {
       logger(xr(k, size(candidate)))
    }
  }
}

SizeTest.test()
