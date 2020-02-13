import { CrosXMatricesRobust, makeEmbedded } from '@foba/foo'
import { Chrono } from 'elprimero'
import { isMatrix } from '../src/isMatrix'
import { CrosTabX, deco } from 'xbrief'
import { logger } from '@spare/logger'

export const isMatrixTest = () => {
  const { lapse, result } = Chrono.strategies({
    repeat: 1E+6,
    paramsList: CrosXMatricesRobust |> makeEmbedded,
    funcList: {
      bench: x => !!x,
      isMatrix,
      isMatrixSimple: mx => Array.isArray(mx && mx[0]),
      isMatrixLoose: mx => mx && mx.length && (mx = mx[0]) && mx.length,
    }
  })
  CrosXMatricesRobust |> deco |> logger
  'lapse' |> console.log
  lapse |> CrosTabX.brief |> console.log
  '' |> console.log
  'result' |> console.log
  result |> CrosTabX.brief |> console.log
}

isMatrixTest()
