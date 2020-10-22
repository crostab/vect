import { Columns } from '@vect/column-getter'

export const iterate = function (mx, fnOnColumns, h, w) {
  h = h || mx?.length, w = w || h && mx[0]?.length
  for (let j = 0, cols = Columns(mx); j < w; j++)
    fnOnColumns.call(this, cols(j, h), j)
}


