function duozipper(ena, enb, kPair, vPair) {
  vPair = vPair ?? kPair
  const hi = ena?.length
  const ents = Array(hi)
  for (let i = 0, a, b; i < hi; i++) {
    (a = ena[i], b = enb[i])
    ents[i] = [ kPair(a[0], b[0], i), vPair(a[1], b[1], i) ]
  }
  return ents
}

function trizipper(ena, enb, enc, kPair, vPair) {
  vPair = vPair ?? kPair
  const hi = ena?.length
  const ents = Array(hi)
  for (let i = 0, a, b, c; i < hi; i++) {
    (a = ena[i], b = enb[i], c = enc[i])
    ents[i] = [ kPair(a[0], b[0], c[0], i), vPair(a[1], b[1], c[1], i) ]
  }
  return ents
}

function quazipper(ena, enb, enc, end, kPair, vPair) {
  vPair = vPair ?? kPair
  const hi = ena?.length
  const ents = Array(hi)
  for (let i = 0, a, b, c, d; i < hi; i++) {
    (a = ena[i], b = enb[i], c = enc[i], d = end[i])
    ents[i] = [ kPair(a[0], b[0], c[0], d[0], i), vPair(a[1], b[1], c[1], d[1], i) ]
  }
  return ents
}

/**
 *
 * @param {[*,*][]} ena
 * @param {[*,*][]} enb
 * @param {function} kProc
 * @param {function} [vProc]
 * @returns {[*,*][]}
 */
const iterzip = (ena, enb, kProc, vProc) => {
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
const mutazip = (ena, enb, kPair, vPair) => {
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
const zip = (ena, enb, kPair, vPair) => {
  const hi = ena?.length
  vPair = vPair ?? kPair
  const ent = Array(hi)
  for (let i = 0, a, b; i < hi && (a = ena[i]) && (b = enb[i]); i++) {
    ent[i] = [ kPair(a[0], b[0], i), vPair(a[1], b[1], i) ]
  }
  return ent
}

export { duozipper, iterzip, mutazip, quazipper, trizipper, zip, zip as zipper }
