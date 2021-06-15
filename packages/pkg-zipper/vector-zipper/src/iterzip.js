export const iterzip = (va, vb, action, hi) => {
  hi = hi ?? va?.length
  for (let i = 0; i < hi; i++) action(va[i], vb[i], i)
  return void 0
}
