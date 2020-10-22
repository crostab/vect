export function duozipper (a, b) {
  let { fn, lo, hi } = this
  lo = lo || 0
  const vec = Array(hi = hi || a?.length)
  for (--hi; hi >= lo; hi--) vec[hi] = fn(a[hi], b[hi], hi)
  return vec
}

export function trizipper (a, b, c) {
  let { fn, lo, hi } = this
  lo = lo || 0
  const vec = Array(hi = hi || a?.length)
  for (--hi; hi >= lo; hi--) vec[hi] = fn(a[hi], b[hi], c[hi], hi)
  return vec
}

export function quazipper (a, b, c, d) {
  let { fn, lo, hi } = this
  lo = lo || 0
  const vec = Array(hi = hi || a?.length)
  for (--hi; hi >= lo; hi--) vec[hi] = fn(a[hi], b[hi], c[hi], d[hi], hi)
  return vec
}

export const Duozipper = (fn, { lo, hi } = {}) => duozipper.bind({ fn, lo, hi })
export const Trizipper = (fn, { lo, hi } = {}) => trizipper.bind({ fn, lo, hi })
export const Quazipper = (fn, { lo, hi } = {}) => quazipper.bind({ fn, lo, hi })
