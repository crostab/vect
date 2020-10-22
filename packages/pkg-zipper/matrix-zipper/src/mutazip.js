export const mutazip = (ma, mb, fn, w, h) => {
  h = h || ma?.length, w = w || h && ma[0]?.length
  for (let i = 0, j, ra, rb; i < h; i++)
    for (j = 0, ra = ma[i], rb = mb[i]; j < w; j++)
      ra[j] = fn(ra[j], rb[j], i, j)
  return ma
}
