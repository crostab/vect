import { SimpleMatrixCollection } from '@foba/foo'
import { deco, decoMatrix, says } from '@spare/logger'
import { select } from '../src/select.js'

for (const [key, matrix] of Object.entries(SimpleMatrixCollection)) {
  matrix |> deco |> says[key]
  select(matrix, [0,1]) |> deco |> says[key]
}
