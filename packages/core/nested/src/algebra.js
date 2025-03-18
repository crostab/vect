import { indexedIterate } from './mapper.js'
import { updateCell }     from './update.js'

export const transpose = (nested) => {
  const o = {}
  indexedIterate(nested, (x, y, v) => updateCell.call(o, y, x, v))
  return o
}