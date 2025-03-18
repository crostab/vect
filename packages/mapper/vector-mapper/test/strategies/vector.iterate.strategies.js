import { strategies } from '@valjoux/strategies'
import { SimpleVectorCollection } from '@foba/foo'
import { makeEmbedded } from '@foba/util'
import { decoCrostab, says } from '@spare/logger'
import { iterate } from '../../src/iterate.js'
import { mapper as mapperObject } from '@vect/object-mapper'

const ShortVectors = SimpleVectorCollection({ h: 15 })
const LongVectors = SimpleVectorCollection({ h: 128 })
const CombinedVectors = mapperObject({ ...ShortVectors, ...LongVectors }, vec => [vec, vec.length])

export class VectorIterateStrategies {
  static test () {
    const { lapse, result } = strategies({
      repeat: 1E+6,
      candidates: CombinedVectors,
      methods: {
        stable: ar => ar.length,
        native: ar => {
          let a
          ar.forEach(x => a = typeof x === 'string' ? x.length : x)
          return a
        },
        iterate: (ar, l) => {
          let a
          iterate(ar, x => a = (typeof x === 'string' ? x.length : x), l)
          return a
        },
        forloop: ar => {
          let l = ar.length, a
          for (let i = 0, x; i < l; i++)
            a = typeof (x = ar[i]) === 'string' ? x.length : x
          return a
        },
        forOf: ar => {
          let a
          for (let x of ar) a = (typeof x === 'string' ? x.length : x)
          return a
        }
      }
    })
    lapse |> decoCrostab |> says.lapse
    result |> decoCrostab |> says.result
  }
}

VectorIterateStrategies.test()
