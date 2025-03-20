export const zipper = (ea, eb, keyFn, valFn, l) => {
  l = l || ea?.length
  const vec = Array(l--)
  for (let ra, rb; l >= 0 && (ra = ea[l]) && (rb = eb[l]); l--)
    vec[l] = [ keyFn(ra[0], rb[0], l), valFn(ra[1], rb[1], l) ]
  return vec
}
