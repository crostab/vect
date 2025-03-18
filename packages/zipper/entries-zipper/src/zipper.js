import { duozipper } from './seriesZipper.js'

/**
 *
 * @param {[*,*][]} entA
 * @param {[*,*][]} entB
 * @param {function} keyMap
 * @param {function} [valMap]
 * @param {number} [hi]
 * @returns {[*,*][]}
 */
export const zipper = (entA, entB, keyMap, valMap, hi) =>
  duozipper.call({ key: keyMap, value: valMap, hi }, entA, entB)
