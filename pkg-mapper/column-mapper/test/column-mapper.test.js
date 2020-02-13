import { mapper } from '../src/mapper'
import { logger } from '@spare/logger'
import { decoLog } from '@spare/deco'
import { mutate } from '../src/mutate'
import { SimpleMatrices } from '@foba/foo'

class ColumnMapperTest {
  static testMapper () {
    for (let [k, v] of Object.entries(SimpleMatrices)) {
      k |> logger
      decoLog(mapper(v, 2, x => x * 2))
    }
  }

  static testMutate () {
    for (let [k, v] of Object.entries(SimpleMatrices)) {
      k |> logger
      decoLog(mutate(v, 2, x => x * 2))
    }
  }
}

ColumnMapperTest.testMapper()

ColumnMapperTest.testMutate()
