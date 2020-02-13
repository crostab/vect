import { copyMargin as copyArrayMargin } from '@vect/vector'

export const copyMargin = (mx, t, b, l, r, h, w) => {
  const x = Array(h), bs = h - b
  for (let i = 0; i < t; i++) x[i] = copyArrayMargin(mx[i], l, r, w)
  for (let i = bs; i < h; i++) x[i] = copyArrayMargin(mx[i], l, r, w)
  return x
}




