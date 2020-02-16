import { size } from '@vect/matrix-size'

export const mutazip = (ma, mb, fn) => {
  const [ht, wd] = size(ma)
  for (let i = 0, j, ra, rb; i < ht; i++)
    for (j = 0, ra = ma[i], rb = mb[i]; j < wd; j++)
      ra[j] = fn(ra[j], rb[j], i, j)
  return ma
}
