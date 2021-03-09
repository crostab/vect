import { SimpleMatrixCollection } from '@foba/foo'
import { deco } from '@spare/deco'
import { logger } from '@spare/logger'
import { every } from '../src/every'

SimpleMatrixCollection |> deco |> logger

for (const [key, mx] of Object.entries(SimpleMatrixCollection)) {
  `[${key}] (${every(mx, x => typeof x === 'number')})`
    |> logger
}
