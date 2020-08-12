export const mutazip = (va, vb, fn, l) => {
  l = l || va?.length
  for (--l; l >= 0; l--) va[l] = fn(va[l], vb[l], l)
  return va
}
