/**
 *
 * @param {[*,*][]} entries
 * @param {Function} valMap
 * @param {number} [l]
 * @returns {[*,*][]}
 */
export const mapValues = (entries, valMap, l) => {
  l = l ?? entries?.length
  const vec = Array(l)
  for (let i = 0, r; i < l; i++)
    r = entries[i], vec[i] = [r[0], valMap(r[1], i)]
  return vec
}
