import { randMatrix }   from '@foba/foo'
import { delogger }     from '@spare/deco'
import { logger }       from '@spare/logger'
import { xr }           from '@spare/xr'
import { maxBy, minBy } from '../index'

const matrix = randMatrix({ h: 5, w: 6 }).map(row => row.reverse()).reverse()

matrix |> delogger

Object.prototype.toString.call(matrix) |> logger

maxBy(matrix, x => x) |> logger

xr().max(maxBy(matrix, x => x)).min(minBy(matrix, x => x)) |> logger
