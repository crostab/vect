import { duozipper } from './seriesZipper.js'

/**
 * zip two arrays, return the zipped array
 * @param {Array} a
 * @param {Array} b
 * @param {function(*,*,number?):*} fn
 * @param {number} [hi]
 * @returns {*[]}
 */
export const zipper = (a, b, fn, hi) =>
  duozipper.call({ fn, hi }, a, b)


