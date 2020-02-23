import { logger } from '@spare/logger'
import { deco } from '@spare/deco'
import { CrosXMatricesRobust, makeEmbedded } from '@foba/foo'
import { coins } from '../src/coins'
import { xr } from '@spare/xr'
import { Chrono } from 'elprimero'
import { CrosTabX } from 'xbrief'
import { isMatrix } from '../src/isMatrix'

// CrosXMatricesRobust |> deco |> logger
//
// for (let [k, m] of Object.entries(CrosXMatricesRobust))
//   xr(k).coins(m |> coins) |> logger

export function CoinsTest () {
  const { lapse, result } = Chrono.strategies({
    repeat: 3E+6,
    paramsList: CrosXMatricesRobust |> makeEmbedded,
    funcList: {
      stable: x => x && x.length,
      coins,
      dev: mx => Array.isArray(mx) && Array.isArray(mx[0]) ? mx[0].map((_, i) => i) : [],
      edge: mx => isMatrix(mx) ? Object.keys(mx[0]) : [],
    }
  })
  'lapse' |> console.log
  lapse |> CrosTabX.brief |> console.log
  '' |> console.log
  'result' |> console.log
  result |> CrosTabX.brief |> console.log

}

CoinsTest()
