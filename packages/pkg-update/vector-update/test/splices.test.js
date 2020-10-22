import { SimpleVectorCollection } from '@foba/foo'
import { says, xr } from '@spare/logger'
import { splices } from '../src/splices'

const Vecs = SimpleVectorCollection
for (const [key, vector] of Object.entries(Vecs)) {
  xr()[key](vector)['splices'](splices(vector, [1, 3, 4])) |> says[key]
}
