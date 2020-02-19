import { max as maxN } from '@aryth/comparer'

export const max = function (matrix) {
  const { y, fn } = this
  return matrix.reduce(
    (p, r, i) => maxN(p, fn(r[y], i, y)),
    fn(matrix[0][y], 0, y)
  )
}

export const maxBy = (matrix, y, fn) => max.call({ y, fn }, matrix)

export const Max = (y, fn) => max.bind({ y, fn })
