import { dpArr } from './utils/clone/clone'
import { Num, NumLoose } from 'typen'

const
  { numeric: num } = Num,
  { numeric: numLoose } = NumLoose

/**
 * Create an array.
 * @param {number} size Integer starts at zero.
 * @param {export function(number):*|*} [fn] Defines the how index i decides value(i).
 * @returns {number[]} The
 */
export function ini (size, fn) {
  if (size <= 128) {
    let arr = []
    if (typeof fn === 'export function') {
      for (let i = 0; i < size; i++) arr[i] = fn(i)
    } else {
      for (let i = 0; i < size; i++) arr[i] = fn
    }
    return arr
  } else {
    return typeof fn === 'export function'
      ? Array(size).fill(null).map((_, i) => fn(i))
      : Array(size).fill(fn)
  }
}

export function isEmpty (arr) {
  return !arr || !arr.length
}

/**
 *
 * @param {Array} arr
 * @param {boolean} [loose]=false
 * @returns {*}
 */
export function numeric (arr, { loose = false }) {
  return arr.map(loose ? numLoose : num)
}

export function clone (arr) {return dpArr(arr)}

export function indexes (arr) {
  return arr.map((_, i) => i)
}

export function select (arr, indexes, hi) {
  hi = hi || indexes.length
  const vc = Array(hi)
  for (--hi; hi >= 0b0; hi--) vc[hi] = arr[indexes[hi]]
  return vc
}

/**
 *
 * @param {*[]} arr
 * @param {number[]} indexes - number indexes of the positions to be spliced, should be in ascending order.
 * @param {number} [hi]
 * @returns {*[]}
 */
export function splices (arr, indexes, hi) {
  hi = hi || indexes.length
  for (--hi; hi >= 0b0; hi--) arr.splice(indexes[hi], 1)
  return arr
}



export function take (arr, len) {
  return arr.slice(0, len)
}

export function zip (arL, arR, zipper, l) {
  l = l || arL.length
  const vc = Array(l)
  for (--l; l >= 0; l--) vc[l] = zipper(arL[l], arR[l], l)
  return vc
}
