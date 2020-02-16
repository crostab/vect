import { SimpleMatricesRobust } from '@foba/foo'
import { deco } from '@spare/deco'
import { logger } from '@spare/logger'
import { ColumnEvery } from '../src/ColumnEvery'

SimpleMatricesRobust |> deco |> logger

for (const [key, mx] of Object.entries(SimpleMatricesRobust)) {
  `[${key}] (${ColumnEvery(0)(mx, x => typeof x === 'number')})`
    |> logger
}
