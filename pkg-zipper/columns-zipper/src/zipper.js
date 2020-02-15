import { size } from '@vect/matrix-size'
import { zipper as vectorMapper } from '@vect/vector-zipper'

const column = function (c, h) {
  return vectorMapper(this, r => r[c], h)
}

export const zipper = (ma, mb, zipOnColumns) => {
  const [h, w] = size(ma), banner = Array(w)
  for (let c = 0, ca = column.bind(ma), cb = column.bind(mb); c < w; c++)
    banner[c] = zipOnColumns(ca(c, h), cb(c, h), c)
  return banner
}


