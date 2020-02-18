import { rowMaMutate } from '../util/rowMaMutate'

export const marginMutate = (mx, fn, t, b, l, r, h, w) => {
  h = h || (mx && mx.length)
  const s = h - b
  for (let i = 0; i < t; i++) rowMaMutate(mx[i], i, fn, l, r, w)
  for (let i = s; i < h; i++) rowMaMutate(mx[i], i, fn, l, r, w)
  return mx
}
