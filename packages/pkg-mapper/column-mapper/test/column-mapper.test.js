import { SimpleMatrices }                       from '@foba/foo'
import { deca }                                 from '@spare/deco'
import { decoMatrix, DecoVector, logger, says } from '@spare/logger'
import { ColumnMapper }                         from '../src/ColumnMapper'
import { ColumnMutate }                         from '../src/ColumnMutate'

SimpleMatrices |> deca({ vo: 1 }) |> says.candidates

class ColumnMapperTest {
  static testMapper() {
    'testMapper' |> logger
    for (let [k, v] of Object.entries(SimpleMatrices))
      ColumnMapper(0)(v, x => x * 2) |> DecoVector() |> says[k]
  }

  static testMutate() {
    'testMutate' |> logger
    for (let [k, v] of Object.entries(SimpleMatrices))
      ColumnMutate(2)(v, (x, i) => [i, x * 2]) |> decoMatrix |> says[k]
  }
}

ColumnMapperTest.testMapper()
'' |> logger
ColumnMapperTest.testMutate()
