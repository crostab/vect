import { Chrono } from 'elprimero'
import { CrosTabX, logger, MatX } from 'xbrief'
import { makeEmbedded, simpleMatrices } from '@foba/foo'
import { mapper as mapperIter } from './mapperIter'
import { mutate } from '../../src/mutate'
import { mapper as mapperEmbed } from './mapperIter'
import { deco } from '@spare/deco'
import { mapKeys, mapper as mapValue } from '@vect/object-mapper'
import { size } from '@vect/matrix-size'

const SmallMatrices = mapKeys(simpleMatrices({ h: 6, w: 4 }), key => key + '_num')
const LargeMatrices = simpleMatrices({ h: 64, w: 16 })
const CombinedMatrices = { ...SmallMatrices, ...LargeMatrices }

export class FlatVsMapperStrategies {
  static test () {
    mapValue(CombinedMatrices, mx => size(mx)) |> deco|> logger
    // const fn = x => `'${x}'`
    const fn = x => ++x
    const { lapse, result } = Chrono.strategies({
      repeat: 2E+5,
      paramsList: CombinedMatrices|> makeEmbedded,
      funcList: {
        bench: mx => mx.map(r => r),
        native: mx => mx.map(r => Array.isArray(r) ? r.map(fn) : r),
        mapperEmbed: mx => mapperEmbed(mx, fn),
        mapperIter: mx => mapperIter(mx, fn),
        // flatMapper: m => m.flat(1).map(fn),
      }
    })
    'lapse' |> console.log
    lapse |> CrosTabX.brief |> console.log
    '' |> console.log
    'result' |> console.log
    result.queryCell('oneRow', 'mapper') |> MatX.xBrief |> logger
    result |> CrosTabX.brief |> console.log
  }
}

FlatVsMapperStrategies.test()
