import { Chrono } from 'elprimero'
import { mapper } from '../..'
import { simpleVectors } from '@foba/foo'
import { makeEmbedded } from '@foba/util'
import { CrosTabX } from 'xbrief'

const ShortVectors = simpleVectors({ h: 15 })
const LongVectors = simpleVectors({ h: 256 })
const CombinedVectors = { ...ShortVectors, ...LongVectors }

export class VectorMapperStrategies {
  static test () {
    const { lapse, result } = Chrono.strategies({
      repeat: 1E+5,
      paramsList: CombinedVectors |> makeEmbedded,
      funcList: {
        stable: x => x,
        native: ar => ar.map(x => x),
        mapper: ar => mapper(ar, x => x),
      }
    })
    'lapse' |> console.log
    lapse |> CrosTabX.brief |> console.log
    '' |> console.log
    'result' |> console.log
    result |> CrosTabX.brief |> console.log
  }
}

VectorMapperStrategies.test()
