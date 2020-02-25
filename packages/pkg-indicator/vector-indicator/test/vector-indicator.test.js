import { FobaNum } from '@foba/vector'
import { logger } from '@spare/logger'
import { xr } from '@spare/xr'
import { maxBy, minBy } from '../index'

const vec = FobaNum.flop({ size: 12 })

vec |> logger

xr().max(maxBy(vec, x => x)).min(minBy(vec, x => x)) |> logger


