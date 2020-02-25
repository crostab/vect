export const select = (vec, indexes, hi) => {
  hi = hi || indexes.length
  const vc = Array(hi)
  for (--hi; hi >= 0b0; hi--) vc[hi] = vec[indexes[hi]]
  return vc
}
