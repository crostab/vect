export function duozipper(vca, vcb, pair) {
  const hi = vca?.length
  const vec = Array(hi)
  for (let i = 0; i < hi; i++) vec[i] = pair(vca[i], vcb[i], i)
  return vec
}

export function trizipper(vca, vcb, vcc, pair) {
  const hi = vca?.length
  const vec = Array(hi)
  for (let i = 0; i < hi; i++) vec[i] = pair(vca[i], vcb[i], vcc[i], i)
  return vec
}

export function quazipper(vca, vcb, vcc, vcd, pair) {
  const hi = vca?.length
  const vec = Array(hi)
  for (let i = 0; i < hi; i++) vec[i] = pair(vca[i], vcb[i], vcc[i], vcd[i], i)
  return vec
}
