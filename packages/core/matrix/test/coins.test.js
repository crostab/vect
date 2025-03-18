import { CrosXMatricesRobust, makeEmbedded } from '@foba/foo'
import { decoCrostab }                       from '@spare/logger'
import { strategies }                        from '@valjoux/strategies'
import { coins }                             from '../src/coins.js'
import { isMatrix }                          from '../src/isMatrix.js'

export function CoinsTest () {
  const { lapse, result } = strategies({
    repeat: 3E+6,
    candidates: CrosXMatricesRobust |> makeEmbedded,
    methods: {
      stable: x => x?.length,
      coins,
      dev: mx => Array.isArray(mx) && Array.isArray(mx[0]) ? mx[0].map((_, i) => i) : [],
      edge: mx => isMatrix(mx) ? Object.keys(mx[0]) : [],
    }
  })
  'lapse' |> console.log
  lapse |> decoCrostab |> console.log
  '' |> console.log
  'result' |> console.log
  result |> decoCrostab |> console.log

}

CoinsTest()
