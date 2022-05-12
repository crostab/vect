import { column, width } from '@vect/matrix-index'

export function* indexedOf(mx) {
  for (let j = 0, w = width(mx); j < w; j++) {
    yield column.call(mx, j)
  }
}

export function* indexedBy(mx, by) {
  for (let j = 0, w = width(mx); j < w; j++) {
    const col = column.call(mx, j)
    if (by(col, j)) yield col
  }
}

export function* indexedTo(mx, to) {
  for (let j = 0, w = width(mx); j < w; j++) {
    const col = column.call(mx, j)
    yield to(col, j)
  }
}

export function* indexed(mx, by, to) {
  if (!to) { return yield* (!by ? indexedOf(mx) : indexedBy(mx, by)) }
  for (let j = 0, w = width(mx); j < w; j++) {
    const col = column.call(mx, j)
    if (by(col, j)) yield to(col, j)
  }
}
