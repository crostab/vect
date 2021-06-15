export function duozipper(ea, eb) {
  let { key, value, lo, hi } = this
  value = value ?? key, hi = hi ?? ea?.length
  const zip = Array(hi)
  for (let i = lo ?? 0, a, b; i < hi; i++) {
    ( a = ea[i], b = eb[i] )
    zip[i] = [ key(a[0], b[0], i), value(a[1], b[1], i) ]
  }
  return zip
}

export function trizipper(ea, eb, ec) {
  let { key, value, lo, hi } = this
  value = value ?? key, hi = hi ?? ea?.length
  const zip = Array(hi)
  for (let i = lo ?? 0, a, b, c; i < hi; i++) {
    ( a = ea[i], b = eb[i], c = ec[i] )
    zip[i] = [ key(a[0], b[0], c[0], i), value(a[1], b[1], c[1], i) ]
  }
  return zip
}

export function quazipper(ea, eb, ec, ed) {
  let { key, value, lo, hi } = this
  value = value ?? key, hi = hi ?? ea?.length
  const zip = Array(hi)
  for (let i = lo ?? 0, a, b, c, d; i < hi; i++) {
    ( a = ea[i], b = eb[i], c = ec[i], d = ed[i] )
    zip[i] = [ key(a[0], b[0], c[0], d[0], i), value(a[1], b[1], c[1], d[1], i) ]
  }
  return zip
}

/**
 *
 * @param {function(*,*,number):*} key
 * @param {function(*,*,number):*} [value]
 * @param {number} [lo]
 * @param {number} [hi]
 * @returns {function|function([*,*][],[*,*][],number?):[*,*][]}
 */
export const Duozipper = (key, value, { lo, hi } = {}) => duozipper.bind({ key, value, lo, hi })

/**
 *
 * @param {function(*,*,*,number):*} key
 * @param {function(*,*,*,number):*} [value]
 * @param {number} [lo]
 * @param {number} [hi]
 * @returns {function|function([*,*][],[*,*][],[*,*][],number?):[*,*][]}
 */
export const Trizipper = (key, value, { lo, hi } = {}) => trizipper.bind({ key, value, lo, hi })

/**
 *
 * @param {function(*,*,*,*,number):*} key
 * @param {function(*,*,*,*,number):*} [value]
 * @param {number} [lo]
 * @param {number} [hi]
 * @returns {function|function([*,*][],[*,*][],[*,*][],[*,*][],number?):[*,*][]}
 */
export const Quazipper = (key, value, { lo, hi } = {}) => quazipper.bind({ key, value, lo, hi })

