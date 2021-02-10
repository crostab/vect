import { mapper as mapperColumns } from '@vect/columns-mapper'
import { minBy as vecMinBy }       from '@vect/vector-indicator'

export const min = function (matrix) {
  const indicator = this
  return mapperColumns(matrix, (col) => vecMinBy(col, indicator))
}

export const minBy = (matrix, indicator) => min.call(indicator, matrix)

export const Min = (indicator) => min.bind(indicator)
