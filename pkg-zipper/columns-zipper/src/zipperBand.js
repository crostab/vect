import { size } from '@vect/matrix-size'
import { Columns } from '@vect/column-getter'

export const zipperBand = (matrix, band, zipColBand) => {
  const [ht, wd] = size(matrix), vec = Array(wd)
  for (let ci = 0, columns = Columns(matrix); ci < wd; ci++)
    vec[ci] = zipColBand(columns(ci, ht), band, ci)
  return vec
}


