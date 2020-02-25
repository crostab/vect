export function duozipper (ea, eb) {
  let { key, value, lo, hi } = this
  value = value || key, lo = lo || 0, hi = hi || ea && ea.length
  const entries = Array(hi)
  for (let i = --hi, a, b; i >= lo; i--) {
    (a = ea[i], b = eb[i])
    entries[i] = [key(a[0], b[0], i), value(a[1], b[1], i)]
  }
  return entries
}

export function trizipper (ea, eb, ec) {
  let { key, value, lo, hi } = this
  value = value || key, lo = lo || 0, hi = hi || ea && ea.length
  const entries = Array(hi)
  for (let i = --hi, a, b, c; i >= lo; i--) {
    (a = ea[i], b = eb[i], c = ec[i])
    entries[i] = [key(a[0], b[0], c[0], i), value(a[1], b[1], c[1], i)]
  }
  return entries
}

export function quazipper (ea, eb, ec, ed) {
  let { key, value, lo, hi } = this
  value = value || key, lo = lo || 0, hi = hi || ea && ea.length
  const entries = Array(hi)
  for (let i = --hi, a, b, c, d; i >= lo; i--) {
    (a = ea[i], b = eb[i], c = ec[i], d = ed[i])
    entries[i] = [key(a[0], b[0], c[0], d[0], i), value(a[1], b[1], c[1], d[1], i)]
  }
  return entries
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

