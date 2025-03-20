const iterzip = (mxa, mxb, proc) => {
  const ht = mxa?.length
  const wd = ht && mxa[0]?.length
  for (let i = 0; i < ht; i++)
    for (let j = 0, ra = mxa[i], rb = mxb[i]; j < wd; j++)
      proc(ra[j], rb[j], i, j)
  return void 0
}

const mutazip = (mxa, mxb, pair) => {
  const ht = mxa?.length
  const wd = ht && mxa[0]?.length
  for (let i = 0; i < ht; i++)
    for (let j = 0, ra = mxa[i], rb = mxb[i]; j < wd; j++)
      ra[j] = pair(ra[j], rb[j], i, j)
  return mxa
}

const zip = (mxa, mxb, pair) => {
  const ht = mxa?.length
  const wd = ht && mxa[0]?.length
  const mx = Array(ht)
  for (let i = 0; i < ht; i++) {
    const row = mx[i] = Array(wd)
    for (let j = 0, ra = mxa[i], rb = mxb[i]; j < wd; j++)
      row[j] = pair(ra[j], rb[j], i, j)
  }
  return mx
}

function duozipper(mxa, mxb, pair) {
  const ht = mxa?.length
  const wd = ht && mxa[0]?.length
  const mx = Array(ht)
  for (let i = 0; i < ht; i++) {
    for (let j = 0, rowA = mxa[i], rowB = mxb[i], row = mx[i] = Array(wd); j < wd; j++)
      row[j] = pair(rowA[j], rowB[j], i, j)
  }
  return mx
}

function trizipper(mxa, mxb, mxc, pair) {
  const ht = mxa?.length
  const wd = ht && mxa[0]?.length
  const mx = Array(ht)
  for (let i = 0; i < ht; i++) {
    for (let j = 0, rowA = mxa[i], rowB = mxb[i], rowC = mxc[i], row = mx[i] = Array(wd); j < wd; j++)
      row[j] = pair(rowA[j], rowB[j], rowC[j], i, j)
  }
  return mx
}

function quazipper(mxa, mxb, mxc, mxd, pair) {
  const ht = mxa?.length
  const wd = ht && mxa[0]?.length
  const mx = Array(ht)
  for (let i = 0; i < ht; i++) {
    for (let j = 0, rowA = mxa[i], rowB = mxb[i], rowC = mxc[i], rowD = mxd[i], row = mx[i] = Array(wd); j < wd; j++)
      row[j] = pair(rowA[j], rowB[j], rowC[j], rowD[j], i, j)
  }
  return mx
}

export { duozipper, iterzip, mutazip, quazipper, trizipper, zip, zip as zipper }
