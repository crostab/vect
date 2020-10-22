import { draft, size } from '@vect/matrix'

export const multiply = (a, b) => {
  const [ha, wa] = size(a)
  const [hb, wb] = size(b)
  if (wa !== hb) { throw new Error('incompatible sizes') }
  const mx = draft(ha, wb)
  for (let i = 0; i < ha; i++) {
    for (let j = 0; j < wb; j++) {
      let sum = 0
      for (let k = 0; k < wa; k++) sum += a[i][k] * b[k][j]
      mx[i][j] = sum
    }
  }
  return mx
}

export const exponent = (mx) => multiply(mx, mx)
