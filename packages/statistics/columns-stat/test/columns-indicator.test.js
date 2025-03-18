import { randMatrix }   from '@foba/foo'
import { delogger }     from '@spare/deco'
import { logger }       from '@spare/logger'
import { xr }           from '@spare/xr'
import { maxBy, minBy } from '../index.js'

const matrix = randMatrix({ h: 6, w: 6 })
matrix |> delogger

xr().max(maxBy(matrix, x => x)).min(minBy(matrix, x => x)) |> logger
