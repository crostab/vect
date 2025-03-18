import { CrosXMatricesRobust, makeEmbedded } from '@foba/foo'
import { decoCrostab }                       from '@spare/logger'
import { strategies }                        from '@valjoux/strategies'
import { coins }                             from '../function/coins.js'
import { isMatrix }                          from '../function/isMatrix.js'

// CrosXMatricesRobust |> deco |> logger
//
// for (let [k, m] of Object.entries(CrosXMatricesRobust))
//   xr(k).coins(m |> coins) |> logger

export function CoinsTest() {
  const { lapse, result } = strategies({
    repeat: 3E+6,
    candidates: makeEmbedded(CrosXMatricesRobust),
    methods: {
      stable: x => x?.length,
      coins,
      dev: mx => Array.isArray(mx) && Array.isArray(mx[0]) ? mx[0].map((_, i) => i) : [],
      edge: mx => isMatrix(mx) ? Object.keys(mx[0]) : [],
    }
  })
  console.log('lapse')
  console.log(decoCrostab(lapse))
  console.log('')
  console.log('result')
  console.log(decoCrostab(result))
}

CoinsTest()
