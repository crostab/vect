import { randMatrix } from '@foba/foo'
import { logger, logNeL } from '@spare/logger'
import { marginCopy, marginMapper, marginMutate } from '../index'
import { xr } from '@spare/xr'
import { deco, delogNeL } from '@spare/deco'

const mx = randMatrix({ h: 8, w: 6 })
'original' |> logger
mx |> delogNeL

xr().copy(marginCopy(mx, 3, 2, 2, 1)|> deco) |> logNeL

xr().mapper(marginMapper(mx, x => `'${x}'`, 3, 2, 2, 1) |> deco) |> logNeL

xr().original(mx|> deco) |> logNeL

xr().mutate(marginMutate(mx, x => `(${x})`, 3, 2, 2, 1)|> deco) |> logNeL

xr().original(mx|> deco) |> logNeL





