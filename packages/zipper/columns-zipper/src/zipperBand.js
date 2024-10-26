import { Columns } from '@vect/column-getter'

export const zipperBand = (mx, band, zipColBand, h, w) => {
  h = h || mx?.length, w = w || h && mx[0]?.length
  const vec = Array(w)
  for (let ci = 0, columns = Columns(mx); ci < w; ci++)
    vec[ci] = zipColBand(columns(ci, h), band, ci)
  return vec
}


