import { SimpleMatrixCollection } from '@foba/foo'
import { deco, says } from '@spare/logger'
import { divide } from '../src/divide.js'

for (const [key, matrix] of Object.entries(SimpleMatrixCollection)) {
  matrix |> deco |> says[key]
  divide(matrix, [1, 3]) |> deco |> says[key]
}
