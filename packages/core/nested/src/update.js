import { getOrObj, getOrVec } from './indexes.js'

export function updateCell(x, y, v) {
  (this[x] ?? (this[x] = {}))[y] = v
}

export function appendCell(x, y, v) {
  const vec = getOrVec.call(this, x, y)
  vec.push(v)
}

export function assignCell(x, y, k, v) {
  const obj = getOrObj.call(this, x, v)
  obj[k] = v
}