import { SimpleObjectCollection }      from '@foba/foo'
import { deco }                        from '@spare/deco'
import { decoCrostab, logger, logNeL } from '@spare/logger'
import { strategies }                  from '@valjoux/strategies'
import { mapper }                      from '@vect/object-mapper'

class ObjectMapperTest {
  static test() {
    const hasKey = Object.hasOwnProperty
    const fn = x => `'${x}'`
    SimpleObjectCollection |> deco |> logger
    const { lapse, result } = strategies({
      repeat: 4E+5,
      candidates: mapper(SimpleObjectCollection, x => [x, fn]),
      methods: {
        stable: x => x,
        mapper(o, fn, len) {
          const ob = {}, ents = Object.entries(o)
          len = len || ents.length
          for (let i = 0, r; i < len; i++)
            ob[(r = ents[i])[0]] = fn(r[1])
          return ob
        },
        mapper2(o, fn) {
          const ob = {}
          for (let k in o)
            if (Object.hasOwnProperty.call(o, k)) ob[k] = fn(o[k])
          return ob
        },
        mapper3(o, fn) {
          const ob = {}
          for (let k in o) ob[k] = fn(o[k])
          return ob
        },
        mapper4(o, fn) {
          const ob = {}
          const keys = Object.getOwnPropertyNames(o), l = keys.length
          for (let i = 0, k; i < l; i++) {
            ob[k = keys[i]] = fn(o[k])
          }
          return ob
        }
      }
    })
    'lapse' |> console.log
    lapse |> decoCrostab |> logNeL
    'result' |> console.log
    result |> decoCrostab |> logNeL
    'result - specific' |> logNeL
    result.cell(result.side[3], 'mapper') |> deco |> logger
    result.cell(result.side[3], 'mapper2') |> deco |> logger
    result.cell(result.side[3], 'mapper3') |> deco |> logger
    result.cell(result.side[3], 'mapper4') |> deco |> logger
  }
}

ObjectMapperTest.test()
