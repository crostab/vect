import { decoMatrix, logger } from '@spare/logger'
import { says }               from '@spare/xr'
import { Stat }               from '@vect/vector-stat'
import { Matrix }             from '../src/Matrix.js'

const matrix = Matrix.of([ 1, 5, 9, 10 ], [ 10, 10, 12, 12 ], [ 14, 15, 20, 27 ])

for (let column of matrix.columns()) {
  Stat.sum(column) |> says['column']
  // column|> gather |> decoFlat|> logger
}

for (let row of matrix.rows()) {
  // row |> gather |> decoFlat |> says['row']
  Stat.sum(row) |> says['row']
}

matrix |> decoMatrix |> logger
