import { SimpleMatrixCollection }             from '@foba/foo'
import { Deco }                               from '@spare/deco'
import { DecoMatrix, delogger, logger, says } from '@spare/logger'
import { ColumnZipper }                       from '../src/ColumnZipper'
import { mutazip }                            from '../src/mutazip'
import { Duozipper }                          from '../src/seriesZipper'

SimpleMatrixCollection |> Deco({ vo: 1 }) |> says['original']
const mb = [
  [ 0, 0, 0, 0 ],
  [ 0, 0, 0, 0 ],
  [ 0, 0, 0, 0 ]
]

class ColumnZipperTest {
  static testMapper() {
    for (let [ k, ma ] of Object.entries(SimpleMatrixCollection)) {
      k |> logger
      ColumnZipper(1)(ma, mb, (a, b) => a * 2) |> delogger
    }
    '' |> logger
  }

  static testMutate() {
    'mutazip.test' |> logger
    const m0 = [
      [ 0, 0, 0, 0 ],
      [ 0, 0, 0, 0 ],
      [ 0, 0, 0, 0 ]
    ]
    const ma = [
      [ 1, 2, 3, 4 ],
      [ 1, 2, 3, 4 ],
      [ 1, 2, 3, 4 ]
    ]
    const mb = [
      [ 1, 1, 1, 1 ],
      [ 2, 2, 2, 2 ],
      [ 3, 3, 3, 3 ]
    ]
    Duozipper(1, (a, b) => a + b, { mx: m0 })(m0, ma) |> delogger
    const decoX = DecoMatrix({ direct: 0 })
    m0 |> decoX |> says['original m0']
    ma |> decoX |> says['original ma']
    mb |> decoX |> says['original mb']
    mutazip(m0, ma, 3, (a, b) => a + b) |> decoX |> says['merge ma.col(3) to m0']
    mutazip(m0, mb, 0, (a, b) => a + b) |> decoX |> says['merge mb.col(0) to m0']
    mutazip(m0, mb, 2, (a, b) => a + b) |> decoX |> says['merge mb.col(2) to m0']
    m0 |> delogger

    '' |> logger
  }
}

ColumnZipperTest.testMapper()

ColumnZipperTest.testMutate()
