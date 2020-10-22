import { deco, delogger } from '@spare/deco'
import { logger }         from '@spare/logger'
import { Differentiator } from '../src/differentiator'

const rows = [[0], [1], [2], [3]]
for (const [upper, lower] of Differentiator.build(rows)) {
  // upper[0] = upper[0] - lower[0]
  deco([upper, lower]) |> logger
}

'' |> logger
rows |> delogger
