import { min as minN } from '@aryth/comparer'

export const min = function (matrix) {
  let fn = this
  return matrix.reduce(
    (prv, r, i) => minN(prv, r.reduce(
      (acc, x, j) => minN(acc, fn(x, i, j))
    )),
    fn(matrix[0][0], 0, 0)
  )
}

export const minBy = (matrix, indicator) => min.call(indicator, matrix)

export const Min = indicator => min.bind(indicator)

