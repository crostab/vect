import { SimpleMatricesRobust } from '@foba/foo'
import { deco } from '@spare/deco'
import { logger } from '@spare/logger'
import { every } from '..'

SimpleMatricesRobust |> deco |> logger

for (const [key, mx] of Object.entries(SimpleMatricesRobust)) {
  `[${key}] (${every(mx, x => typeof x === 'number')})`
    |> logger
}
