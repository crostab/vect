export function updateCell(x, y, v) {
  (this[x] ?? (this[x] = {}))[y] = v
}

export function appendCell(x, y, v) {
  const vec = getOrVec.call(this, x, y)
  vec.push(v)
}

export function assignCell(x, y, k, v) {
  const o = getOr.call(this, x, v)
  o[k] = v
}

export function getRow(x) {
  return (this[x] ?? (this[x] = {}))
}

export function getOr(x, y, fn = Object) {
  const row = this[x] ?? (this[x] = {})
  return row[y] ?? (row[y] = fn())
}

export function getOrVec(x, y) {
  const row = this[x] ?? (this[x] = {})
  return row[y] ?? (row[y] = [])
}