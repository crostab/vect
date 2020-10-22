import { SimpleMatrixCollectionRobust } from '@foba/foo'
import { deco } from '@spare/deco'
import { logger } from '@spare/logger'
import { every } from '../src/every'

SimpleMatrixCollectionRobust |> deco |> logger

for (const [key, mx] of Object.entries(SimpleMatrixCollectionRobust)) {
  `[${key}] (${every(mx, x => typeof x === 'number')})`
    |> logger
}
