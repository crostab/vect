import { NumberVectorCollection } from '@foba/vector'
import { logger }                 from '@spare/logger'
import { xr }           from '@spare/xr'
import { maxBy, minBy } from '../index'

const vec = NumberVectorCollection.flopShuffle({ size: 12 })

vec |> logger

xr().max(maxBy(vec)).min(minBy(vec, x => x)) |> logger


