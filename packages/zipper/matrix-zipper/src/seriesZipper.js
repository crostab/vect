export function duozipper(mxa, mxb, pair) {
  const ht = mxa?.length
  const wd = ht && mxa[0]?.length
  const mx = Array(ht)
  for (let i = 0; i < ht; i++) {
    for (let j = 0, rowA = mxa[i], rowB = mxb[i], row = mx[i] = Array(wd); j < wd; j++)
      row[j] = pair(rowA[j], rowB[j], i, j)
  }
  return mx
}

export function trizipper(mxa, mxb, mxc, pair) {
  const ht = mxa?.length
  const wd = ht && mxa[0]?.length
  const mx = Array(ht)
  for (let i = 0; i < ht; i++) {
    for (let j = 0, rowA = mxa[i], rowB = mxb[i], rowC = mxc[i], row = mx[i] = Array(wd); j < wd; j++)
      row[j] = pair(rowA[j], rowB[j], rowC[j], i, j)
  }
  return mx
}

export function quazipper(mxa, mxb, mxc, mxd, pair) {
  const ht = mxa?.length
  const wd = ht && mxa[0]?.length
  const mx = Array(ht)
  for (let i = 0; i < ht; i++) {
    for (let j = 0, rowA = mxa[i], rowB = mxb[i], rowC = mxc[i], rowD = mxd[i], row = mx[i] = Array(wd); j < wd; j++)
      row[j] = pair(rowA[j], rowB[j], rowC[j], rowD[j], i, j)
  }
  return mx
}
