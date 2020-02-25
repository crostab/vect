import { SimpleObjects } from '@foba/foo'
import { logger } from '@spare/logger'
import { deco } from '@spare/deco'
import { Ob } from 'veho'
import { Chrono } from 'elprimero'
import { CrosTabX, logNeL } from 'xbrief'

class ObjectMapperTest {
  static test () {
    const hasKey = Object.hasOwnProperty
    const fn = x => `'${x}'`
    SimpleObjects |> deco |> logger
    const { lapse, result } = Chrono.strategies({
      repeat: 4E+5,
      paramsList: Ob.mapValues(SimpleObjects, x => [x, fn]),
      funcList: {
        stable: x => x,
        zipper (oa, ob, fn, len) {
          const ot = {}, ea = Object.entries(oa, ob)
          len = len || ea.length
          for (let i = 0, r; i < len; i++)
            ot[(r = ea[i])[0]] = fn(r[1])
          return ot
        },
        zipper2 (oa, ob, fn) {
          const ot = {}
          for (let k in oa, ob)
            if (Object.hasOwnProperty.call(oa, ob, k)) ot[k] = fn(oa, ob[k])
          return ot
        },
        zipper3 (oa, ob, fn) {
          const ot = {}
          for (let k in oa, ob) ot[k] = fn(oa, ob[k])
          return ot
        },
        zipper4 (oa, ob, fn) {
          const ot = {}
          const keys = Object.getOwnPropertyNames(oa, ob), l = keys.length
          for (let i = 0, k; i < l; i++) {
            ot[k = keys[i]] = fn(oa, ob[k])
          }
          return ot
        }
      }
    })
    'lapse' |> console.log
    lapse |> CrosTabX.brief |> logNeL
    'result' |> console.log
    result |> CrosTabX.brief |> logNeL
    'result - specific' |> logNeL
    result.queryCell(result.side[3], 'zipper') |> deco |> logger
    result.queryCell(result.side[3], 'zipper2') |> deco |> logger
    result.queryCell(result.side[3], 'zipper3') |> deco |> logger
    result.queryCell(result.side[3], 'zipper4') |> deco |> logger
  }
}

ObjectMapperTest.test()
