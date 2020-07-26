/**
 *
 * @param {[*,*][]} entries
 * @param {Function} keyFn
 * @param {Function} [valFn]
 * @param {number} [l]
 * @returns {undefined}
 */
export const iterate = function (entries, keyFn, valFn, l) {
  l = l ?? entries?.length, valFn = valFn || keyFn
  for (let i = 0, r; i < l; i++) {
    r = entries[i], keyFn.call(this, r[0], i) , valFn.call(this, r[1], i)
  }
}
