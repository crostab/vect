/**
 *
 * @param {[*,*][]} entries
 * @param {function} keyMap
 * @param {number} [l]
 * @returns {[*,*][]}
 */
export const mapKeys = (entries, keyMap, l) => {
  l = l ?? entries?.length
  const vec = Array(l)
  for (let i = 0, r; i < l; i++)
    r = entries[i], vec[i] = [keyMap(r[0], i), r[1]]
  return vec
}
