export const iterzip = (ma, mb, fn, w, h) => {
  h = h ?? ma?.length, w = w ?? ( h && ma[0]?.length )
  for (let i = 0; i < h; i++)
    for (let j = 0, ra = ma[i], rb = mb[i]; j < w; j++)
      fn(ra[j], rb[j], i, j)
  return void 0
}