/**
 *
 * @param {[*,*][]} entries
 * @param {Function} onKey
 * @param {Function} [onVal]
 * @param {number} [l]
 * @returns {undefined}
 */
export function iterate(entries, onKey, onVal, l) {
  l = l ?? entries?.length, onVal = onVal || onKey
  for (let i = 0, r; i < l; i++) {
    r = entries[i], onKey.call(this, r[0], i) , onVal.call(this, r[1], i)
  }
}


/**
 *
 * @param {[*,*][]} entries
 * @param {Function} onKey
 * @param {number} [l]
 * @returns {undefined}
 */
export function iterateKeys(entries, onKey, l) {
  l = l ?? entries?.length
  for (let i = 0, r; i < l; i++) {
    r = entries[i], onKey.call(this, r[0], i)
  }
}


/**
 *
 * @param {[*,*][]} entries
 * @param {Function} onVal
 * @param {number} [l]
 * @returns {undefined}
 */
export function iterateValues(entries, onVal, l) {
  l = l ?? entries?.length
  for (let i = 0, r; i < l; i++) {
    r = entries[i], onVal.call(this, r[1], i)
  }
}

