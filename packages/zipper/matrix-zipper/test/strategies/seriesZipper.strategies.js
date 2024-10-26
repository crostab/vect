import { decoCrostab }            from '@spare/logger'
import { strategies }             from '@valjoux/strategies'
import { mapper as mapperMatrix } from '@vect/matrix-mapper'
import { size }                   from '@vect/matrix-index'
import { mapper as mapperVector } from '@vect/vector-mapper'
import { Duozipper, Quazipper }   from '../../src/seriesZipper'
import { zipper }                 from '../../src/zipper'

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

const edge = function (xa, xb, xc, xd) {
  const { zipper } = this
  return mapperMatrix(xa, (a, i, j) => zipper(a, xb[i][j], xc[i][j], xd[i][j]))
}

const dev = function (...xos) {
  const { mapper, zipper, matrix } = this
  return mapper(matrix, (_, i, j) => zipper.apply(null, mapperVector(xos, x => x[i][j])))
}

const series = function (...matrices) {
  const { zipper } = this
  const l = matrices.length
  const [ht, wd] = size(matrices[0])
  const mx = Array(ht)
  for (let i = 0, j, r, rs; i < ht; i++) {
    rs = mapperVector(matrices, mx => mx[i], l)
    for (j = 0, mx[i] = r = Array(wd); j < wd; j++)
      r[j] = zipper.apply(null, mapperVector(rs, r => r[j], l))
  }
  return mx
}

const seriesDev = function (...matrices) {
  const { zipper, matrix } = this
  const l = matrices.length
  const [ht, wd] = size(matrix)
  for (let i = 0, j, r, rs; i < ht; i++) {
    rs = mapperVector(matrices, x => x[i], l)
    for (j = 0, r = matrix[i]; j < wd; j++)
      r[j] = zipper.apply(null, mapperVector(rs, r => r[j], l))
  }
  return matrix
}

const skeleton = [[, , ,], [, , ,], [, , ,]]
const aggregate = (a, b, c, d) => a + b + c + d

export class SeriesZipperStrategies {
  static test () {
    const { lapse, result } = strategies({
      repeat: 4E+5,
      candidates: {
        simple: [alpha, beta, gamma, delta],
        again: [alpha, beta, gamma, delta],
        third: [alpha, beta, gamma, delta],
      },
      methods: {
        bench: (a, b, c, d) => [a[0], b[1], c[2], d[3]],
        reduce: (...matrices) => matrices.reduce((xa, xb) => zipper(xa, xb, (a, b) => a + b)),
        duozipper: Duozipper((a, b) => a + b),
        quazipper: Quazipper(aggregate),
        edge: edge.bind({ zipper: aggregate }),
        dev: dev.bind({ mapper: mapperMatrix, zipper: aggregate, matrix: skeleton }),
        series: series.bind({ zipper: aggregate }),
        seriesDev: seriesDev.bind({ zipper: aggregate, matrix: skeleton }),
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
