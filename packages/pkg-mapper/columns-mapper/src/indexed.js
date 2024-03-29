import { column, width } from '@vect/matrix-index'

export function* indexedOf(mx) {
  for (let j = 0, w = width(mx); j < w; j++) yield column.call(mx, j)
}

export function* indexedBy(mx, by) {
  for (let j = 0, w = width(mx), col; j < w; j++) if (by(col = column.call(mx, j), j)) yield col
}

export function* indexedTo(mx, to) {
  if (!to) { return yield* indexedOf(mx) }
  for (let j = 0, w = width(mx); j < w; j++) yield to(column.call(mx, j), j)
}

export function* indexed(mx, by, to) {
  if (!to) return yield* (!by ? indexedOf(mx) : indexedBy(mx, by))
  for (let j = 0, w = width(mx), col; j < w; j++) if (by(col = column.call(mx, j), j)) yield to(col, j)
}
