import { logger }  from '@spare/logger'
import { indexed } from '../src/indexed.js'

const vec = [ 1, 2, 3 ]
for (let el of indexed(vec)) {
  el|> logger
}