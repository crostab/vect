import { simpleVectors } from '@foba/foo'
import { logger } from '@spare/logger'
import { marginCopy, marginMapper, marginMutate } from '../index'
import { xr } from '@spare/xr'

const SimpleVectors = simpleVectors({ h: 12 })

'marginCopy' |> logger
for (const [key, vector] of Object.entries(SimpleVectors))
  xr(key).margin(marginCopy(vector, 5, 2)) |> logger
'' |> logger

'marginMapper' |> logger
for (const [key, vector] of Object.entries(SimpleVectors))
  xr(key).margin(marginMapper(vector, x => `'${x}'`, 5, 2)) |> logger
'' |> logger

'marginMutate' |> logger
for (const [key, vector] of Object.entries(SimpleVectors)) {
  xr(key).margin(marginMutate(vector, x => `(${x})`, 5, 2)) |> logger
  xr('  ').original(vector) |> logger
}
'' |> logger



