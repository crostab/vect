export const mutate = (ar, fn, l) => {
  l = l || ar && ar.length
  for (--l; l >= 0; l--) ar[l] = fn(ar[l], l)
  return ar
}
