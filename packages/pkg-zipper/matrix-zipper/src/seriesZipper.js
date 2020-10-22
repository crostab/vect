export function duozipper (ma, mb) {
  let { fn, t, b, l, r } = this
  t = t || 0 , b = b || ma.length , l = l || 0 , r = r || b && ma[0].length
  const mx = Array(b)
  for (let i = t, j, ro, ra, rb; i < b; i++) {
    (ra = ma[i], rb = mb[i])
    for (j = l, mx[i] = ro = Array(r); j < r; j++)
      ro[j] = fn(ra[j], rb[j], i, j)
  }
  return mx
}

export function trizipper (ma, mb, mc) {
  let { fn, t, b, l, r } = this
  t = t || 0 , b = b || ma.length , l = l || 0 , r = r || b && ma[0].length
  const mx = Array(b)
  for (let i = t, j, ro, ra, rb, rc; i < b; i++) {
    (ra = ma[i], rb = mb[i], rc = mc[i])
    for (j = l, mx[i] = ro = Array(r); j < r; j++)
      ro[j] = fn(ra[j], rb[j], rc[j], i, j)
  }
  return mx
}

export function quazipper (ma, mb, mc, md) {
  let { fn, t, b, l, r } = this
  t = t || 0 , b = b || ma.length , l = l || 0 , r = r || b && ma[0].length
  const mx = Array(b)
  for (let i = t, j, ro, ra, rb, rc, rd; i < b; i++) {
    (ra = ma[i], rb = mb[i], rc = mc[i], rd = md[i])
    for (j = l, mx[i] = ro = Array(r); j < r; j++)
      ro[j] = fn(ra[j], rb[j], rc[j], rd[j], i, j)
  }
  return mx
}

export const Duozipper = (fn, { t, b, l, r } = {}) => duozipper.bind({ fn, t, b, l, r })
export const Trizipper = (fn, { t, b, l, r } = {}) => trizipper.bind({ fn, t, b, l, r })
export const Quazipper = (fn, { t, b, l, r } = {}) => quazipper.bind({ fn, t, b, l, r })
