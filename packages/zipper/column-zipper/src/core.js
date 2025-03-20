import { draft } from '@vect/matrix-init'

export function iterzip(mxa, mxb, y, proc) {
  const hi = mxa?.length
  for (let i = 0; i < hi; i++)
    proc(mxa[i][y], mxb[i][y], i)
  return void 0
}

export const mutazip = (mxa, mxb, y, pair) => {
  const hi = mxa?.length
  for (let i = 0; i < hi; i++)
    mxa[i][y] = pair(mxa[i][y], mxb[i][y], i)
  return mxa
}

export const zip = (mxa, mxb, y, pair) => {
  const hi = mxa?.length
  const mx = draft(hi, y)
  for (let i = 0; i < hi; i++)
    mx[i][y] = pair(mxa[i][y], mxb[i][y], i)
  return mx
}
