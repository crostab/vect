import { CrosXMatricesRobust, makeEmbedded } from '@foba/foo'
import { coins } from '../src/coins'
import { Chrono } from 'elprimero'
import { CrosTabX } from 'xbrief'
import { isMatrix } from '../src/isMatrix'

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
