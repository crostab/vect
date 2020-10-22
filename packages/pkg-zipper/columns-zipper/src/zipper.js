import { Columns } from '@vect/column-getter'

export const zipper = (ma, mb, zipOnColumns, h, w) => {
  h = h || ma?.length, w = w || h && ma[0]?.length
  const banner = Array(w)
  for (let c = 0, ca = Columns(ma), cb = Columns(mb); c < w; c++)
    banner[c] = zipOnColumns(ca(c, h), cb(c, h), c)
  return banner
}


