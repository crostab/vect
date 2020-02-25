export const mapper = function (vec, fn, l) {
  l = l || vec && vec.length
  const ar = Array(l)
  for (--l; l >= 0; l--) ar[l] = fn.call(this, vec[l], l)
  return ar
}




