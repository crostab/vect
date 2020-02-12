import { size } from '@vect/matrix-size'
import { mapper as vectorMapper } from '@vect/vector-mapper'

const column = function (c, h) {
  return vectorMapper(this, r => r[c], h)
}

export const mapper = (mx, mapOnColumns) => {
  const [h, w] = size(mx), columns = Array(w)
  for (let c = 0, col = column.bind(mx); c < w; c++)
    columns[c] = mapOnColumns(col(c, h), c)
  return columns
}


