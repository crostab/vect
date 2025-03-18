import { FobaStr, FobaNum } from '@foba/vector'
import { decoMatrix, logger, says } from '@spare/logger'
import { deco } from '@spare/deco'
import { splices } from '../src/splices.js'

const mx = [
  FobaStr.flop({ size: 6 }),
  FobaNum.flop({ size: 6 }),
  FobaNum.flop({ size: 6 }),
  FobaStr.flop({ size: 6 })
]

mx |> decoMatrix |> says.original

const spliceIndexes = [0, 2, 4]
spliceIndexes |> deco |> says.splicesIndexes

splices(mx, spliceIndexes)
mx |> decoMatrix |> says.splices
