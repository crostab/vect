/**
 *
 * @param {[*,*][]} ents
 * @param {function} keyMap
 * @param {function} [valMap]
 * @param {number} [l]
 * @returns {[*,*][]}
 */
export const mapper = (ents, keyMap, valMap, l) => {
  l = l || ents && ents.length
  valMap = valMap || keyMap
  const vec = Array(l)
  for (let r; --l >= 0 && (r = ents[l]);)
    vec[l] = [keyMap(r[0], l), valMap(r[1], l)]
  return vec
}
