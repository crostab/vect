import { marginCopy as copyArrayMargin } from '@vect/vector-margin'

export const marginCopy = (mx, t, b, l, r, h, w) => {
  const x = Array(h || (h = mx && mx.length)), bs = h - b
  for (let i = 0; i < t; i++) x[i] = copyArrayMargin(mx[i], l, r, w)
  for (let i = bs; i < h; i++) x[i] = copyArrayMargin(mx[i], l, r, w)
  return x
}




