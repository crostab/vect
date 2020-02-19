import { mapper as mapperColumns } from '@vect/columns-mapper'
import { maxBy as vecMaxBy } from '@vect/vector-indicator'

export const max = function (matrix) {
  const indicator = this
  return mapperColumns(matrix, (col) => vecMaxBy(col, indicator))
}

export const maxBy = (matrix, indicator) => max.call(indicator, matrix)

export const Max = (indicator) => max.bind(indicator)
