export const mapper = function (vec, fn, l) {
  l = l || vec?.length
  const ve = Array(l)
  for (--l; l >= 0; l--) ve[l] = fn.call(this, vec[l], l)
  return ve
}




