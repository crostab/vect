/**
 *
 * @param {[*,*][]} entries
 * @param {function} keyMap
 * @param {number} [l]
 * @returns {[*,*][]}
 */
export const mutateKeys = (entries, keyMap, l) => {
  l = l ?? entries?.length
  for (let i = 0, r; i < l; i++) {
    r = entries[i], r[0] = keyMap(r[0], i)
  }
  return entries
}
