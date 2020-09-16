import { max as maxFn } from '@aryth/comparer'

export const max = function (matrix) {
  let indicator = this
  return matrix.reduce(
    (prevVal, currRow, i) => maxFn(prevVal, currRow.reduce((a, b, j) => maxFn(a, indicator(b, i, j)))),
    indicator(matrix[0][0], 0, 0)
  )
}

export const maxBy = (matrix, indicator) => max.call(indicator, matrix)

export const Max = indicator => max.bind(indicator)

