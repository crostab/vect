import { strategies } from '@valjoux/strategies'
import { mapper } from '../...js'
import { SimpleVectorCollection } from '@foba/foo'
import { makeEmbedded } from '@foba/util'
import { decoCrostab, says } from '@spare/logger'

const ShortVectors = SimpleVectorCollection({ h: 15 })
const LongVectors = SimpleVectorCollection({ h: 256 })
const CombinedVectors = { ...ShortVectors, ...LongVectors }

export class VectorMapperStrategies {
  static test () {
    const { lapse, result } = strategies({
      repeat: 1E+5,
      candidates: CombinedVectors |> makeEmbedded,
      methods: {
        stable: ar => ar.length,
        native: ar => ar.map(x => x),
        mapper: ar => mapper(ar, x => x),
      }
    })
    lapse |> decoCrostab |> says.lapse
    result |> decoCrostab |> says.result
  }
}

VectorMapperStrategies.test()
