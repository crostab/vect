export function duozipper (ea, eb) {
  let { key, value, lo, hi } = this
  lo = lo || 0
  const entries = Array(hi || (hi = ea && ea.length))
  for (let i = --hi, ra, rb; i >= lo; i--) {
    (ra = ea[i], rb = eb[i])
    entries[i] = [key(ra[0], rb[0], i), value(ra[1], rb[1], i)]
  }
  return entries
}

export function trizipper (ea, eb, ec) {
  let { key, value, lo, hi } = this
  lo = lo || 0
  const entries = Array(hi || (hi = ea && ea.length))
  for (let i = --hi, ra, rb, rc; i >= lo; i--) {
    (ra = ea[i], rb = eb[i], rc = ec[i])
    entries[i] = [key(ra[0], rb[0], rc[0], i), value(ra[1], rb[1], rc[1], i)]
  }
  return entries
}

export function quazipper (ea, eb, ec, ed) {
  let { key, value, lo, hi } = this
  lo = lo || 0
  const entries = Array(hi || (hi = ea && ea.length))
  for (let i = --hi, ra, rb, rc, rd; i >= lo; i--) {
    (ra = ea[i], rb = eb[i], rc = ec[i], rd = ed[i])
    entries[i] = [key(ra[0], rb[0], rc[0], rd[0], i), value(ra[1], rb[1], rc[1], rd[1], i)]
  }
  return entries
}

export const Duozipper = (key, value, { lo, hi } = {}) => duozipper.bind({ key, value, lo, hi })
export const Trizipper = (key, value, { lo, hi } = {}) => trizipper.bind({ key, value, lo, hi })
export const Quazipper = (key, value, { lo, hi } = {}) => quazipper.bind({ key, value, lo, hi })

