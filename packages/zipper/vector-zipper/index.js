const iterzip = (vca, vcb, proc) => {
  const hi = vca?.length
  for (let i = 0; i < hi; i++) proc(vca[i], vcb[i], i)
  return void 0
}

const mutazip = (vca, vcb, pair) => {
  const hi = vca?.length
  for (let i = 0; i < hi; i++) vca[i] = pair(vca[i], vcb[i], i)
  return vca
}

const zip = (vca, vcb, pair) => {
  const hi = vca?.length
  const vec = Array(hi)
  for (let i = 0; i < hi; i++) vec[i] = pair(vca[i], vcb[i], i)
  return vec
}

function duozipper(vca, vcb, pair) {
  const hi = vca?.length
  const vec = Array(hi)
  for (let i = 0; i < hi; i++) vec[i] = pair(vca[i], vcb[i], i)
  return vec
}

function trizipper(vca, vcb, vcc, pair) {
  const hi = vca?.length
  const vec = Array(hi)
  for (let i = 0; i < hi; i++) vec[i] = pair(vca[i], vcb[i], vcc[i], i)
  return vec
}

function quazipper(vca, vcb, vcc, vcd, pair) {
  const hi = vca?.length
  const vec = Array(hi)
  for (let i = 0; i < hi; i++) vec[i] = pair(vca[i], vcb[i], vcc[i], vcd[i], i)
  return vec
}

export { duozipper, iterzip, mutazip, quazipper, trizipper, zip, zip as zipper }
