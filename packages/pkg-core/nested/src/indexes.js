import { iterateY } from './mapper'

export const side = (nested) => {
  return Object.keys(nested)
}

// distinct(Object.values(this.pairs).map(Object.keys).flat())
export const head = (nested) => {
  const vec = []
  iterateY(nested, y => { if (vec.indexOf(y) < 0) vec.push(y) })
  return vec
}