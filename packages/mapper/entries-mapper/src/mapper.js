/**
 *
 * @param {[*,*][]} entries
 * @param {Function} keyTo
 * @param {Function} [valTo]
 * @param {number} [l]
 * @returns {[*,*][]}
 */
export function mapper(entries, keyTo, valTo, l) {
  l = l ?? entries?.length, valTo = valTo || keyTo
  const vec = Array(l)
  for (let i = 0, r; i < l; i++)
    r = entries[i], vec[i] = [ keyTo(r[0], i), valTo(r[1], i) ]
  return vec
}

/**
 *
 * @param {[*,*][]} entries
 * @param {Function} keyTo
 * @param {number} [l]
 * @returns {[*,*][]}
 */
export function mapKeys(entries, keyTo, l) {
  l = l ?? entries?.length
  const vec = Array(l)
  for (let i = 0, r; i < l; i++)
    r = entries[i], vec[i] = [ keyTo(r[0], i), r[1] ]
  return vec
}


/**
 *
 * @param {[*,*][]} entries
 * @param {Function} valTo
 * @param {number} [l]
 * @returns {[*,*][]}
 */
export function mapValues(entries, valTo, l) {
  l = l ?? entries?.length
  const vec = Array(l)
  for (let i = 0, r; i < l; i++)
    r = entries[i], vec[i] = [ r[0], valTo(r[1], i) ]
  return vec
}


