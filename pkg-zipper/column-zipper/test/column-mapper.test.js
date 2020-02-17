import { logger, logNeL } from '@spare/logger'
import { deca, delogger, delogNeL } from '@spare/deco'
import { mutazip } from '../src/mutazip'
import { SimpleMatrices } from '@foba/foo'
import { ColumnZipper } from '../src/ColumnZipper'
import { Duozipper } from '../src/seriesZipper'

SimpleMatrices |> deca({ vu: 1 }) |> logNeL
const mb = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
]

class ColumnZipperTest {
  static testMapper () {
    for (let [k, ma] of Object.entries(SimpleMatrices)) {
      k |> logger
      ColumnZipper(1)(ma, mb, (a, b) => a * 2) |> delogger
    }
    '' |> logger
  }

  static testMutate () {
    'mutazip.test' |> logger
    const m0 = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ]
    const ma = [
      [1, 2, 3, 4],
      [1, 2, 3, 4],
      [1, 2, 3, 4]
    ]
    const mb = [
      [1, 1, 1, 1],
      [2, 2, 2, 2],
      [3, 3, 3, 3]
    ]
    Duozipper(1, (a, b) => a + b, { mx: m0 })(m0, ma) |> delogger
    mutazip(m0, ma, 3, (a, b) => a + b) |> delogger
    mutazip(m0, mb, 0, (a, b) => a + b) |> delogger
    mutazip(m0, mb, 2, (a, b) => a + b) |> delogger
    m0 |> delogger

    '' |> logger
  }
}

ColumnZipperTest.testMapper()

ColumnZipperTest.testMutate()
