import { logger, logNeL } from '@spare/logger'
import { deca, delogNeL } from '@spare/deco'
import { mutazip } from '../src/mutazip'
import { SimpleMatrices } from '@foba/foo'
import { ColumnZipper } from '../src/ColumnZipper'

SimpleMatrices |> deca({ vu: 1 }) |> logNeL

class ColumnMapperTest {
  static testMapper () {
    for (let [k, v] of Object.entries(SimpleMatrices)) {
      k |> logger
      ColumnZipper(0)(v, x => x * 2) |> delogNeL
    }
  }

  static testMutate () {
    for (let [k, v] of Object.entries(SimpleMatrices)) {
      k |> logger
      mutazip(v, 2, x => x * 2) |> delogNeL
    }
  }
}

ColumnMapperTest.testMapper()

ColumnMapperTest.testMutate()