import { draft } from '@vect/matrix-init'

export function duozipper(ma, mb) {
  let { y, fn, mx, lo, hi } = this
  hi = hi ?? ma?.length, mx = mx ?? draft(hi, y)
  for (let i = lo ?? 0; i < hi; i++)
    mx[i][y] = fn(ma[i][y], mb[i][y], i)
  return mx
}

export function trizipper(ma, mb, mc) {
  let { y, fn, mx, lo, hi } = this
  hi = hi ?? ma?.length, mx = mx ?? draft(hi, y)
  for (let i = lo ?? 0; i < hi; i++)
    mx[i][y] = fn(ma[i][y], mb[i][y], mc[i][y], i)
  return mx
}

export function quazipper(ma, mb, mc, md) {
  let { y, fn, mx, lo, hi } = this
  hi = hi ?? ma?.length, mx = mx ?? draft(hi, y)
  for (let i = lo ?? 0; i < hi; i++)
    mx[i][y] = fn(ma[i][y], mb[i][y], mc[i][y], md[i][y], i)
  return mx
}

export const Duozipper = (y, fn, { mx, lo, hi } = {}) => duozipper.bind({ y, fn, mx, lo, hi })
export const Trizipper = (y, fn, { mx, lo, hi } = {}) => trizipper.bind({ y, fn, mx, lo, hi })
export const Quazipper = (y, fn, { mx, lo, hi } = {}) => quazipper.bind({ y, fn, mx, lo, hi })

