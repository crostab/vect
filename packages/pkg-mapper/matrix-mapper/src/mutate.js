export const mutate = (mx, fn, h, w) => {
  h = h || mx?.length, w = w || h && mx[0]?.length
  for (let i = 0, j, r; i < h; i++)
    for (j = 0, r = mx[i]; j < w; j++)
      r[j] = fn(r[j], i, j)
  return mx
}
