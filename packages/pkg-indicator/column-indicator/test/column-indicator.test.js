import { randMatrix } from '@foba/foo'
import { logger } from '@spare/logger'
import { delogger } from '@spare/deco'
import { maxBy, minBy } from '../index'
import { xr } from '@spare/xr'

const matrix = randMatrix({ h: 6, w: 6 })
matrix |> delogger

xr().max(maxBy(matrix, 0, x => x)).min(minBy(matrix, 0, x => x)) |> logger
