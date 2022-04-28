export function updateCell(x, y, v) {
  (this[x] ?? (this[x] = {}))[y] = v
}

export function appendCell(x, y, v) {
  const temp = this[x] ?? (this[x] = {})
  const list = temp[y] ?? (temp[y] = [])
  list.push(v)
}

export function assignCell(x, y, k, v) {
  const temp = this[x] ?? (this[x] = {})
  const obj = temp[y] ?? (temp[y] = {})
  obj[k] = v
}