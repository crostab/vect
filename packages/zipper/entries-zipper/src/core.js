/**
 *
 * @param {[*,*][]} ena
 * @param {[*,*][]} enb
 * @param {function} kProc
 * @param {function} [vProc]
 * @returns {[*,*][]}
 */
export const iterzip = (ena, enb, kProc, vProc) => {
  const hi = ena?.length
  vProc = vProc ?? kProc
  for (let i = 0, a, b; i < hi && (a = ena[i]) && (b = enb[i]); i++) {
    kProc(a[0], b[0], i)
    vProc(a[1], b[1], i)
  }
  return void 0
}

/**
 *
 * @param {[*,*][]} ena
 * @param {[*,*][]} enb
 * @param {function} kPair
 * @param {function} [vPair]
 * @returns {[*,*][]}
 */
export const mutazip = (ena, enb, kPair, vPair) => {
  const hi = ena?.length
  vPair = vPair ?? kPair
  for (let i = 0, a, b; i < hi && (a = ena[i]) && (b = enb[i]); i++) {
    a[0] = kPair(a[0], b[0], i)
    a[1] = vPair(a[1], b[1], i)
  }
  return ena
}

/**
 *
 * @param {[*,*][]} ena
 * @param {[*,*][]} enb
 * @param {function} kPair
 * @param {function} [vPair]
 * @returns {[*,*][]}
 */
export const zip = (ena, enb, kPair, vPair) => {
  const hi = ena?.length
  vPair = vPair ?? kPair
  const ent = Array(hi)
  for (let i = 0, a, b; i < hi && (a = ena[i]) && (b = enb[i]); i++) {
    ent[i] = [ kPair(a[0], b[0], i), vPair(a[1], b[1], i) ]
  }
  return ent
}