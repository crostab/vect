export const iterzip = (mxa, mxb, proc) => {
  const ht = mxa?.length
  const wd = ht && mxa[0]?.length
  for (let i = 0; i < ht; i++)
    for (let j = 0, ra = mxa[i], rb = mxb[i]; j < wd; j++)
      proc(ra[j], rb[j], i, j)
  return void 0
}

export const mutazip = (mxa, mxb, pair) => {
  const ht = mxa?.length
  const wd = ht && mxa[0]?.length
  for (let i = 0; i < ht; i++)
    for (let j = 0, ra = mxa[i], rb = mxb[i]; j < wd; j++)
      ra[j] = pair(ra[j], rb[j], i, j)
  return mxa
}

export const zip = (mxa, mxb, pair) => {
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
