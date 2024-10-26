import { SimpleVectorCollection } from '@foba/foo'
import { says, xr }               from '@spare/logger'
import { splices }                from '../index'

const Vecs = SimpleVectorCollection
for (const [ key, vector ] of Object.entries(Vecs)) {
  xr()[key](vector)['splices'](splices(vector, [ 1, 3, 4 ])) |> says[key]
}
