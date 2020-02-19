import { randMatrix } from '@foba/foo'
import { logger } from '@spare/logger'
import { delogger } from '@spare/deco'
import { xr } from '@spare/xr'
import { maxBy, minBy } from '../index'

const matrix = randMatrix({ h: 6, w: 6 })
matrix |> delogger

xr().max(maxBy(matrix, x => x)).min(minBy(matrix, x => x)) |> logger
