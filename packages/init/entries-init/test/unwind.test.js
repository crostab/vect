import { SimpleEntriesCollection } from '@foba/foo'
import { deco }                    from '@spare/deco'
import { $, logger }               from '@spare/logger'
import { test }                    from 'node:test'
import { unwind }                  from '../src/index.js'

test('unwind', () => {
  // logger(deco(SimpleEntriesCollection))
  for (let [ k, entries ] of Object.entries(SimpleEntriesCollection)) {
    // logger(deco(entries))
    logger($[k]('original').result(deco(entries)))
    logger($[k]('unwind').result(deco(unwind(entries))))
  }
})