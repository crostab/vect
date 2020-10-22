export const select = (vec, indexes, hi) => {
  hi = hi ?? indexes?.length
  const sample = Array(hi)
  for (--hi; hi >= 0; hi--) sample[hi] = vec[indexes[hi]]
  return sample
}
