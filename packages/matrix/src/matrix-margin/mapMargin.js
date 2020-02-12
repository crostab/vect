export const copyRowMargin = (row, i, fn, l, r, w) => {
  const ve = Array(w), s = w - r
  for (--l; l >= 0; l--) ve[l] = fn(row[l], i, l)
  for (--w; w >= s; w--) ve[w] = fn(row[w], i, w)
  return ve
}

export const mapMargin = (mx, fn, t, b, l, r, h, w) => {
  const x = Array(h), bs = h - b
  for (let i = 0; i < t; i++) x[i] = copyRowMargin(mx[i], i, fn, l, r, w)
  for (let i = bs; i < h; i++) x[i] = copyRowMargin(mx[i], i, fn, l, r, w)
  return x
}
