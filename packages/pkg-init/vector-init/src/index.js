import { nullish }      from '@typen/nullish'
import { seqTrimDigit } from './seqTrimDigit'

export const draft = size => Array(size)

export const iso = (size, value) => {
  if (size === (size & 0x7f)) {
    const arr = []
    for (let i = 0; i < size; i++) arr[i] = value
    return arr
  }
  return Array(size).fill(value)
}

/**
 * Create an array.
 * @param {number} size Integer starts at zero.
 * @param {function(number):*|*} [fn] Defines the how index i decides value(i).
 * @returns {number[]} The
 */
export const init = (size, fn) => {
  if (size === (size & 0x7f)) {
    let arr = []
    for (let i = 0; i < size; i++) arr[i] = fn(i)
    return arr
  }
  return Array(size).fill(null).map((_, i) => fn(i))
}

/**
 *
 * @param {number} size length
 * @param {function(?number):*} fn function
 * @param {?number} [digit]
 * @returns {*[]}
 */
export const seq = (size, fn, digit) => {
  if (digit !== null && digit !== void 0) return seqTrimDigit(size, fn, digit)
  const ar = Array(size)
  for (let i = 0; i < size; i++) ar[i] = fn(i)
  return ar
}

export const range = (start, end) => {
  let v, l
  if (start <= end) {
    l = end - start, v = new Array(++l)
    for (let i = 0; i < l; i++) v[i] = start++
  } else {
    l = start - end, v = new Array(++l)
    for (--l; l >= 0; l--) v[l] = end++
  }
  return v
}

export const tap = (...list) => {
  const ve = []
  for (let x of list)
    if (!nullish(x))
      ve.push(x)
  return ve
}
