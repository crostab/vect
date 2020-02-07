import { copyMargin } from '@spare/vettro'

export const copyMxMargin = (mx, t, b, l, r, h, w) => {
  const x = Array(h), bs = h - b
  for (let i = 0; i < t; i++) x[i] = copyMargin(mx[i], l, r, w)
  for (let i = bs; i < h; i++) x[i] = copyMargin(mx[i], l, r, w)
  return x
}




