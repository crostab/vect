export function column(y, h) {
  const mx = this, col = Array(h ?? (h = this?.length))
  for (--h; h >= 0; h--) col[h] = mx[h][y]
  return col
}