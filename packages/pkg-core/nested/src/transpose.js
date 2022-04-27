import { indexedIterate } from './mapper'
import { update }         from './update'

export const transpose = (nested) => {
  const o = {}
  indexedIterate(nested, (x, y, v) => update.call(o, y, x, v))
  return o
}