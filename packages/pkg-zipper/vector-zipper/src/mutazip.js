export const mutazip = (va, vb, fn, hi) => {
  hi = hi ?? va?.length
  for (let i = 0; i < hi; i++) va[i] = fn(va[i], vb[i], i)
  return va
}
