import { SimpleMatrixCollection }       from '@foba/foo'
import { deco, delogger }               from '@spare/deco'
import { decoCrostab, logger }          from '@spare/logger'
import { strategies }                   from '@valjoux/strategies'
import { transpose }                    from '@vect/matrix'
import { mapper as mapperObjectValues } from '@vect/object-mapper'
import { mapper }                       from '../src/mapper.js'

class ColumnsMapperTest {
  static testMapper() {
    SimpleMatrixCollection |> deco |> logger
    const { lapse, result } = strategies({
      repeat: 1E+6,
      candidates: mapperObjectValues(SimpleMatrixCollection, mx => [mx, x => x]),
      methods: {
        stable: (mx, fn) => mx.map(fn),
        dev: (mx, fn) => transpose(mx).map(fn),
        edge: mapper,
      }
    })
    'lapse' |> console.log
    lapse |> decoCrostab |> console.log
    '' |> console.log
    'result' |> console.log
    result |> decoCrostab |> console.log
    for (let [k, v] of Object.entries(SimpleMatrixCollection)) {
      k |> logger
      delogger(mapper(v, x => x))
    }
  }
}

ColumnsMapperTest.testMapper()

// ColumnsMapperTest.testMutate()
