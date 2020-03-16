import { simpleVectors } from '@foba/foo'
import { shuffle } from '../src/shuffle'
import { deco, delogger, says } from '@spare/logger'

const candidates = simpleVectors({ h: 8 })

candidates |> delogger

for (const [key, value] of Object.entries(candidates)) {
  shuffle(value, 4) |> deco |> says[key]
  // value |> Shuffler(4) |> logger
}
