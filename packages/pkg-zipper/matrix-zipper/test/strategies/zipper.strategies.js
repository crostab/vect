import { strategies } from '@valjoux/strategies'
import {decoCrostab} from '@spare/logger'
import { mapper } from '@vect/vector-mapper'
import { zipper } from '@vect/matrix-zipper'
import { size } from '@vect/matrix-size'

const alpha = [
  [1, 0, 0],
  [1, 0, 0],
  [1, 0, 0],
]
const beta = [
  [0, 2, 0],
  [0, 2, 0],
  [0, 2, 0],
]
const gamma = [
  [0, 0, 3],
  [0, 0, 3],
  [0, 0, 3],
]
const delta = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
]

function duozipperFut (xa, xb) {
  let zipper = this
  let [ht, wd] = size(xa)
  const mx = Array(ht)
  for (let i = 0, j, tr, ra, rb; i < ht; i++) {
    (ra = xa[i] , rb = xb[i])
    for (j = 0, mx[i] = tr = Array(wd); j < wd; j++)
      tr[j] = zipper(ra[j], rb[j], i, j)
  }
  return mx
}

const seriesZipper = function (...matrices) {
  const { zipper } = this
  const l = matrices.length
  const [ht, wd] = size(matrices[0])
  const mx = Array(ht)
  for (let i = 0, j, r, rs; i < ht; i++) {
    rs = mapper(matrices, mx => mx[i], l)
    for (j = 0, mx[i] = r = Array(wd); j < wd; j++)
      r[j] = zipper.apply(null, mapper(rs, r => r[j], l))
  }
  return mx
}

export class SeriesZipperStrategies {
  static test () {
    const { lapse, result } = strategies({
      repeat: 1E+6,
      candidates: {
        simple: [alpha, beta],
        again: [gamma, delta],
        third: [alpha, gamma],
      },
      methods: {
        duozip: (xa, xb) => zipper(xa, xb, (a, b) => a + b),
        duozipperFut: duozipperFut.bind((a, b) => a + b),
        seriesZipper: seriesZipper.bind({ zipper: (a, b) => a + b })
      }
    })
    'lapse' |> console.log
    lapse |> decoCrostab |> console.log
    '' |> console.log
    'result' |> console.log
    result |> decoCrostab |> console.log
  }
}

SeriesZipperStrategies.test()
