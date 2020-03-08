export const rowMarginMutate = (row, i, fn, l, r, w) => {
  w = w || row && row.length
  const s = w - r
  for (--l; l >= 0; l--) row[l] = fn(row[l], i, l)
  for (--w; w >= s; w--) row[w] = fn(row[w], i, w)
  return row
}
