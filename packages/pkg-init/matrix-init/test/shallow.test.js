import { SimpleMatrixCollection } from '@foba/foo'
import { delogger }               from '@spare/deco'
import { decoCrostab, says }      from '@spare/logger'
import { strategies }             from '@valjoux/strategies'
import { mapper as mapperMatrix } from '@vect/matrix-mapper'
import { height, width }          from '@vect/matrix-index'
import { mapper as mapperObject } from '@vect/object-mapper'
import { mapper }                 from '@vect/vector-mapper'

const matrices = mapperObject(
  SimpleMatrixCollection({ h: 256, w: 8 }),
  mx => [mx, height(mx), width(mx)])

const f = x => x
matrices |> delogger
const { lapse, result } = strategies({
  repeat: 1E+6,
  candidates: matrices,
  methods: {
    bench: mx => mx,
    dev: mx => mx.map(r => r.slice()),
    edge: (mx, h) => mapper(mx, r => r.slice(), h),
    fut: (mx, h, w) => mapperMatrix(mx, f, h, w)
  }
})
lapse |> decoCrostab |> says.lapse
result |> decoCrostab |> says.result
