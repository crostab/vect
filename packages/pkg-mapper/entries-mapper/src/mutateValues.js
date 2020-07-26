/**
 *
 * @param {[*,*][]} entries
 * @param {Function} valMap
 * @param {number} [l]
 * @returns {[*,*][]}
 */
export const mutateValues = (entries, valMap, l) => {
  l = l ?? entries?.length
  for (let i = 0, r; i < l; i++) {
    r = entries[i], r[1] = valMap(r[1], i)
  }
  return entries
}
