import { logger, logNeL } from '@spare/logger'
import { deca, delogNeL } from '@spare/deco'
import { mutate } from '../src/mutate'
import { SimpleMatrices } from '@foba/foo'
import { ColumnMapper } from '../src/ColumnMapper'

SimpleMatrices |> deca({ vu: 1 }) |> logNeL

class ColumnMapperTest {
  static testMapper () {
    for (let [k, v] of Object.entries(SimpleMatrices)) {
      k |> logger
      ColumnMapper(0)(v, x => x * 2) |> delogNeL
    }
  }

  static testMutate () {
    for (let [k, v] of Object.entries(SimpleMatrices)) {
      k |> logger
      mutate(v, 2, x => x * 2) |> delogNeL
    }
  }
}

ColumnMapperTest.testMapper()

ColumnMapperTest.testMutate()
