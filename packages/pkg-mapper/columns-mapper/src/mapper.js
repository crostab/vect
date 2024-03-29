import { column, width } from '@vect/matrix-index'

export function mapper(mx, colTo) {
  const
    h                   = mx?.length, w   = width(mx),
    vec = Array(w), col = column.bind(mx)
  for (let j = 0; j < w; j++) vec[j] = colTo(col(j, h), j)
  return vec
}

export function iterate(mx, onCol) {
  const
    h = mx?.length, w = width(mx),
    col               = column.bind(mx)
  for (let j = 0; j < w; j++)
    onCol.call(this, col(j, h), j)
}


