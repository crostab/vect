export const rowMarginMapper = (row, i, fn, l, r, w) => {
  const ve = Array(w || (w = row?.length)), s = w - r
  for (--l; l >= 0; l--) ve[l] = fn(row[l], i, l)
  for (--w; w >= s; w--) ve[w] = fn(row[w], i, w)
  return ve
}
