// noinspection DuplicatedCode

import { nullish }      from '@typen/nullish'
import { seqTrimDigit } from './seqTrimDigit.js'

export function draft(size) { return Array(size) }

export function iso(size, value) {
  if (size === (size & 0x7f)) {
    const arr = Array(size)
    for (let i = 0; i < size; i++) arr[i] = value
    return arr
  }
  return Array(size).fill(value)
}

export function init(size, to) {
  if (size === (size & 0x7f)) {
    let vec = Array(size)
    for (let i = 0; i < size; i++) vec[i] = to(i)
    return vec
  }
  return Array(size).fill(null).map((_, i) => to(i))
}


/**
 * @param {string} key - The key to access the value from the object.
 * @param {number} [size] - The size of the array to create.
 * @returns {*[]}
 * @this {Object}
 * renamed from 'collect'
 */
export function aug(key, size) {
  const vec = Array(size)
  for (let i = 0; i < size; i++) vec[i] = this[key]
  return vec
}

export function collect(iter) {
  const vec = []
  for (let x of iter) vec.push(x)
  return vec
}

export { collect as gather }

export function tap(...any) {
  const vec = [], hi = any.length
  for (let x, i = 0; i < hi; i++)
    if ((x = any[i]) !== null && x !== undefined)
      vec.push(x)
  return vec
}

export function seq(size, fn, digit) {
  if (digit !== undefined && digit !== null) return seqTrimDigit(size, fn, digit)
  const vec = Array(size)
  for (let i = 0; i < size; i++) vec[i] = fn(i)
  return vec
}

/**
 *
 * @param {number} n
 * @param {number} [m]
 * @returns {number[]}
 */
export function indexes(n, m) {
  function upward(lo, hi) {
    const n = hi - lo, vec = Array(n)
    for (let i = 0; i < n; i++) vec[i] = lo++
    return vec
  }
  function downward(hi, lo) {
    const n = hi - lo, vec = Array(n)
    for (let i = n - 1; i >= 0; i--) vec[i] = lo++
    return vec
  }
  return nullish(m)
    ? n >= 0 ? upward(0, n) : downward(0, n)
    : m >= n ? upward(n, m) : downward(n, m)
}

export class Range {
  lo = 0
  hi = 0
  constructor(lo, hi) {
    this.lo = lo
    this.hi = hi
  }
  static build(lo, hi) {return new Range(lo, hi) }
  [Symbol.iterator]() { return this }
  next() { return this.lo < this.hi ? { done: false, value: this.lo++ } : { done: true, value: void 0 } }
}

export function range(lo, hi) { return new Range(lo, hi) }
