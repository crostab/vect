import { CrosXMatricesRobust, makeEmbedded } from '@foba/foo'
import { deco }                              from '@spare/deco'
import { decoCrostab, logger }               from '@spare/logger'
import { strategies }                        from '@valjoux/strategies'
import { isMatrix }                          from '@vect/matrix'

export const isMatrixTest = () => {
  const { lapse, result } = strategies({
    repeat: 1E+6,
    candidates: CrosXMatricesRobust |> makeEmbedded,
    methods: {
      bench: x => !!x,
      isMatrix,
      isMatrixSimple: mx => Array.isArray(mx && mx[0]),
      isMatrixLoose: mx => mx && mx.length && (mx = mx[0]) && mx.length,
    }
  })
  CrosXMatricesRobust |> deco |> logger
  'lapse' |> console.log
  lapse |> decoCrostab |> console.log
  '' |> console.log
  'result' |> console.log
  result |> decoCrostab |> console.log
}

isMatrixTest()
