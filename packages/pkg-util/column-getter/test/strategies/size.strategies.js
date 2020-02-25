import { MatricesOrNotEmb } from '@vect/foobar'
import { Chrono } from 'elprimero'
import { CrosTabX } from 'xbrief'
import { size } from '../../src/size'
import { width } from '../../src/width'
import { height } from '../../src/height'

export class SizeStrategies {
  static test () {
    const { lapse, result } = Chrono.strategies({
      repeat: 4E+6,
      paramsList: MatricesOrNotEmb,
      funcList: {
        bench: x => [,],
        dev: (mx) => {
          let l
          return [(l = mx?.length), l ? mx[0]?.length : undefined]
        },
        simple: (mx) => {
          const l = mx ? mx.length : undefined
          return [l, l
            ? mx[0]
              ? mx[0].length
              : undefined
            : undefined
          ]
        },
        height,
        width,
        size,
        fut: (mx) => {
          let l, r
          if (!mx || !(l = mx.length) || !(r = mx[0])) return [l, r]
          return [l, r.length]
        },
        futRev: (mx) => {
          let l, r
          if (mx && (l = mx.length) && (r = mx[0])) return [l, r.length]
          return [l, undefined]
        },
        edge: (mx) => {
          let l, r
          if (!(l = mx?.length) || !(r = mx[0])) return [l,]
          return [l, r.length]
        },
        edgeRev: (mx) => {
          let l, r
          if ((l = mx?.length) && (r = mx[0])) return [l, r.length]
          return [l, undefined]
        },
      }
    })
    'lapse' |> console.log
    lapse |> CrosTabX.brief |> console.log
    '' |> console.log
    'result' |> console.log
    result |> CrosTabX.brief |> console.log
  }
}

SizeStrategies.test()
