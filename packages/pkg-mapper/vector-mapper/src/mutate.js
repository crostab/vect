export function mutate(vec, fn, l) {
  l = l || vec?.length
  for (--l; l >= 0; l--) vec[l] = fn.call(this, vec[l], l)
  return vec
}
