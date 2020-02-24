import { size } from '@vect/matrix-size'
import { Columns } from '@vect/column-getter'

export const mapper = (mx, mapOnColumns) => {
  const [h, w] = size(mx), tcol = Array(w)
  for (let y = 0, cols = Columns(mx); y < w; y++)
    tcol[y] = mapOnColumns(cols(y, h), y)
  return tcol
}


