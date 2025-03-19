import { deco }        from '@spare/deco'
import { logger, Xr }  from '@spare/logger'
import { first, last } from '../index.js'

const candidates = [
  // null,
  [],
  [ 1 ],
  [ 1, 2, 3 ]
]

for (let vec of candidates) {
  logger(Xr(deco(vec)).first(first(vec)).last(last(vec)))
}