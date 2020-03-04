/**
 *
 * @param {[*,*][]} ents
 * @param {function} keyMap
 * @param {function} [valMap]
 * @param {number} [l]
 * @returns {[*,*][]}
 */
export const mapper = (ents, keyMap, valMap, l) => {
  l = l || ents && ents.length, valMap = valMap || keyMap
  const vec = Array(l)
  for (let i = 0, r; i < l; i++)
    r = ents[i], vec[i] = [keyMap(r[0], i), valMap(r[1], i)]
  return vec
}
