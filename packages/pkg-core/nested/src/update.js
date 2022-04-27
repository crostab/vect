export function update(x, y, v) {
  (this[x] ?? (this[x] = {}))[y] = v
}