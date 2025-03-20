export function duozipper(ena, enb, kPair, vPair) {
  vPair = vPair ?? kPair
  const hi = ena?.length
  const ents = Array(hi)
  for (let i = 0, a, b; i < hi; i++) {
    (a = ena[i], b = enb[i])
    ents[i] = [ kPair(a[0], b[0], i), vPair(a[1], b[1], i) ]
  }
  return ents
}

export function trizipper(ena, enb, enc, kPair, vPair) {
  vPair = vPair ?? kPair
  const hi = ena?.length
  const ents = Array(hi)
  for (let i = 0, a, b, c; i < hi; i++) {
    (a = ena[i], b = enb[i], c = enc[i])
    ents[i] = [ kPair(a[0], b[0], c[0], i), vPair(a[1], b[1], c[1], i) ]
  }
  return ents
}

export function quazipper(ena, enb, enc, end, kPair, vPair) {
  vPair = vPair ?? kPair
  const hi = ena?.length
  const ents = Array(hi)
  for (let i = 0, a, b, c, d; i < hi; i++) {
    (a = ena[i], b = enb[i], c = enc[i], d = end[i])
    ents[i] = [ kPair(a[0], b[0], c[0], d[0], i), vPair(a[1], b[1], c[1], d[1], i) ]
  }
  return ents
}
