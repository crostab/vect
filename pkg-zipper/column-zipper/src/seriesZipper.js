import { fab } from '@vect/matrix-init'

export function duozipper (ma, mb) {
  let { y, fn, mx, t, b } = this
  t = t || 0
  b = b || ma && ma.length
  mx = mx || fab(b, y)
  for (let i = t; i < b; i++)
    mx[i][y] = fn(ma[i][y], mb[i][y], i)
  return mx
}

export function trizipper (ma, mb, mc) {
  let { y, fn, mx, t, b } = this
  t = t || 0
  b = b || ma && ma.length
  mx = mx || fab(b, y)
  for (let i = t; i < b; i++)
    mx[i][y] = fn(ma[i][y], mb[i][y], mc[i][y], i)
  return mx
}

export function quazipper (ma, mb, mc, md) {
  let { y, fn, mx, t, b } = this
  t = t || 0
  b = b || ma && ma.length
  mx = mx || fab(b, y)
  for (let i = t; i < b; i++)
    mx[i][y] = fn(ma[i][y], mb[i][y], mc[i][y], md[i][y], i)
  return mx
}

export const Duozipper = (y, fn, { mx, t, b } = {}) => duozipper.bind({ y, fn, mx, t, b })
export const Trizipper = (y, fn, { mx, t, b } = {}) => trizipper.bind({ y, fn, mx, t, b })
export const Quazipper = (y, fn, { mx, t, b } = {}) => quazipper.bind({ y, fn, mx, t, b })

