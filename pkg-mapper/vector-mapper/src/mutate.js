export const mutate = (vec, fn, l) => {
  l = l || vec && vec.length
  for (--l; l >= 0; l--) vec[l] = fn(vec[l], l)
  return vec
}
