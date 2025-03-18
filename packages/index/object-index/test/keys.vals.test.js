import { ObjectCollection } from '@foba/object-string'
import { ents, keys, vals } from '../index.js'

const o = ObjectCollection.Pastas

keys(o) |> console.log
vals(o) |> console.log
ents(o) |> console.log