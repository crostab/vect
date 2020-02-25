/**
 *
 * @param {[*,*][]} ents
 * @param {function} keyMap
 * @param {function} [valMap]
 * @param {number} [l]
 * @returns {[*,*][]}
 */
export const mutate = (ents, keyMap, valMap, l) => {
  l = l || ents && ents.length, valMap = valMap || keyMap
  for (let r; --l >= 0 && (r = ents[l]);) {
    r[0] = keyMap(r[0], l), r[1] = valMap(r[1], l)
  }
  return ents
}
