export const zipper = (a, b, fn, l) => {
  l = l || a && a.length
  const vec = Array(l)
  for (--l; l >= 0; l--) vec[l] = fn(a[l], b[l], l)
  return vec
}


