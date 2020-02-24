/**
 *
 * @param {[*,*][]} ents
 * @param {function} keyFn
 * @param {function} [valFn]
 * @param {number} [l]
 * @returns {undefined}
 */
export const iterate = function (ents, keyFn, valFn, l) {
  l = l || ents && ents.length
  valFn = valFn || keyFn
  for (let r; --l >= 0 && (r = ents[l]);) {
    keyFn.call(this, r[0], l) , valFn.call(this, r[1], l)
  }
}
