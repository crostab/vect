import { makeEmbedded, SimpleMatrixCollection }                from '@foba/foo'
import { deco }                            from '@spare/deco'
import { decoCrostab, decoMatrix, logger } from '@spare/logger'
import { size }                            from '@vect/matrix-size'
import { mapKeys, mapper as mapValue }                 from '@vect/object-mapper'
import { mapper as mapperIter, mapper as mapperEmbed } from './mapperIter'
import {strategies} from '@valjoux/strategies'
const SmallMatrices = mapKeys(SimpleMatrixCollection({ h: 6, w: 4 }), key => key + '_num')
const LargeMatrices = SimpleMatrixCollection({ h: 64, w: 16 })
const CombinedMatrices = { ...SmallMatrices, ...LargeMatrices }

export class FlatVsMapperStrategies {
  static test () {
    mapValue(CombinedMatrices, mx => size(mx)) |> deco|> logger
    // const fn = x => `'${x}'`
    const fn = x => ++x
    const { lapse, result } = strategies({
      repeat: 2E+5,
      candidates: CombinedMatrices|> makeEmbedded,
      methods: {
        bench: mx => mx.map(r => r),
        native: mx => mx.map(r => Array.isArray(r) ? r.map(fn) : r),
        mapperEmbed: mx => mapperEmbed(mx, fn),
        mapperIter: mx => mapperIter(mx, fn),
        // flatMapper: m => m.flat(1).map(fn),
      }
    })
    'lapse' |> console.log
    lapse |> decoCrostab |> console.log
    '' |> console.log
    'result' |> console.log
    result.queryCell('oneRow', 'mapper') |> decoMatrix |> logger
    result |> decoCrostab |> console.log
  }
}

FlatVsMapperStrategies.test()
