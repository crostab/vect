export function duozipper(a, b) {
  let { fn, hi, lo } = this
  const zip = Array(hi = hi ?? a?.length)
  for (let i = lo ?? 0; i < hi; i++) zip[i] = fn(a[i], b[i], i)
  return zip
}

export function trizipper(a, b, c) {
  let { fn, hi, lo } = this
  const zip = Array(hi = hi ?? a?.length)
  for (let i = lo ?? 0; i < hi; i++) zip[i] = fn(a[i], b[i], c[i], i)
  return zip
}

export function quazipper(a, b, c, d) {
  let { fn, hi, lo } = this
  const zip = Array(hi = hi ?? a?.length)
  for (let i = lo ?? 0; i < hi; i++) zip[i] = fn(a[i], b[i], c[i], d[i], i)
  return zip
}

export const Duozipper = (fn, lo, hi) => duozipper.bind({ fn, hi, lo })
export const Trizipper = (fn, lo, hi) => trizipper.bind({ fn, hi, lo })
export const Quazipper = (fn, lo, hi) => quazipper.bind({ fn, hi, lo })
