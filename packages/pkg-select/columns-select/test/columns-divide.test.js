import { SimpleMatrices } from '@foba/foo'
import { deco, says } from '@spare/logger'
import { divide } from '../src/divide'

for (const [key, matrix] of Object.entries(SimpleMatrices)) {
  matrix |> deco |> says[key]
  divide(matrix, [1, 3]) |> deco |> says[key]
}
