import { draft } from '@vect/matrix-init'

export function duozipper(mxa, mxb, y, pair) {
  const hi = mxa?.length
  const mx = draft(hi, y)
  for (let i = 0; i < hi; i++)
    mx[i][y] = pair(mxa[i][y], mxb[i][y], i)
  return mx
}

export function trizipper(mxa, mxb, mxc, y, pair) {
  const hi = mxa?.length
  const mx = draft(hi, y)
  for (let i = 0; i < hi; i++)
    mx[i][y] = pair(mxa[i][y], mxb[i][y], mxc[i][y], i)
  return mx
}

export function quazipper(mxa, mxb, mxc, mxd, y, pair) {
  const hi = mxa?.length
  const mx = draft(hi, y)
  for (let i = 0; i < hi; i++)
    mx[i][y] = pair(mxa[i][y], mxb[i][y], mxc[i][y], mxd[i][y], i)
  return mx
}
