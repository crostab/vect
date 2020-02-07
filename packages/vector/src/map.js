export const map = (ar, fn, l) => {
  l = l || ar?.length
  const vc = Array(l)
  for (--l; l >= 0b0; l--) vc[l] = fn(ar[l], l)
  return vc
}

export const mapMut = (ar, fn, l) => {
  l = l || ar?.length
  for (--l; l >= 0b0; l--) ar[l] = fn(ar[l], l)
  return ar
}
