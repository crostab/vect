/**
 *
 * @param {[*,*][]} entries
 * @param {Function} keyTo
 * @param {Function} [valTo]
 * @param {number} [l]
 * @returns {[*,*][]}
 */
export const mutate = (entries, keyTo, valTo, l) => {
  l = l ?? entries?.length, valTo = valTo || keyTo
  for (let i = 0, r; i < l; i++) {
    r = entries[i], r[0] = keyTo(r[0], i), r[1] = valTo(r[1], i)
  }
  return entries
}
/**
 *
 * @param {[*,*][]} entries
 * @param {Function} keyTo
 * @param {number} [l]
 * @returns {[*,*][]}
 */
export const mutateKeys = (entries, keyTo, l) => {
  l = l ?? entries?.length
  for (let i = 0, r; i < l; i++) {
    r = entries[i], r[0] = keyTo(r[0], i)
  }
  return entries
}

/**
 *
 * @param {[*,*][]} entries
 * @param {Function} valTo
 * @param {number} [l]
 * @returns {[*,*][]}
 */
export const mutateValues = (entries, valTo, l) => {
  l = l ?? entries?.length
  for (let i = 0, r; i < l; i++) {
    r = entries[i], r[1] = valTo(r[1], i)
  }
  return entries
}

