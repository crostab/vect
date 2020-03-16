import { zipper } from '../src/zipper'
import { logger } from '@spare/logger'
import { deco, delogger } from '@spare/deco'
import { mutazip } from '../src/mutazip'
import { makeEmbedded, SimpleMatrices } from '@foba/foo'
import { Chrono } from 'elprimero'
import { CrosTabX } from 'xbrief'
import { transpose } from '@vect/matrix'
import { Ob } from 'veho'

class ColumnsMapperTest {
  static testMapper () {
    SimpleMatrices |> deco |> logger
    const { lapse, result } = Chrono.strategies({
      repeat: 1E+6,
      paramsList: Ob.mapValues(SimpleMatrices, ma => [ma, x => x]),
      funcList: {
        stable: (ma, fn) => ma.map(fn),
        dev: (ma, fn) => transpose(ma).map(fn),
        edge: zipper,
      }
    })
    'lapse' |> console.log
    lapse |> CrosTabX.brief |> console.log
    '' |> console.log
    'result' |> console.log
    result |> CrosTabX.brief |> console.log
    for (let [k, v] of Object.entries(SimpleMatrices)) {
      k |> logger
      delogger(zipper(v, x => x))
    }
  }

  static testMutate () {
    for (let [k, v] of Object.entries(SimpleMatrices)) {
      k |> logger
      delogger(mutazip(v, 2, x => x * 2))
    }
  }
}

ColumnsMapperTest.testMapper()

// ColumnsMapperTest.testMutate()
