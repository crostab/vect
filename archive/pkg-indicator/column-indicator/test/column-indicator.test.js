import { roundD2 }      from '@aryth/math'
import { delogger }     from '@spare/deco'
import { logger }       from '@spare/logger'
import { xr }           from '@spare/xr'
import { init }         from '@vect/matrix'
import { maxBy, minBy } from '../index'

const matrix = init(6, 6, (x, y) => roundD2(Math.sqrt(x ^ 2 + y ^ 2)))

matrix |> delogger

xr().max(maxBy(matrix, 0, x => x)).min(minBy(matrix, 0, x => x)) |> logger
