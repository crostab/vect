import { rowMarginMutate } from '../util/rowMarginMutate'

export const marginMutate = (mx, fn, t, b, l, r, h, w) => {
  h = h || mx?.length
  const s = h - b
  for (let i = 0; i < t; i++) rowMarginMutate(mx[i], i, fn, l, r, w)
  for (let i = s; i < h; i++) rowMarginMutate(mx[i], i, fn, l, r, w)
  return mx
}
