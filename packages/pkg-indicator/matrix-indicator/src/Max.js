import { max as maxN } from '@aryth/comparer'

export const max = function (matrix) {
  let fn = this
  return matrix.reduce(
    (prv, r, i) => maxN(prv, r.reduce(
      (acc, x, j) => maxN(acc, fn(x, i, j))
    )),
    fn(matrix[0][0], 0, 0)
  )
}

export const maxBy = (matrix, indicator) => max.call(indicator, matrix)

export const Max = indicator => max.bind(indicator)

