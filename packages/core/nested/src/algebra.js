import { indexedIterate } from './mapper'
import { updateCell }     from './update'

export const transpose = (nested) => {
  const o = {}
  indexedIterate(nested, (x, y, v) => updateCell.call(o, y, x, v))
  return o
}