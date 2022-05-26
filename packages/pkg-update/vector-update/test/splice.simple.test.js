import { deco }    from '@spare/deco'
import { logger }  from '@spare/logger'
import { splices } from '../index'

const vec = [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ]

splices(vec.slice(), []) |> deco |> logger

splices(vec.slice(), [ 1, 3, 4 ]) |> deco |> logger

splices(vec.slice(), [ 0, 1, 2 ]) |> deco |> logger