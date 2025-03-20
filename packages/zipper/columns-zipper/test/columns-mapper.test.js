import { SimpleMatrixCollection } from '@foba/foo'
import { deco, delogger }         from '@spare/deco'
import { decoCrostab, logger }    from '@spare/logger'
import { strategies }             from '@valjoux/strategies'
import { transpose }              from '@vect/matrix'
import { mapper }                 from '@vect/object-mapper'
import { zipper }                 from '../src/zipper.js'

class ColumnsMapperTest {
  static testMapper() {
    SimpleMatrixCollection |> deco |> logger
    const { lapse, result } = strategies({
      repeat: 1E+6,
      candidates: mapper(SimpleMatrixCollection, ma => [ ma, x => x ]),
      methods: {
        stable: (ma, fn) => ma.map(fn),
        dev: (ma, fn) => transpose(ma).map(fn),
        edge: zipper,
      },
    })
    'lapse' |> console.log
    lapse |> decoCrostab |> console.log
    '' |> console.log
    'result' |> console.log
    result |> decoCrostab |> console.log
    for (let [ k, v ] of Object.entries(SimpleMatrixCollection)) {
      k |> logger
      delogger(zipper(v, x => x))
    }
  }
}

ColumnsMapperTest.testMapper()

// ColumnsMapperTest.testMutate()
