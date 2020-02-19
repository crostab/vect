import { min as minN } from '@aryth/comparer'

export const min = function (matrix) {
  const { y, fn } = this
  return matrix.reduce(
    (p, r, i) => minN(p, fn(r[y], i, y)),
    fn(matrix[0][y], 0, y)
  )
}

export const minBy = (matrix, y, fn) => min.call({ y, fn }, matrix)

export const Min = (y, fn) => min.bind({ y, fn })
