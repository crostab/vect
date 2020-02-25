import { mapper } from '../src/mapper'
import { logger } from '@spare/logger'
import { deco, decoLog } from '@spare/deco'
import { mutate } from '../src/mutate'
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
      paramsList: Ob.mapValues(SimpleMatrices, mx => [mx, x => x]),
      funcList: {
        stable: (mx, fn) => mx.map(fn),
        dev: (mx, fn) => transpose(mx).map(fn),
        edge: mapper,
      }
    })
    'lapse' |> console.log
    lapse |> CrosTabX.brief |> console.log
    '' |> console.log
    'result' |> console.log
    result |> CrosTabX.brief |> console.log
    for (let [k, v] of Object.entries(SimpleMatrices)) {
      k |> logger
      decoLog(mapper(v, x => x))
    }
  }

  static testMutate () {
    for (let [k, v] of Object.entries(SimpleMatrices)) {
      k |> logger
      decoLog(mutate(v, 2, x => x * 2))
    }
  }
}

ColumnsMapperTest.testMapper()

// ColumnsMapperTest.testMutate()
