export const iterzip = (vca, vcb, proc) => {
  const hi = vca?.length
  for (let i = 0; i < hi; i++) proc(vca[i], vcb[i], i)
  return void 0
}

export const mutazip = (vca, vcb, pair) => {
  const hi = vca?.length
  for (let i = 0; i < hi; i++) vca[i] = pair(vca[i], vcb[i], i)
  return vca
}

export const zip = (vca, vcb, pair) => {
  const hi = vca?.length
  const vec = Array(hi)
  for (let i = 0; i < hi; i++) vec[i] = pair(vca[i], vcb[i], i)
  return vec
}