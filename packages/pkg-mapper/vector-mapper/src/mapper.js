export function mapper(vec, fn, l) {
  l = l || vec?.length
  const ve = Array(l)
  for (--l; l >= 0; l--) ve[l] = fn.call(this, vec[l], l)
  return ve
}

export function iterate(vec, fn, l) {
  l = l || vec?.length
  for (let i = 0; i < l; i++)
    fn.call(this, vec[i], i)
}

export function mutate(vec, fn, l) {
  l = l || vec?.length
  for (--l; l >= 0; l--) vec[l] = fn.call(this, vec[l], l)
  return vec
}

export function reviter(vec, fn, l) {
  l = l || vec?.length
  for (--l; l >= 0; l--)
    fn.call(this, vec[l], l)
}





