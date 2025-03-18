import { decoCrostab }      from '@spare/logger'
import { strategies }       from '@valjoux/strategies'
import { MatricesOrNotEmb } from '@vect/foobar'
import { height }           from '../../src/height.js'
import { size }             from '../../src/size.js'
import { width }            from '../../src/width.js'

export class SizeStrategies {
  static test () {
    const { lapse, result } = strategies({
      repeat: 4E+6,
      candidates: MatricesOrNotEmb,
      methods: {
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
    lapse |> decoCrostab |> console.log
    '' |> console.log
    'result' |> console.log
    result |> decoCrostab |> console.log
  }
}

SizeStrategies.test()
