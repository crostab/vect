/**
 *
 * @param {[*,*][]} entries
 * @param {function} keyMap
 * @param {function} [valMap]
 * @param {number} [l]
 * @returns {[*,*][]}
 */
export const mutate = (entries, keyMap, valMap, l) => {
  l = l ?? entries?.length, valMap = valMap || keyMap
  for (let i = 0, r; i < l; i++) {
    r = entries[i], r[0] = keyMap(r[0], i), r[1] = valMap(r[1], i)
  }
  return entries
}
