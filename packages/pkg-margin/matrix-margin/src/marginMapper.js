import { rowMarginMapper } from '../util/rowMarginMapper'

export const marginMapper = (mx, fn, t, b, l, r, h, w) => {
  const x = Array(h || (h = mx && mx.length)), bs = h - b
  for (let i = 0; i < t; i++) x[i] = rowMarginMapper(mx[i], i, fn, l, r, w)
  for (let i = bs; i < h; i++) x[i] = rowMarginMapper(mx[i], i, fn, l, r, w)
  return x
}
