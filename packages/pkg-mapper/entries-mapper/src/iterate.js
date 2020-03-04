/**
 *
 * @param {[*,*][]} ents
 * @param {function} keyFn
 * @param {function} [valFn]
 * @param {number} [l]
 * @returns {undefined}
 */
export const iterate = function (ents, keyFn, valFn, l) {
  l = l || ents && ents.length, valFn = valFn || keyFn
  for (let i = 0, r; i < l; i++) {
    r = ents[i], keyFn.call(this, r[0], i) , valFn.call(this, r[1], i)
  }
}
