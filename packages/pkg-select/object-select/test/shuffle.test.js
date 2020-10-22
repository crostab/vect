import { SimpleObjectCollection } from '@foba/foo'
import { shuffle } from '../src/shuffle'
import { deco, delogger, says } from '@spare/logger'

const candidates = SimpleObjectCollection({ h: 8 })
candidates |> delogger
for (const [key, o] of Object.entries(candidates)) {
  shuffle(o, 4) |> deco |> says[key]
  // value |> Shuffler(4) |> logger
}
