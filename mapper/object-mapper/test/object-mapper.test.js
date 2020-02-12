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
        mapper (jso, fn, len) {
          const ob = {}, ents = Object.entries(jso)
          len = len || ents.length
          for (let i = 0, r; i < len; i++)
            ob[(r = ents[i])[0]] = fn(r[1])
          return ob
        },
        mapper2 (jso, fn) {
          const ob = {}
          for (let k in jso)
            if (Object.hasOwnProperty.call(jso, k)) ob[k] = fn(jso[k])
          return ob
        },
        mapper3 (jso, fn) {
          const ob = {}
          for (let k in jso) ob[k] = fn(jso[k])
          return ob
        },
        mapper4 (jso, fn) {
          const ob = {}
          const keys = Object.getOwnPropertyNames(jso), l = keys.length
          for (let i = 0, k; i < l; i++) {
            ob[k = keys[i]] = fn(jso[k])
          }
          return ob
        }
      }
    })
    'lapse' |> console.log
    lapse |> CrosTabX.brief |> logNeL
    'result' |> console.log
    result |> CrosTabX.brief |> logNeL
    'result - specific' |> logNeL
    result.queryCell(result.side[3], 'mapper') |> deco |> logger
    result.queryCell(result.side[3], 'mapper2') |> deco |> logger
    result.queryCell(result.side[3], 'mapper3') |> deco |> logger
    result.queryCell(result.side[3], 'mapper4') |> deco |> logger
  }
}

ObjectMapperTest.test()
