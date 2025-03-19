import { SimpleMatrixCollection }   from '@foba/foo'
import { DecoMatrix, logger, says } from '@spare/logger'
import { test }                     from 'node:test'
import { mapper, mutate }           from '../src/mapper.js'

const decoMatrix = DecoMatrix({ bracket: true })

test('mapper test', done => {
  for (const [ key, mx ] of Object.entries(SimpleMatrixCollection)) {
    logger(key)
    says['mapper'](decoMatrix(mapper(mx, (x, i, j) => `(${i},${j}) ${x}`)))
    says['mutate'](decoMatrix(mutate(mx, x => x * 2)))
    says['original'](decoMatrix(mx))
    logger('')
  }
})
