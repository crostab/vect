import { simpleEntries } from '@foba/foo'
import { logger } from '@spare/logger'
import { marginCopy, marginMapper, marginMutate } from '../index'
import { deco } from '@spare/deco'
import { xr } from '@spare/xr'

const Entries = simpleEntries({ h: 8 })

'marginCopy' |> logger
for (const [key, entries] of Object.entries(Entries))
  xr(key).copy(marginCopy(entries, 3, 2) |> deco) |> logger
'' |> logger

'marginMapper' |> logger
for (const [key, entries] of Object.entries(Entries))
  xr(key).copy(marginMapper(entries, x => `'${x}'`, x => `(${x})`, 3, 2) |> deco) |> logger
'' |> logger

'marginMutate' |> logger
for (const [key, entries] of Object.entries(Entries))
  xr(key).copy(marginMutate(entries, x => `'${x}'`, x => `(${x})`, 3, 2) |> deco) |> logger
'' |> logger

'original' |> logger
for (const [key, entries] of Object.entries(Entries))
  xr(key).original(entries|> deco) |> logger
'' |> logger

