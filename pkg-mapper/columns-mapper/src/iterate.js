import { size } from '@vect/matrix-size'
import { Columns } from '@vect/column-getter'

export const iterate = function (mx, fnOnColumns) {
  const [h, w] = size(mx)
  for (let y = 0, cols = Columns(mx); y < w; y++)
    fnOnColumns.call(this, cols(y, h), y)
}


