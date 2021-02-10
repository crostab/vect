import { randMatrix }   from '@foba/foo'
import { delogger }     from '@spare/deco'
import { logger }       from '@spare/logger'
import { xr }           from '@spare/xr'
import { maxBy, minBy } from '../index'

const matrix = randMatrix({ h: 6, w: 6 })
matrix |> delogger

xr().max(maxBy(matrix, 0, x => x)).min(minBy(matrix, 0, x => x)) |> logger
