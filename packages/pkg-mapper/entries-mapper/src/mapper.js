/**
 *
 * @param {[*,*][]} entries
 * @param {function} keyMap
 * @param {function} [valMap]
 * @param {number} [l]
 * @returns {[*,*][]}
 */
export const mapper = (entries, keyMap, valMap, l) => {
  l = l ?? entries?.length, valMap = valMap || keyMap
  const vec = Array(l)
  for (let i = 0, r; i < l; i++)
    r = entries[i], vec[i] = [keyMap(r[0], i), valMap(r[1], i)]
  return vec
}
