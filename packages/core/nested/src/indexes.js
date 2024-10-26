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

export function getRow(x) {
  return (this[x] ?? (this[x] = {}))
}

export function getOr(x, y, fn = Object) {
  const row = this[x] ?? (this[x] = {})
  return row[y] ?? (row[y] = fn())
}

export function getOrObj(x, y) {
  const row = this[x] ?? (this[x] = {})
  return row[y] ?? (row[y] = [])
}

export function getOrVec(x, y) {
  const row = this[x] ?? (this[x] = {})
  return row[y] ?? (row[y] = [])
}